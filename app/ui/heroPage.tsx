"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className=" flex flex-col justify-between h-screen relative py-10 bg-primary px-10 dark"
    >
      <div className="self-center h-full gap-10 flex flex-col items-start relative z-10 py-5">
        <Typography
          variant="h1"
          className="font-bold text-6xl text-secondary/90 md:px-64 text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          More Than Just Reading, Chat with Your PDFs
        </Typography>
        <div className="relative w-full h-full rounded-lg ">
          <Image
            className="rounded-lg "
            src={
              "https://utfs.io/f/0fbd5b50-8989-4df3-92d6-05f6cd818469-wi70pb.png"
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
