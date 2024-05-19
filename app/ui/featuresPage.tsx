"use client";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Features() {
  return (
    <section id="features" className="min-h-screen px-10">
      <div className="flex justify-between items-center">
        <Card
          className="w-1/3 min-h-96"
          shadow={false}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={"https://docs.material-tailwind.com/img/team-3.jpg"}
            alt={""}
          />
        </Card>
        <div className="w-1/2">
          <Typography
            variant="h1"
            className="text-center text-4xl font-extrabold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Fast
          </Typography>
          <Typography
            variant="paragraph"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint rerum magni, laborum quisquam adipisci, voluptas voluptates
            architecto quis illo quibusdam ab autem, similique debitis harum
            iusto qui modi odio.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Features;
