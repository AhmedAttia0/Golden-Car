import { Typography, Checkbox } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";
function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
export default function FilterationOption({
  option: { optionValue, optionCount },
  filtertypeKey,
  onFilter,
}) {
  const [searchParams] = useSearchParams();

  const existingValues = searchParams.get(filtertypeKey)?.split(",");

  const isChecked = existingValues?.includes(optionValue) || false;

  return (
    <div className="flex !justify-between items-center">
      <Checkbox
        ripple={false}
        color="deep-purple"
        checked={isChecked}
        onChange={() => onFilter(filtertypeKey, optionValue)}
        label={
          <Typography
            variant="small"
            color="blue-gray"
            className="font-medium ms-2"
          >
            {capitalize(optionValue)}
          </Typography>
        }
        containerProps={{ className: "-ml-3 py-2" }}
      />
      <Typography variant="small" color="blue-gray" className="font-medium">
        {optionCount}
      </Typography>
    </div>
  );
}
