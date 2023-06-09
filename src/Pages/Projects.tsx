import { Box, Typography } from "@mui/material";
import { Project, projects } from "../../data";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  const projectCards = projects.map((project: Project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FCF8D4",
        border: "2px solid black",
        margin: "0.5rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          paddingTop: "2rem",
          fontFamily: "inconsolata, sans-serif",
        }}
      >
        PROJECTS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>{projectCards}</Box>
    </Box>
  );
}
