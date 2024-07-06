"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios";
import MainURL from "./url";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const auth = useAuth();
  const urlParams = useSearchParams();
  const docId = urlParams.get("docId");
  const pdfUrl = urlParams.get("pdfUrl");

  type DocumentType = {
    _id: string;
    Url: string;
    documentId: string;
    name: string;
  };

  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Fetch user's documents from the API
  const getAllDocuments = () => {
    axios
      .get(`${MainURL}/api/document/all/?userId=${auth.userId}`)
      .then((response) => {
        setDocuments(response.data);
      });
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

  return (
    <>
      <IconButton
        variant="outlined"
        className="lg:hidden"
        onClick={() => setDrawerOpen(!drawerOpen)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {drawerOpen ? <h1>X</h1> : <h1>=</h1>}
      </IconButton>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>
      <Card
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary border-secondary transform transition-transform lg:relative lg:translate-x-0 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <List
          className="w-full"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {documents.map((document) => (
            <Link
              href={`/app/chat/?docId=${document.documentId}&pdfUrl=${document.Url}`}
              key={document._id}
              className="w-full cursor-pointer hover:text-blue-gray-700"
            >
              <ListItem
                selected={pdfUrl == document.Url}
                className="w-full"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Typography
                  className="text-secondary"
                  variant="h6"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {document.name}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>
    </>
  );
}
