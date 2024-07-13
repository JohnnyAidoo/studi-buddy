"use client";
import { Typography } from "@material-tailwind/react";
import FeatureComp from "../components/featureComp";
import Lottie from "lottie-react";
import summarizeAnimation from "../components/summarize.json";
import aiAnimation from "../components/ai.json";
import timeAnimation from "../components/time.json";

function Features() {
  return (
    <section id="features" className="min-h-fit px-20 bg-primary2 py-10">
      {/* <Typography
        variant="h1"
        className="text-center text-6xl font-extrabold py-10 text-secondary/90"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Features
      </Typography> */}
      <Typography
        variant="h1"
        className="text-center text-4xl font-extrabold pt-20 text-secondary/90"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Enhance Your Document
        <span className="text-orange-800"> Interactions</span>
      </Typography>
      <Typography
        variant="paragraph"
        className="text-center  text-secondary/90 md:px-20 md:py-5"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Ever wished your documents could talk? With AskYourPDF, they can!
        Powered by ChatGPT we breathe life into your documents, making them
        interactive and engaging. No more endless scrolling or skimming – just
        upload, ask and uncover insights directly from your document
      </Typography>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 w-full py-10">
        <FeatureComp
          image={<Lottie animationData={summarizeAnimation} loop />}
          title="Summarize Documents"
          description="Quickly get concise summaries of lengthy PDFs and photos, saving you time and effort."
        />
        <FeatureComp
          image={<Lottie animationData={aiAnimation} loop />}
          title="Interact with Documents"
          description="Ask questions, get detailed explanations, and interact with your content through an intuitive chat interface."
        />
        <FeatureComp
          image={<Lottie animationData={timeAnimation} loop />}
          title="Save Time"
          description="Docu-Chat puts the power of AI at your fingertips! Enjoy smart navigation without the need for endless scrolling or skimming.
Your documents become interactive companions, ready to help you understand and engage instantly!"
        />
      </div>
    </section>
  );
}

export default Features;
