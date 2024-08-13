"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function GroupCardComponent(props: {
  name: string;
  description?: string;
  image?: string;
}) {
  return (
    <Card
      className="mt-6 "
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-56 flex items-center justify-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img
          src={props.image}
          alt="card-image"
          style={{ aspectRatio: 1, height: "100%" }}
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {props.name}
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
