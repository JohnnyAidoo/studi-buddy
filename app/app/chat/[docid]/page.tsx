"use client";
import { IconButton, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
const FormData = require("form-data");

export default function DocChatPage({ params }: { params: { docid: string } }) {
  //use states
  const [chatResponse, setChatResponse] = useState({
    sender: "",
    message: "",
  });
  const [laodingResponse, setLaodingResponse] = useState(false);
  const [inputValue, SetInputValue] = useState("");

  //constants

  const headers = {
    "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d",
  };

  const data = [
    {
      sender: "User",
      message: inputValue,
    },
  ];

  //funtions

  const handleSendUserChat = () => {
    axios
      .post(
        `https://api.askyourpdf.com/v1/chat/${params.docid}?model_name=GPT3`,
        data,
        { headers: headers }
      )
      .then((response) => {
        if (response.status === 200) {
          setChatResponse({
            sender: response.data.answer.sender,
            message: response.data.answer.message,
          });
          setLaodingResponse(false);
          console.log(response.data.answer.sender);
        } else {
          console.log("Error:", response.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLaodingResponse(true);
    handleSendUserChat();
    SetInputValue("");
  };

  return (
    <section className="w-full min-h-screen px-10 py-5">
      {/* chat response */}
      <div className="h-full w-1/2">
        <p>
          {laodingResponse ? (
            <>
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-gray-300 animate-pulse"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-96 rounded-full bg-gray-300 animate-pulse"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                &nbsp;
              </Typography>
            </>
          ) : (
            <>
              <h1>{chatResponse.sender} :</h1>
              <p>{chatResponse.message}</p>
            </>
          )}
        </p>
      </div>

      <div className="w-full absolute bottom-0 flex justify-center items-center">
        <div className="flex w-1/2 mb-5 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
          <form className="flex w-full" onSubmit={handleSubmit}>
            <Textarea
              onChange={(e) => {
                SetInputValue(e.target.value);
              }}
              value={inputValue}
              rows={1}
              resize={true}
              placeholder="Your Message"
              className="min-h-full !border-0 focus:border-transparent"
              containerProps={{
                className: "grid h-full",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <div>
              <IconButton
                onClick={handleSubmit}
                variant="text"
                className="rounded-full"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
