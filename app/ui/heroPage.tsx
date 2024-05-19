"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="px-20">
      <div>
        <Typography
          variant="h1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Hero H1 text
        </Typography>
        <Typography
          variant="h6"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Hero H1 text
        </Typography>
        <Button
          className="bg-tertiary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Get Started
        </Button>
      </div>
      <div>
        <Image
          src={
            "https://img.freepik.com/free-photo/happy-guy-bright-outfit-laughing-posing-blue-background_197531-26853.jpg?t=st=1716095788~exp=1716099388~hmac=1baa695d76177eb9e862da034718fc0308d90a0861e0936f3f8271dba779b7bc&w=1800"
          }
          alt={"hero image"}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

export default Hero;
