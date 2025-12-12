import { Typography } from "@material-tailwind/react";
const featureOptions = [
  "ABS",
  "مكيف هواء",
  "الفرامل المانعة للانغلاق",
  "وسائد هوائية",
  "التحكم في السرعة",
  "حساسات ركن",
];
export default function Features({ formData, setFormData }) {
  const toggleFeature = (feature) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);

      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };
  return (
    <>
      <Typography variant="small" color="white" className="mb-2 font-medium">
        مميزات
      </Typography>

      <div className="grid grid-cols-2 gap-2">
        {featureOptions.map((feature) => (
          <label
            key={feature}
            className="flex items-center gap-2 text-white cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#5937E0]"
              checked={formData.features.includes(feature)}
              onChange={() => toggleFeature(feature)}
            />
            <span>{feature}</span>
          </label>
        ))}
      </div>
    </>
  );
}
