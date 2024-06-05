"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="px-20 flex justify-between h-screen">
      <div className="w-1/2 pr-9 self-center h-1/2 gap-5 flex flex-col items-start">
        <Typography
          variant="h1"
          className="font-bold text-6xl text-secondary/90"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Converse with Your Documents
        </Typography>
        <Typography
          className="text-secondary/90"
          variant="paragraph"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Welcome to DocuChat – the revolutionary app that transforms the way
          you interact with your documents. Whether it&lsquo;s a PDF file or a
          photo, DocuChat allows you to engage with your content in a whole new
          way. Imagine having a conversation with your documents, extracting the
          information you need effortlessly, and navigating through complex
          files with ease.
        </Typography>
        <Button
          size="lg"
          className="from-tertiary/70 to-tertiary bg-gradient-to-r "
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
