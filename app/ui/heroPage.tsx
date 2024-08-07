"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import heroImg from "../../public/heroImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import graph from "../../public/graph.png";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="hero"
      style={{ height: "100vh" }}
      className="light flex justify-around px-20 "
    >
      <div
        data-aos="zoom-in-right"
        data-aos-duration="800"
        id="text"
        className=" flex flex-col gap-5 justify-center"
      >
        <Typography
          variant="h1"
          className="text-6xl font-extrabold text-secondary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Connect, Collaborate, Succeed with <br />
          <span className="text-tertiary">Studi Buddy</span>
        </Typography>
        <Typography
          variant="paragraph"
          className="  text-secondary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Learn Anywhere, Anytime and Learn in groups
        </Typography>
        <div className="flex gap-5">
          <a href="/sign-up">
            <Button
              className="from-tertiary to-tertiary2 hover:from-tertiary2 hover:to-tertiary"
              variant="gradient"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Get Started
            </Button>
          </a>
          <a href="#features">
            <Button
              variant="outlined"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
      <div
        className=" w-1/2 flex justify-center items-center"
        data-aos="zoom-in-left"
        data-aos-duration="800"
      >
        <Image src={heroImg} alt="hero-image" objectFit="cover" />
      </div>
    </section>
  );
}

export default Hero;
