"use client";
import { useEffect, useState } from "react";
import { GroupCardComponent } from "../components/groupCard";
import axios from "axios";
import MainURL from "../components/url";

function Dashboard() {
  type groupsType = {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  const [groups, setGropus] = useState<groupsType[]>([]);

  const getGroupsFromDB = () => {
    axios.get(`${MainURL}/api/groups`).then((res) => {
      setGropus(res.data);
    });
  };
  useEffect(() => {
    getGroupsFromDB();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group) => (
          <GroupCardComponent
            _id={group._id}
            key={group._id}
            name={group.name}
            description={group.description}
            image={group.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
