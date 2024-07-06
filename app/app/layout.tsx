"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/icon.png";
import Sidebar from "../components/sidebar";
import { Typography } from "@material-tailwind/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="light">
      <header className="flex justify-between px-10 py-3 shadow-sm shadow-secondary/20 bg-primary2 w-full top-0 z-10  ">
        <Link
          href="/app"
          className="mr-4 cursor-pointer py-1.5 font-extrabold text-2sxl flex items-center gap-2 justify-center"
        >
          <Image src={logoImg} alt={"logo"} width={50} height={50} />{" "}
          <Typography
            variant="h1"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-secondary text-lg"
          >
            Docu-Chat
          </Typography>
        </Link>
        <UserButton />
      </header>
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
