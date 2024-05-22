"use client";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import FeatureComp from "../components/featureComp";

function Features() {
  return (
    <section id="features" className="min-h-screen px-20 bg-primary py-10">
      <Typography
        variant="h1"
        className="text-center text-6xl font-extrabold py-10 text-secondary/90"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Features
      </Typography>

      <FeatureComp
        title="Summarize Documents"
        description="Quickly get concise summaries of lengthy PDFs and photos, saving you time and effort."
      />
      <FeatureComp
        reversed
        title="Interact with Documents"
        description="Ask questions, get detailed explanations, and interact with your content through an intuitive chat interface."
      />
    </section>
  );
}

export default Features;
