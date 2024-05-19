"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full h-20 bg-primary/15 shadow-md sticky flex justify-between px-10 items-center mb-5">
      <h1>Logo</h1>
      <nav className="gap-10 flex h-full items-center">
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">FAQs</Link>
      </nav>
      <div>
        <Button
          variant="text"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          login
        </Button>
        <Button
          className="bg-tertiary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          sign up
        </Button>
      </div>
    </header>
  );
}

export default Header;
