"use client";
import {
  Button,
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  CardHeader,
  Input,
  Typography,
  Navbar,
} from "@material-tailwind/react";

import { SignedIn, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { MdHome, MdLogout } from "react-icons/md";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideBarTopItems = [
    {
      icon: <MdHome />,
      label: "Home",
      href: "/app",
    },
    // {
    //   icon: <MdGroup />,
    //   label: "Groups",
    //   href: "/groups",
    // },
    // {
    //   icon: <MdNotifications />,
    //   label: "Notifications",
    //   href: "/notifications",
    // },
  ];

  return (
    <>
      <html lang="en" className="bg-primary light ">
        <body className={`$ bg-primary flex `} style={{ overflowX: "hidden" }}>
          <div className="h-screen " style={{ width: "25%" }}></div>
          <Card
            className="h-[calc(100vh-0rem)] bg-white shadow-none w-full max-w-[20rem] p-4 left-0 fixed border-r-2 "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="mb-2 p-4">
              <Typography
                variant="h5"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Studi Buddy
              </Typography>
            </div>

            <List
              className="flex flex-col justify-between h-full"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div>
                {sideBarTopItems.map((item) => {
                  const isSelected = (path: string) =>
                    window.location.pathname === path;

                  return (
                    <Link href={item.href} key={item.href}>
                      <ListItem
                        className={`${
                          isSelected(item.href)
                            ? "bg-tertiary text-primary "
                            : ""
                        }mb-3`}
                        selected={isSelected(item.href)}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {item.icon}
                        </ListItemPrefix>
                        {item.label}
                      </ListItem>
                    </Link>
                  );
                })}

                {/* logout and settings  */}
                {/* <Link href="/settings">
                  <ListItem
                    selected={window.location.pathname === "/settings"}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <ListItemPrefix
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <MdSettings />
                    </ListItemPrefix>
                    Settings
                  </ListItem>
                </Link> */}

                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <MdLogout />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </div>
              <div className="">
                <Card
                  className="p-10 flex flex-col gap-3 bg-gradient-to-t from-tertiary2 to-tertiary text-primary"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Typography
                    variant="h6"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Studi Buddy Pro
                  </Typography>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Get access to all features <br />
                    AI tutoring, unlimited file storage, enhanced analytics, and
                    priority support.
                  </Typography>
                  <Link href={"https://buy.stripe.com/test_28o2argVX8NNeqs144"}>
                    <Button
                      className=" bg-primary text-tertiary shadow-sm w-full"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Get Pro
                    </Button>
                  </Link>
                </Card>
              </div>
            </List>
          </Card>

          <main style={{ width: "100vw" }}>
            <Navbar
              className="shadow-none flex justify-between bg-white w-full "
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="1/12">
                <Typography
                  variant="h4"
                  className="text-secondary"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Home
                </Typography>
              </div>
              <div className="w-3/12">
                <Input
                  variant="outlined"
                  label="Search..."
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
              </SignedIn>
            </Navbar>
            <section className="px-10">{children}</section>
          </main>
        </body>
      </html>
    </>
  );
}
