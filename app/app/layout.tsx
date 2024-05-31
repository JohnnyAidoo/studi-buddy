import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <header className="flex justify-between px-10 py-3 shadow-sm sticky top-0">
        <Link href="/app">
          <h1>Docu-Chat</h1>
        </Link>

        <UserButton />
      </header>
      {children}
    </main>
  );
};

export default Layout;
