"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <section
      id="faqs"
      className="w-full px-10 md:px-32  min-h-screen flex flex-col justify-center text-secondary gap-5 bg-primary"
    >
      <Typography
        variant="h1"
        className="text-center text-6xl font-extrabold text-secondary pb-32"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        FAQ
      </Typography>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="text-secondary"
        >
          How do I sign up?
        </AccordionHeader>
        <AccordionBody className="text-secondary">
          Click the ‘Get Started for Free’ button and follow the prompts to
          create your account.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="text-secondary"
        >
          What features are included in the Free plan?
        </AccordionHeader>
        <AccordionBody className="text-secondary">
          The Free plan includes access to basic features such as limited file
          storage, group creation, and chat functionality.
        </AccordionBody>
      </Accordion>
      {/* <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="text-secondary"
        >
          What types of documents can I use with DocuChat?
        </AccordionHeader>
        <AccordionBody className="text-secondary">
          DocuChat supports a wide range of document types, including PDFs and
          images containing text. Whether you need to analyze a report, a
          research paper, a contract, or any other document, DocuChat is
          equipped to help you interact with and understand your content.
        </AccordionBody>
      </Accordion> */}
    </section>
  );
}
