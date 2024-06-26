import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import MainURL from "./components/url";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Docu-Chat",
  description:
    "Chat with your documents effortlessly. Enhance productivity and streamline your workflow with Docu-Chat.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Docu-Chat",
    description:
      "Chat with your documents effortlessly. Enhance productivity and streamline your workflow with Docu-Chat.",
    images: [
      {
        url: "https://utfs.io/f/80eb5da4-8fdb-4b4f-9557-c3f366f7d769-n3ch5g.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://utfs.io/f/80eb5da4-8fdb-4b4f-9557-c3f366f7d769-n3ch5g.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Docu-Chat Banner Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${poppins.variable} bg-primary `}
            style={{ overflowX: "hidden" }}
          >
            {children}
          </body>
        </html>
      </ClerkProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
