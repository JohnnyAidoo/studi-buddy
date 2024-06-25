"use client";
import PDFViewer from "@/app/components/pdfViewer";
import MainURL from "@/app/components/url";
import { useAuth, useUser } from "@clerk/nextjs";
import { IconButton, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import logoImg from "@/public/icon.png";
import Image from "next/image";

export default function DocChatPage() {
  const urlParams = useSearchParams();
  const pdfUrl = urlParams.get("pdfUrl");
  const auth = useAuth();
  const docId = urlParams.get("docId");
  const { user } = useUser();

  // type
  type ChatResponseType = {
    sender: string;
    message: string;
  };

  //use states
  const [chatResponses, setChatResponses] = useState<ChatResponseType[]>([]);

  const [loadingResponse, setLoadingResponse] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //constants

  const headers = {
    // "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d","ask_4b765fb8f67d6395b93e13c9339bbfaa"
    "x-api-key": "ask_834e5488431c5d6d35f4fe4d0ae8f036",
  };

  //functions

  const handleSendUserChat = async (userInput: string) => {
    setLoadingResponse(true);
    const clerkId = await auth.userId;

    try {
      const response = await axios.post(
        `https://api.askyourpdf.com/v1/chat/${docId}?model_name=GPT3`,
        [
          {
            sender: "User",
            message: userInput,
          },
        ],
        { headers: headers }
      );

      if (response) {
        await axios.post(`${MainURL}/api/conversation`, {
          clerkId: clerkId,
          documentId: docId,
          sender: response.data.question.sender,
          message: response.data.question.message,
        });
        await axios.post(`${MainURL}/api/conversation`, {
          clerkId: clerkId,
          documentId: docId,
          sender: response.data.answer.sender,
          message: response.data.answer.message,
        });

        // Get updated conversations after posting new data
        await getConversations();
      } else {
        console.log("Error: No response from the chat API.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingResponse(false);
    }
  };

  const getConversations = async () => {
    const clerkId = await auth.userId;
    try {
      const response = await axios.get(
        `${MainURL}/api/conversation/?clerkId=${clerkId}&documentId=${docId}`
      );
      if (response.status === 200) {
        setChatResponses(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingResponse(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoadingResponse(true);
    await handleSendUserChat(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    const getData = async () => {
      await getConversations();
    };

    getData();
  }, []);

  return (
    <section className="w-full min-h-screen lg:px-10 py-5 overscroll-none justify-between lg:flex">
      {/* pdf file preview */}
      <div className="w-full lg:w-1/2 p-5">
        <PDFViewer fileUrl={pdfUrl} />
      </div>
      {/* chat response */}
      <div
        style={{ maxHeight: "80dvh" }}
        className="lg:w-1/2 px-5 flex flex-col"
      >
        <div className="w-full overflow-auto ">
          <Typography
            variant="h5"
            className="py-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Ask Anything About The Uploaded PDF <br />
          </Typography>
          <div className="p-10 shadow-md rounded-md border-gray-200 border-solid border mb-20">
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
                {chatResponses.map((chatResponse, index) => (
                  <div key={index}>
                    <div
                      className={`${
                        chatResponse.sender == "bot"
                          ? "justify-start"
                          : "justify-end"
                      } flex`}
                    >
                      {chatResponse.sender == "bot" ? (
                        <Image
                          src={logoImg}
                          alt={"logo"}
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          className="rounded-full"
                          src={user?.imageUrl as string}
                          alt={"logo"}
                          width={30}
                          height={30}
                        />
                      )}
                    </div>
                    <div
                      className={`flex ${
                        chatResponse.sender == "bot"
                          ? "w-full justify-start"
                          : " w-full justify-end"
                      }`}
                    >
                      <Typography
                        variant="paragraph"
                        className={`${
                          chatResponse.sender == "bot"
                            ? "text-left "
                            : "text-right p-5 shadow-md rounded-lg "
                        } font-bold `}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {chatResponse.message}
                      </Typography>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* input filed/form */}
      <div className="z-50 w-screen lg:w-full fixed bottom-0 flex justify-center items-center bg-primary bg-white">
        <div className="flex w-4/5 lg:w-1/2 mb-5 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
          <form className="flex w-full" onSubmit={handleSubmit}>
            <Textarea
              onChange={(e) => {
                setInputValue(e.target.value);
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
