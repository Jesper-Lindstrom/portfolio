import { Box, Typography } from "@mui/material";
import { IconRow } from "./IconRow";

export default function About() {
  return (
    <Box
      sx={{
        border: "5px solid #e37222",
        outline: "2px solid black",
        borderRadius: "10px",
        background: "#07889B",
        margin: "3rem 0.5rem 0rem 0.5rem",
        padding: "1rem",
        width: {
          xs: 300, // theme.breakpoints.up('xs')
          sm: 400, // theme.breakpoints.up('sm')
          md: 400, // theme.breakpoints.up('md')
          lg: 400, // theme.breakpoints.up('lg')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }}
    >
      <Typography sx={{ color: "white", fontFamily: "Fira-sans, sans-serif" }}>
        Hi! I'm Jesper and I am studying to become a front end developer at Medieinstitutet in
        Gothenburg. This is where I will show my progression through these two years where I strive
        to become better at web development.
      </Typography>
      <IconRow />
    </Box>
  );
}
