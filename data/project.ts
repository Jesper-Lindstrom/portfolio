export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  // image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "The Journey",
    type: "School project (solo)",
    description: "text-based game I made using mostly vanilla javascript",
    // image: ''
  },
  {
    id: "2",
    title: "Frostbite Frenzy",
    type: "School project (group)",
    description: "We made a multiplayer game using typescript and p5.",
    // image: string,
  },
  {
    id: "3",
    title: "Simiflix",
    type: "School project (group)",
    description: "Group project for practicing using an API and react.",
    // image: string,
  },
  {
    id: "4",
    title: "Portfolio",
    type: "Solo project",
    description:
      "My updated portfolio to showcase my projects. Using typescript and react instead simply HTML and CSS this time.",
    // image: string,
  },
];