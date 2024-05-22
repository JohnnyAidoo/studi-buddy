"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="px-20 flex justify-between h-screen">
      <div className="w-1/2 self-center h-1/2 gap-5 flex flex-col items-start">
        <Typography
          variant="h1"
          className="font-bold text-6xl text-secondary/90"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Build Tools That Profit
        </Typography>
        <Typography
          className="text-secondary/90"
          variant="paragraph"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          mollitia excepturi at numquam ullam quaerat facilis possimus vitae
          totam impedit, delectus aliquid molestiae pariatur ipsum quia omnis,
          eius obcaecati earum.
        </Typography>
        <Button
          size="lg"
          className="bg-tertiary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Get Started
        </Button>
      </div>
      <div className=" w-7/12 relative rounded-lg">
        <Image
          className="rounded-lg"
          src={
            "https://img.freepik.com/free-photo/happy-guy-bright-outfit-laughing-posing-blue-background_197531-26853.jpg?t=st=1716095788~exp=1716099388~hmac=1baa695d76177eb9e862da034718fc0308d90a0861e0936f3f8271dba779b7bc&w=1800"
          }
          alt={"hero image"}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
