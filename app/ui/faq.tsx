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
      className="w-full px-52  min-h-screen flex flex-col justify-center text-secondary gap-5"
    >
      <Typography
        variant="h1"
        className="text-center text-6xl font-extrabold text-secondary/90 pb-32"
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
        >
          How does DocuChat summarize documents?
        </AccordionHeader>
        <AccordionBody>
          DocuChat uses advanced AI algorithms to analyze the content of your
          documents and generate concise summaries. Simply upload your PDF or
          photo, and our app will provide you with a brief yet comprehensive
          overview of the key points, saving you time and effort.
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
        >
          Can I ask specific questions about my documents in DocuChat?
        </AccordionHeader>
        <AccordionBody>
          es! With DocuChat, you can interact with your documents just like you
          would in a conversation. Type your questions into the chat interface,
          and our intelligent system will provide detailed responses based on
          the content of your document, making it easier to find the information
          you need.
        </AccordionBody>
      </Accordion>
      <Accordion
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
        >
          What types of documents can I use with DocuChat?
        </AccordionHeader>
        <AccordionBody>
          DocuChat supports a wide range of document types, including PDFs and
          images containing text. Whether you need to analyze a report, a
          research paper, a contract, or any other document, DocuChat is
          equipped to help you interact with and understand your content.
        </AccordionBody>
      </Accordion>
    </section>
  );
}
