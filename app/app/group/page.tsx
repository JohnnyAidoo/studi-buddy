"use client";
import MainURL from "@/app/components/url";
import { useUser } from "@clerk/nextjs";
import {
  Card,
  IconButton,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";

function GroupChatPage() {
  type messagesType = {
    _id: string;
    content: string;
    userId: string;
    createdAt: string;
  };

  const [messages, setMessages] = useState<messagesType[]>();
  const [InputValue, setInputValue] = useState("");
  const searchParams = useSearchParams();
  const groupId = searchParams.get("id");
  const userId = useUser().user?.id;

  useEffect(() => {
    getMessages();
  }, [InputValue]);
  const sendMessage = () => {
    axios
      .post(`${MainURL}/api/messages`, {
        userId: userId,
        groupId: groupId,
        content: InputValue,
      })
      .then((response) => {
        setInputValue("");
        response.status == 200 && getMessages();
        // console.log(response);
      });
  };

  const getMessages = () =>
    axios.get(`${MainURL}/api/messages?groupid=${groupId}`).then((response) => {
      setMessages(response.data);
    });

  return (
    <>
      <div id="messagesLand" className=" flex flex-col py-10">
        {messages?.map((message) => {
          const IamSender: boolean = message.userId === userId;
          return (
            <Card
              key={message._id}
              className={`w-fit px-5 py-2 mb-1 ${
                IamSender ? "self-end bg-tertiary text-primary" : ""
              } `}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Typography
                variant="lead"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {message.content}
              </Typography>
            </Card>
          );
        })}
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="flex w-6/12 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2 fixed bottom-0">
          {/* //TODO <div className="flex"> emoji button and etc</div>  */}
          <Textarea
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={InputValue}
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
              variant="text"
              className="rounded-full"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={sendMessage}
            >
              <MdSend size={25} className="text-tertiary" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupChatPage;
