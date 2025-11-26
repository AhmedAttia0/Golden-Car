import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import gradient from "@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient";
const OverviewLink = ({ page, to, color }) => {
  return (
    <Card
      className="mt-6 col-span-12 text-center md:col-span-6 lg:col-span-3"
      style={{ backgroundImage: color }}
    >
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2">
          {page}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={to} className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 text-white"
          >
            الذهاب إلى {page}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OverviewLink;
