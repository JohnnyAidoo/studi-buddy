"use client";
import { Button, Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://utfs.io/f/978f8e74-0402-4ecd-bf14-99f787a7bb37-u9ibe8.jpg')", // Using the provided image URL
        backgroundSize: "cover", // Ensures the background image covers the entire section
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        id="text"
        className=" flex flex-col gap-5 items-center justify-center w-full h-full"
      >
        <div data-aos="zoom-in" data-aos-duration="800">
          <Typography
            variant="h1"
            className="text-6xl font-extrabold text-secondary text-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Connect, Collaborate, Succeed with <br />
            <span className="text-tertiary  px-10">Studi Buddy</span>
          </Typography>
        </div>
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
    </section>
  );
}

export default Hero;
