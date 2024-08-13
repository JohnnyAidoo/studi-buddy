import { GroupCardComponent } from "../components/groupCard";

function Dashboard() {
  const studyGroups = [
    {
      name: "Mathematics Mastery",
      description:
        "Join this group to tackle calculus, algebra, and geometry with fellow students. Share resources, ask questions, and prepare for exams together.",
      image: "https://via.placeholder.com/150?text=Mathematics+Mastery",
    },
    {
      name: "History Enthusiasts",
      description:
        "Explore historical events, discuss significant figures, and collaborate on projects related to world and US history. Perfect for those passionate about the past.",
      image: "https://via.placeholder.com/150?text=History+Enthusiasts",
    },
    {
      name: "Biology Buddies",
      description:
        "Dive into the study of living organisms with this group. Ideal for biology students to share notes, review concepts, and prep for lab work and exams.",
      image: "https://via.placeholder.com/150?text=Biology+Buddies",
    },
    {
      name: "Computer Science Coders",
      description:
        "Collaborate with peers on programming projects, debug code, and share tips on algorithms, data structures, and software development.",
      image: "https://via.placeholder.com/150?text=Computer+Science+Coders",
    },
    {
      name: "Physics Pioneers",
      description:
        "Join a group dedicated to understanding the principles of physics. Work on problems, discuss theories, and prepare for exams with a supportive community.",
      image: "https://via.placeholder.com/150?text=Physics+Pioneers",
    },
    {
      name: "Economics Explorers",
      description:
        "Discuss economic theories, share insights on market trends, and collaborate on assignments related to micro and macroeconomics.",
      image: "https://via.placeholder.com/150?text=Economics+Explorers",
    },
    {
      name: "Chemistry Crew",
      description:
        "Perfect for chemistry students to study chemical reactions, review lab reports, and prepare for quizzes and exams together.",
      image: "https://via.placeholder.com/150?text=Chemistry+Crew",
    },
    {
      name: "Literature Lovers",
      description:
        "Engage in discussions about classic and contemporary literature, analyze texts, and collaborate on essays and projects.",
      image: "https://via.placeholder.com/150?text=Literature+Lovers",
    },
    {
      name: "Engineering Experts",
      description:
        "Join this group to tackle engineering problems, share project ideas, and discuss concepts related to various fields of engineering.",
      image: "https://via.placeholder.com/150?text=Engineering+Experts",
    },
    {
      name: "Statistics Scholars",
      description:
        "Work through statistical problems, share data analysis techniques, and help each other understand complex statistical concepts.",
      image: "https://via.placeholder.com/150?text=Statistics+Scholars",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {studyGroups.map((studyGroup) => (
          <GroupCardComponent
            name={studyGroup.name}
            description={studyGroup.description}
            image={studyGroup.image}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
