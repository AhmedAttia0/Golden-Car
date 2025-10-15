function Second() {
  return (
    <div className="mb-11">
      <section className=" flex justify-center ">
        <video className=" w-[90%]  rounded-lg  md:w-[75%]" controls>
          <source
            src="istockphoto-1221801611-640_adpp_is.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="flex justify-evenly mt-8 gap-8 p-6">
        <div className="text-center">
          <h1 className="text-[#5937E0] text-[2em] font-bold">10k+</h1>
          <p>عملاء سعداء</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#5937E0] text-[2em] font-bold">540+</h1>
          <p>عدد السيارات</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#5937E0] text-[2em] font-bold">20+</h1>
          <p>سنوات الخبره</p>
        </div>
      </section>
    </div>
  );
}

export default Second;
