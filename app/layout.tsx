import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
      </head>
      <body className="light bg-primary overflow-x-hidden">
        <main>{children}</main>
      </body>
      <script>AOS.init()</script>
    </html>
  );
}
