"use client";
import { Button, Typography } from "@material-tailwind/react";

const links = [
  {
    link: "https://instagram.com",
    name: "instagram",
  },
  {
    link: "https://youtube.com",
    name: "youtube",
  },
];
// const SOCIALS = [
//   {
//     icon: "facebook",
//     link: "https://facebook.com",
//   },
// ];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" overflow-hidden relative w-full bg-primary ">
      <div className="bg-black/90 py-10 flex items-center px-10 justify-between">
        <Typography
          variant="paragraph"
          className="text-center font-extrabold text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Studi Buddy {currentYear}
        </Typography>
        <div className="flex gap-5">
          {links.map((link) => (
            <a href={link.link} key={link.link}>
              <Typography
                variant="paragraph"
                className="text-center font-extrabold text-white"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {link.name}
              </Typography>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
