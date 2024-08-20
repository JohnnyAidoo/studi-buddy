"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function GroupCardComponent(props: {
  name: string;
  description?: string;
  image?: string;
  _id?: string;
}) {
  return (
    <Link href={`/app/group?id=${props._id}`}>
      <Card
        className="mt-6 "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          className="relative h-fit flex items-center justify-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <img src={props.image} alt="card-image" />
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
    </Link>
  );
}
