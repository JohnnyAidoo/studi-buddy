"use client";
import { useSearchParams } from "next/navigation";

function Chat() {
  const params = useSearchParams();

  return <h1>doc id is {params}</h1>;
}

export default Chat;
