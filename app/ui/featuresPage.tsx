"use client";
import { Typography } from "@material-tailwind/react";
import FeatureComp from "../components/featureComp";
import handshakeImg from "../images/handshake.png";
import notesImg from "../images/notes.png";
import groupImg from "../images/group.png";
import gamificationImg from "../images/game.png";

function Features() {
  return (
    <section id="features" className="bg min-h-fit px-20 bg-white py-10">
      <Typography
        className="text-center py-20  text-6xl font-extrabold"
        variant="h2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Features
      </Typography>
      <div
        id="cards"
        className="w-full justify-between gap-10 h-1/3 flex text-center text-secondary "
      >
        <FeatureComp
          title="Find Study Partners"
          description="Connect with professionals who share your interests and passions."
          image={handshakeImg}
          colorGradient="from-blue-100 to-blue-50"
        />
        <FeatureComp
          title="Join or Create Groups"
          description="Join online study groups, meet like-minded individuals, and build stronger connections."
          image={groupImg}
          colorGradient="from-red-100 to-red-50"
        />
        <FeatureComp
          title="Share Notes and Resources"
          description="Easily share and access study materials."
          image={notesImg}
          colorGradient="from-green-100 to-green-50"
        />
        <FeatureComp
          title="Gamification"
          description="Easily share and access study materials."
          image={gamificationImg}
          colorGradient="from-purple-100 to-purple-50"
        />
      </div>
    </section>
  );
}

export default Features;
