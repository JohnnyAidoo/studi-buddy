"use client";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import {
  MdGroup,
  MdHome,
  MdLogout,
  MdNotifications,
  MdSettings,
} from "react-icons/md";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="bg-primary light ">
        <body className={`$ bg-primary  `} style={{ overflowX: "hidden" }}>
          <aside className="z-40 float-left pr-10">
            <Card
              className="h-[calc(100vh-0rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 "
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
                  <Link href="/app">
                    <ListItem
                      selected={window.location.pathname === "/app"}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <MdHome />
                      </ListItemPrefix>
                      Home
                    </ListItem>
                  </Link>
                  <Link href="/group">
                    <ListItem
                      selected={window.location.pathname === "/group"}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <MdGroup />
                      </ListItemPrefix>
                      Groups
                    </ListItem>
                  </Link>
                  <Link href="/notifications">
                    <ListItem
                      selected={window.location.pathname === "/notifications"}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <MdNotifications />
                      </ListItemPrefix>
                      Notifications
                      <ListItemSuffix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <Chip
                          value="14"
                          size="sm"
                          variant="ghost"
                          color="blue-gray"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    </ListItem>
                  </Link>
                </div>
                <div className="">
                  <Link href="/settings">
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
                  </Link>

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
              </List>
            </Card>
          </aside>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
