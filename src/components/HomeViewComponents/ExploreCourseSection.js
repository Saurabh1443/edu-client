import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CourseCategoryCard from "../CourseCategoryCard";

const courseLabel = [
  {
    title: "Web Development",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "DevOps",
  },
  {
    title: "Android",
  },
  {
    title: "DSA",
  },
];

function ExploreCourseSection({ exploreCourse }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Explore Course
        </Typography>
        <Box className={classes.innerContainer}>
          {courseLabel.map((items, index) => (
            <CourseCategoryCard key={index} props={items} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 600,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: "linear-gradient(97.46deg, #6EE2F5 -62.66%, #6454F0 157.91%)",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
    },
  },
  container: {
    maxWidth: "90%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },

  title: {
    textAlign: "center",
    color: "#fff",
  },

  card: {
    position: "relative",
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.08)",
    minHeight: 150,
    minWidth: 100,
  },
  textContainer: {
    maxWidth: "38%",
  },
  learnButton: {
    marginTop: theme.spacing(8),
    color: "#fff",
    textTransform: "none",
    background: theme.palette.primary.main,
    padding: theme.spacing(2),
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  description: {
    lineHeight: 1.5,
  },
  image: {
    position: "absolute",
    height: 70,
    right: 20,
    bottom: 10,
  },
  cardItems: {
    textAlign: "left",
  },
  spanText: {
    color: theme.palette.primary.main,
  },
  appBar: {
    marginTop: theme.spacing(5),
    background: "#fff",
  },
  tab: {
    background: "#E7EDF7",
    margin: 10,
    borderRadius: "5px",
    textTransform: "none",
  },
}));

export default ExploreCourseSection;
