"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import FeatureComp from "../components/featureComp";
import handshakeImg from "../../public/handshake.png";
import notesImg from "../../public/notes.png";
import groupImg from "../../public/group.png";
import gamificationImg from "../../public/game.png";

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
        />
        <FeatureComp
          title="Join or Create Groups"
          description="Join online study groups, meet like-minded individuals, and build stronger connections."
          image={groupImg}
        />
        <FeatureComp
          title="Share Notes and Resources"
          description="Easily share and access study materials."
          image={notesImg}
        />
        <FeatureComp
          title="Gamification"
          description="Easily share and access study materials."
          image={gamificationImg}
        />
      </div>
    </section>
  );
}

export default Features;
