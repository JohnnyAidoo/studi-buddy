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
          <head>
            <meta property="og:title" content="Docu-Chat" />
            <meta
              property="og:type"
              content="Chat with your documents effortlessly. Enhance productivity and streamline your workflow with Docu-Chat."
            />
            <meta property="og:image" content="../public/banner.png" />
            <meta property="og:url" content="https://www.colbyfayock.com" />

            <link rel="icon" href="../public/icon.png" />
          </head>
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
