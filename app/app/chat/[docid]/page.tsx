"use client";
import PDFViewer from "@/app/components/pdfViewer";
import MainURL from "@/app/components/url";
import { useAuth } from "@clerk/nextjs";
import {
  Button,
  IconButton,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DocChatPage({ params }: { params: { docId: string } }) {
  const urlParams = useSearchParams();
  const pdfUrl = urlParams.get("pdfUrl");
  const auth = useAuth();

  // type
  type ChatResponseType = {
    sender: string;
    message: string;
  };

  //use states
  const [chatResponses, setChatResponses] = useState<ChatResponseType[]>([]);

  const [loadingResponse, setLoadingResponse] = useState(false);
  const [inputValue, SetInputValue] = useState("");

  //constants

  const headers = {
    // "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d","ask_4b765fb8f67d6395b93e13c9339bbfaa"
    "x-api-key": process.env.ASK_PDF_API_KEY,
  };

  //functions

  const handleSendUserChat = async (userInput: string) => {
    setLoadingResponse(true);
    const clerkId = await auth.userId;

    axios
      .post(
        `https://api.askyourpdf.com/v1/chat/${params.docId}?model_name=GPT3`,
        [
          {
            sender: "User",
            message: userInput,
          },
        ],
        { headers: headers }
      )
      .then((response) => {
        if (response) {
          // post the response to the database
          axios
            .post(`${MainURL}/api/conversation`, {
              clerkId: clerkId,
              documentId: params.docId,
              sender: response.data.question.sender,
              message: response.data.question.message,
            })
            .then(() => {
              axios.post(`${MainURL}/api/conversation`, {
                clerkId: clerkId,
                documentId: params.docId,
                sender: response.data.answer.sender,
                message: response.data.answer.message,
              });
            });
        } else {
          console.log("Error:");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getConversations = async () => {
    const clerkId = await auth.userId;
    axios
      .get(
        `${MainURL}/api/conversation/?clerkId=${clerkId}&documentId=${params.docId}`
      )
      .then((response) => {
        if (response.status === 200) {
          setChatResponses(response.data);
          setLoadingResponse(false);
        }
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoadingResponse(true);
    handleSendUserChat(inputValue);
    getConversations();
    SetInputValue("");
  };

  // const handleSuggestionClick = (e: any) => {
  //   console.log(e.target.value);
  //   setLoadingResponse(true);
  //   handleSendUserChat(e.target.value);
  //   getConversations();
  //   SetInputValue("");
  // };

  useEffect(() => {
    const getData = async () => {
      await getConversations();
    };

    getData();
  });

  return (
    <section className="w-full h-screen px-10 py-5 overscroll-none justify-between md:flex">
      {/* pdf file preview */}
      <div className="w-full md:w-1/2 p-5">
        <PDFViewer fileUrl={pdfUrl} />
      </div>
      {/* chat response */}
      <div
        style={{ maxHeight: "80dvh" }}
        className="fixed right-0 md:w-1/2 flex flex-col"
      >
        <div className="w-full overflow-auto ">
          {loadingResponse ? (
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
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="h5"
                className="py-2"
              >
                Ask Anything About The Uploaded PDF <br />
              </Typography>
              {/* <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="outlined"
                onClick={handleSuggestionClick}
                value="                What is this PDF file About ?"
              >
                What is this PDF file About ?
              </Button> */}

              <div className="p-10 shadow-md rounded-md border-gray-200 border-solid border mb-20">
                {chatResponses.map((chatResponse) => (
                  <>
                    <Typography
                      variant="lead"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      className={`
                    ${
                      chatResponse?.sender == "bot" ? "text-left" : "text-right"
                    } font-bold
                  `}
                    >
                      {chatResponse?.sender}
                    </Typography>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      variant="paragraph"
                      className={`
                          ${
                            chatResponse?.sender == "bot"
                              ? "text-left"
                              : "text-right"
                          } font-bold
                        `}
                    >
                      {chatResponse?.message}
                    </Typography>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* input filed/form */}
      <div className=" z-50 w-screen md:w-full fixed bottom-0 flex justify-end items-center bg-primary pr-12 bg-white">
        <div className="flex w-4/5 md:w-1/2 mb-5 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
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
