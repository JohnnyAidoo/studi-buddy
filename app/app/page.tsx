"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import QuickCard from "../components/quickCard";
import flameImg from "../images/flame.png";
import createGroupImg from "../images/plus.png";
import groupImg from "../images/Join group.png";
import notesImg from "../images/notes.png";
import aiImg from "../images/ai.png";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log();
  }, []);

  const leaderboardList = [
    {
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      points: 1500,
    },
    {
      name: "Bob Smith",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      points: 1450,
    },
    {
      name: "Charlie Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      points: 1400,
    },
    {
      name: "Diana Prince",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      points: 1350,
    },
    {
      name: "Ethan Hunt",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      points: 1300,
    },
    {
      name: "Bob Smith",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      points: 1450,
    },
    {
      name: "Charlie Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      points: 1400,
    },
    {
      name: "Diana Prince",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      points: 1350,
    },
    {
      name: "Ethan Hunt",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      points: 1300,
    },
  ];
  return (
    <>
      <section className=" w-full min-h-screen">
        <div className="py-10 ">
          {/* quick action */}
          <Card
            className="px-5 py-5 bg-white mb-5 shadow-sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="h6"
              className="pb-5 text-secondary"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Quick Actions: coming soon
            </Typography>
            <div className=" flex gap-3 ">
              {/* quick card */}
              <QuickCard label="Hot Streak" image={flameImg} />
              <QuickCard label="Create Group" image={createGroupImg} />
              <QuickCard label="Group" image={groupImg} />
              <QuickCard label="Notes" image={notesImg} />
              <QuickCard label="AI Assistant" image={aiImg} />
            </div>
          </Card>
          {/* leader board and stat  */}
          <div id="grid" className="grid grid-cols-2 gap-2">
            <Card
              // style={{ height: "60vh" }}
              // className=" overflow-y-scroll"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Typography
                variant="h6"
                className="p-5 text-lg text-secondary"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Leader Board
              </Typography>
              <List
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {leaderboardList.map((person, index) => {
                  const rank = (index: number) => {
                    if (index + 1 === 1) {
                      return "🥇";
                    }
                    if (index + 1 === 2) {
                      return "🥈";
                    }
                    if (index + 1 === 3) {
                      return "🥉";
                    } else return index + 1;
                  };

                  return (
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
                        <Typography
                          className={`${
                            index < 3 ? "text-3xl px-5" : "font-semibold px-7"
                          } `}
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {rank(index)}
                        </Typography>
                      </ListItemPrefix>
                      <div
                        id="person detail"
                        className="flex gap-5 w-full justify-start items-center "
                      >
                        <Avatar
                          id="rank"
                          src={person.image}
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                        <Typography
                          variant="h5"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {person.name}
                        </Typography>
                      </div>
                      <ListItemSuffix
                        className="w-1/4"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <Typography
                          className="font-bold text-tertiary2"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {person.points}
                        </Typography>
                      </ListItemSuffix>
                    </ListItem>
                  );
                })}
              </List>
            </Card>

            <div className="h-full flex flex-col gap-3">
              <Card
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Typography
                  variant="h6"
                  className="p-5 text-lg text-secondary"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Recent Activities
                </Typography>
                {/* recent activity */}

                <List
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItem
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Added NEw to this
                  </ListItem>
                </List>
              </Card>
              <Card
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Typography
                  variant="h6"
                  className="p-5 text-lg text-secondary"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Achievement
                </Typography>
                <List
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    className="text-3xl"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    🥇
                  </ListItemPrefix>
                  <ListItem
                    className="flex flex-col justify-start w-full"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Typography
                      className="font-semibold text-left"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      "First Steps" Badge:
                    </Typography>
                    "Congratulations! You've joined your first study group!"
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
