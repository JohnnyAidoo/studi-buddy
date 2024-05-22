import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

function FeatureComp(props: { reversed?: boolean }) {
  return (
    <div
      className={`flex gap-20 items-center py-10  ${
        props.reversed == true ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Card
        className="w-1/2 min-h-96"
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={
            "https://img.freepik.com/free-photo/representation-user-experience-interface-design-computer_23-2150165983.jpg?t=st=1716154463~exp=1716158063~hmac=5e64f496c0ee772ed065bca3ec866b099c4478f5a769feabad5ce5a40de303fc&w=1800"
          }
          alt={""}
        />
      </Card>
      <div className="w-1/3">
        <Typography
          variant="h1"
          className="text-center text-4xl font-extrabold text-secondary/90"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Fast
        </Typography>
        <Typography
          className="text-secondary/90"
          variant="paragraph"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sint rerum magni, laborum quisquam adipisci, voluptas voluptates
          architecto quis illo quibusdam ab autem, similique debitis harum iusto
          qui modi odio.
        </Typography>
      </div>
    </div>
  );
}

export default FeatureComp;
