import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Lottie from "lottie-react";

function FeatureComp(props: {
  title?: string;
  description?: string;
  image?: any;
}) {
  return (
    <Card
      className="md:w-1/3 mb-10"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        shadow={false}
        className="w-1/2 "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.image}
      </CardHeader>
      <CardBody
        className="px-10"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h6"
          className="font-bold text-3xl mb-10"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {props.title}
        </Typography>
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {props.description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureComp;
