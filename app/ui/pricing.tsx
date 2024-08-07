"use client";
import { Typography } from "@material-tailwind/react";
import { PricingCard } from "../components/pricecard";

function Pricing() {
  // Stripe Plans >> fill in your own priceId & link
  const plans = [
    {
      link:
        process.env.NODE_ENV === "development"
          ? "https://buy.stripe.com/test_28o2argVX8NNeqs144"
          : "",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PRReuLoyfPvUnOQ7cDj1YaH"
          : "",
      price: 19,
      duration: "/month",
    },
  ];

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
        {plans.map((plan) => (
          <PricingCard
            key={plan.link}
            planLink={plan.link}
            planPrice={plan.price}
            planDuration={plan.duration}
          />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
