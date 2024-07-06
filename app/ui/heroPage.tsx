"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className=" flex flex-col justify-between h-screen relative py-10 bg-primary px-10"
    >
      <div className="self-center h-full gap-10 flex flex-col items-start relative z-10 py-5">
        <Typography
          variant="h1"
          className="font-bold text-6xl text-secondary/90 px-64 text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Converse with Your Documents
        </Typography>
        <div className="relative w-full h-full rounded-lg ">
          <Image
            className="rounded-lg "
            src={
              "https://img.freepik.com/free-photo/happy-guy-bright-outfit-laughing-posing-blue-background_197531-26853.jpg?t=st=1716095788~exp=1716099388~hmac=1baa695d76177eb9e862da034718fc0308d90a0861e0936f3f8271dba779b7bc&w=1800"
            }
            alt={"hero image"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Typography
        className="text-secondary/90 pb-5 px-5 md:px-10 "
        variant="paragraph"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Welcome to DocuChat – the revolutionary app that transforms the way you
        interact with your documents. Whether it&apos;s a PDF file or a photo,
        DocuChat allows you to engage with your content in a whole new way.
        Imagine having a conversation with your documents, extracting the
        information you need effortlessly, and navigating through complex files
        with ease.
      </Typography>
      <div className="flex w-full justify-center">
        <a href="/sign-in">
          <Button
            size="lg"
            variant="gradient"
            className=" from-deep-orange-700 to-yellow-900"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Get Started
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
