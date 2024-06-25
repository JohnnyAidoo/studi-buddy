import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/icon.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <header className="flex justify-between px-10 py-3 shadow-sm  w-full top-0 z-10">
        <Link
          href="/app"
          className="mr-4 cursor-pointer py-1.5 font-extrabold text-2sxl flex items-center gap-2 justify-center"
        >
          <Image src={logoImg} alt={"logo"} width={50} height={50} />{" "}
          <span>DOCU-CHAT</span>
        </Link>

        <UserButton />
      </header>
      {children}
    </main>
  );
};

export default Layout;
