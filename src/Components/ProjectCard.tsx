import { Box, Typography } from "@mui/material";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      sx={{
        padding: "0.4rem",
        height: "15rem",
        margin: " 3rem 1rem",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{}}>{project.title}</Typography>
        <Typography sx={{}}>{project.type}</Typography>
      </Box>
      <Box sx={{ border: "1px blue solid", height: "10rem", width: "15rem", margin: "0.5rem" }}>
        {/* {project.image} */}
      </Box>
      <Typography sx={{ padding: "0.2rem" }}>{project.description}</Typography>
    </Box>
  );
}
