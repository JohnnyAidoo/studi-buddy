"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UploadButton } from "../utils/uploadthing";
import { useState } from "react";
import { Card, CardBody, Spinner, Typography } from "@material-tailwind/react";
import MainURL from "@/app/components/url";
import { useAuth } from "@clerk/nextjs";

function AppPage() {
  const auth = useAuth();
  //use states
  const [analyzingDocuments, setAnalyzingDocument] = useState<boolean>(false);
  //constants
  const router = useRouter();

  const headers = {
    "x-api-key": "ask_c816c4e5ddd8c05c53830d3f8bad3d7d",
  };

  //functions

  const upload_pdf_to_api = async (
    url: string,
    name: string,
    key: string,
    type: string
  ) => {
    setAnalyzingDocument(true);

    await axios
      .get("https://api.askyourpdf.com/v1/api/download_pdf", {
        headers: headers,
        params: {
          url: await url,
        },
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
          axios
            .post(`${MainURL}/api/document`, {
              clerkId: auth.userId,
              name: name,
              key: key,
              documentId: response.data.docId,
              Url: url,
            })
            .then((response) => {
              console.log(response);
              setAnalyzingDocument(false);
            })
            .catch((error) => {
              console.log(error);
            });
          router.push(`/app/chat/?docId=${response.data.docId}&pdfUrl=${url}`);
        } else {
          console.log("Error:", response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="w-full min-h-screen px-10 py-5 flex items-center justify-center">
      {analyzingDocuments && (
        <>
          <Card
            className="w-screen h-screen absolute z-50 flex justify-center items-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Spinner
                className="h-20 w-20"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </CardBody>
            <Typography
              className="text-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Analyzing Document
            </Typography>
          </Card>
        </>
      )}
      <UploadButton
        onClientUploadComplete={(res) => {
          //? Do something with the response

          // setUserFile({
          //   name: res[0].name,
          //   key: res[0].key,
          //   url: res[0].url,
          // });

          upload_pdf_to_api(res[0].url, res[0].name, res[0].key, res[0].type);
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
