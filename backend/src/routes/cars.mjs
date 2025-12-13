// import { Router } from "express";
// import Car from "../models/Car.mjs";
// import validateCar from "../validations/carValidation.mjs";
// import { upload } from "../middleware/uploadImages.mjs";
// const router = Router();

// router.get("/", async (req, res) => {
//   let {
//     type,
//     brand,
//     model,
//     min_price,
//     max_price,
//     ac,
//     page = 1,
//     limit = 10,
//   } = req.query;

//   page = Number(page);
//   limit = Number(limit);
//   if (isNaN(page) || page < 1) page = 1;
//   if (isNaN(limit) || limit < 1) limit = 10;
//   if (limit > 100) limit = 100;

//   const filters = {};
//   if (type) {
//     const types = type.split(",");
//     filters.type = { $in: types };
//   }
//   if (brand) {
//     const brands = brand.split(",");
//     filters.brand = { $in: brands };
//   }
//   if (model) {
//     const models = model.split(",");
//     filters.model = { $in: models };
//   }
//   if (min_price) {
//     filters.price = { $gte: min_price };
//   }
//   if (max_price) {
//     filters.price = { $lte: max_price };
//   }
//   if (ac) {
//     filters.ac = ac;
//   }

//   const total = Car.countDocuments(filters);
//   const total_pages = Math.ceil(total / limit);
//   if (page > total_pages && total_pages > 0)
//     return res.status(404).send({ message: "Page not found" });
//   const skip = (page - 1) * limit;
//   const cars = Car.find(filters).skip(skip).limit(limit);
//   res.send({
//     page,
//     limit,
//     totalCars: total,
//     totalPages: total_pages,
//     cars,
//   });
// });

// router.get("/:id", async (req, res) => {
//   const car = await Car.findById(req.params.id);
//   if (!car)
//     return res.status(404).send({ message: "لم يتم العثور على السيارة" });
//   res.send(car);
// });

// router.post("/", upload.array("carImages", 4), async (req, res) => {
//   try {
//     const files = req.files;

//     if (!files || files.length < 1 || files.length > 4) {
//       return res
//         .status(400)
//         .send({ message: "يجب رفع على الأقل صورة واحدة وبحد أقصى 4 صور" });
//     }

//     const host = req.protocol + "://" + req.get("host"); // http://localhost:5000
//     const imageUrls = files.map(
//       (file) => `${host}/uploads/cars/${file.filename}`
//     );

//     const carData = {
//       ...req.body,
//       images: imageUrls,
//     };

//     await validateCar.validateAsync(carData, { abortEarly: false });

//     const car = await Car.create(carData);

//     res.status(201).send({ message: "تم اضافة السيارة بنجاح", car });
//   } catch (error) {
//     if (error.details) {
//       return res.status(400).send({
//         message: "خطأ في البيانات المرسلة",
//         details: error.details.map((d) => d.message),
//       });
//     }

//     res.status(500).send({ message: "خطأ في الخادم", error: error.message });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     await validateCar.validateAsync(req.body);
//     const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!car)
//       return res.status(404).send({ message: "لم يتم العثور على السيارة" });
//     res.send({ message: "تم تحديث السيارة بنجاح", car });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   const car = await Car.findByIdAndDelete(req.params.id);
//   if (!car)
//     return res.status(404).send({ message: "لم يتم العثور على السيارة" });
//   res.send({ message: "تم حذف السيارة بنجاح", car });
// });

// export default router;

import { Router } from "express";
import Car from "../models/Car.mjs";
import validateCar from "../validations/carValidation.mjs";
import { upload } from "../middleware/uploadImages.mjs";
import { uploadToCloudinary } from "../utilts/uploadToCloudinary.mjs";
import csrfDoubleSubmit from "../middleware/csrfDoubleSubmit.mjs";
import validateToken from "../middleware/auth.mjs";
import validateRole from "../middleware/authz.mjs";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let {
      type,
      brand,
      model,
      price_gte: min_price,
      price_lte: max_price,
      search,
      features = "",
      transmission,
      status,
      page = 1,
      limit = 10,
    } = req.query;

    page = Number(page);
    limit = Number(limit);
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(limit) || limit < 1) limit = 10;
    if (limit > 100) limit = 100;

    const filters = {};
    if (type) filters.type = { $in: type.split(",") };
    if (brand) filters.brand = { $in: brand.split(",") };
    if (model) filters.model = { $in: model.split(",") };
    if (min_price || max_price) {
      filters.price = {};
      if (min_price) filters.price.$gte = Number(min_price);
      if (max_price) filters.price.$lte = Number(max_price);
    }
    if (features) {
      filters.features = { $all: features.split(",") };
    }
    if (transmission) filters.transmission = { $in: transmission.split(",") };
    if (status) filters.status = { $in: status.split(",") };

    if (search) {
      const searchRegex = new RegExp(search, "i");

      filters.$or = [
        { brand: searchRegex },
        { model: searchRegex },
        { type: searchRegex },
        { fuelType: searchRegex },
        { transmission: searchRegex },
        { status: searchRegex },
        { features: searchRegex },

        !isNaN(search) ? { year: Number(search) } : null,
        !isNaN(search) ? { price: Number(search) } : null,
        !isNaN(search) ? { mileage: Number(search) } : null,
      ].filter(Boolean);
    }
    // ✅ مهم: await لكل عمليات DB
    const total = await Car.countDocuments(filters);
    const total_pages = Math.ceil(total / limit);

    if (page > total_pages && total_pages > 0) {
      return res.status(404).send({ message: "Page not found" });
    }

    const skip = (page - 1) * limit;
    const cars = await Car.find(filters).skip(skip).limit(limit).lean(); // مهم
    const sanitizedCars = cars.map((car) => {
      car.id = car._id.toString();
      delete car._id;
      delete car.__v;
      delete car.createdAt;
      return car;
    });
    res.send({
      page,
      limit,
      totalCars: total,
      totalPages: total_pages,
      cars,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car)
    return res.status(404).send({ message: "لم يتم العثور على السيارة" });
  res.send(car);
});

router.post(
  "/",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  upload.array("carImages", 4),
  async (req, res) => {
    try {
      const files = req.files;

      if (!files || files.length === 0) {
        return res
          .status(400)
          .send({ message: "يجب رفع صورة واحدة على الأقل" });
      }

      const imageUrls = [];
      for (let file of files) {
        const url = await uploadToCloudinary(file.buffer, "cars");
        imageUrls.push(url);
      }

      const carData = {
        ...req.body,
        images: imageUrls,
      };

      const car = await Car.create(carData);

      res.status(201).send({ message: "تم اضافة السيارة بنجاح", car });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
);

router.put(
  "/:id",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  async (req, res) => {
    try {
      await validateCar.validateAsync(req.body);
      const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!car)
        return res.status(404).send({ message: "لم يتم العثور على السيارة" });
      res.send({ message: "تم تحديث السيارة بنجاح", car });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
);

router.delete(
  "/:id",
  csrfDoubleSubmit,
  validateToken,
  validateRole,
  async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car)
      return res.status(404).send({ message: "لم يتم العثور على السيارة" });
    res.send({ message: "تم حذف السيارة بنجاح", car });
  }
);

export default router;
