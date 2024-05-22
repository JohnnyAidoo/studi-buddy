"use client";
import { Typography } from "@material-tailwind/react";
import { PricingCard } from "../components/pricecard";

function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/5 px-10 py-20 min-h-screen">
      <Typography
        variant="h1"
        className="text-center text-6xl font-extrabold text-secondary/90"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Pricing
      </Typography>
      <div className=" h-fit w-full flex flex-wrap py-10 gap-10 justify-center">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
}

export default Pricing;
