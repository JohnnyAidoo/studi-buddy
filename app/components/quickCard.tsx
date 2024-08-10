import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

function QuickCard(props: { label?: string; image?: any }) {
  return (
    <Card
      className="w-1/2 flex items-center justify-around bg-gradient-to-tr shadow-none hover:scale-105 bg-tertiary2/20"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="w-1/4 py-5">
        <Image src={props.image} alt="find study partners" objectFit="cover" />
      </div>
      <Typography
        className="font-bold text-lg text-secondary"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.label}
      </Typography>
    </Card>
  );
}

export default QuickCard;
