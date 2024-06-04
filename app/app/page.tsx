"use client";
import { IconButton, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const FormData = require("form-data");

function AppPage() {
  //use states
  const [chatRes, setChatRes] = useState("");
  const [userFile, setUserFile] = useState();
  const [laodingResponse, setLaodingResponse] = useState(false);
  const [inputValue, SetInputValue] = useState("");

  //constants
  const router = useRouter();

  const headers = {
    "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d",
  };
  let form = new FormData();
  form.append("file", userFile);

  //funtions

  const get_file_from_user = (e: any) => {
    setUserFile(e.target.files[0]);
  };

  const uplaod_pdf_to_api = async () => {
    await axios
      .post("https://api.askyourpdf.com/v1/api/upload", form, {
        headers: {
          ...headers,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          router.replace(`/app/chat/${response.data.docId}`);
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

    SetInputValue("");
    uplaod_pdf_to_api();
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
            chatRes
          )}
        </p>
      </div>

      <div className="w-full absolute bottom-0 flex justify-center items-center">
        <div className="flex  mb-5 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="file"
              name="file"
              id="file"
              onChange={get_file_from_user}
              accept="application/pdf"
            />
          </form>

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
        </div>
      </div>
    </section>
  );
}

export default AppPage;
