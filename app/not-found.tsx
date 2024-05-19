"use client";
import { Typography } from "@material-tailwind/react";

function NotFoundPage() {
  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center">
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          404 Page not found
        </Typography>
      </section>
    </>
  );
}

export default NotFoundPage;
