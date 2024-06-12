"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UploadButton } from "../utils/uploadthing";
const FormData = require("form-data");

function AppPage() {
  //use states

  //constants
  const router = useRouter();

  const headers = {
    "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d",
  };

  //functions

  const upload_pdf_to_api = async (url: string) => {
    await axios
      .get("https://api.askyourpdf.com/v1/api/download_pdf", {
        headers: headers,
        params: {
          url: await url,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          router.push(`/app/chat/${response.data.docId}`);
        } else {
          console.log("Error:", response.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="w-full min-h-screen px-10 py-5 flex items-center justify-center">
      <UploadButton
        onClientUploadComplete={(res) => {
          //? Do something with the response
          console.log(res);

          // setUserFile({
          //   name: res[0].name,
          //   key: res[0].key,
          //   url: res[0].url,
          // });

          upload_pdf_to_api(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        endpoint={"fileUploader"}
      />
    </section>
  );
}

export default AppPage;
