import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "../globals.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <nav className=" flex justify-between px-10 py-5 shadow-sm sticky">
                <h1 className="text-2xl font-bold">DocuChat</h1>
                <UserButton />
              </nav>
              {children}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
