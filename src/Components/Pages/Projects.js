import React, { useEffect } from "react";
import { p1img, p2img, p3img, p4img, p5img } from "../images/index";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Grid } from "@material-ui/core";
import ProjectItem from "./ProjectItem";
import useWebAnimations, {
  jackInTheBox,
  rollIn,
} from "@wellyshen/use-web-animations";

const useStyles = makeStyles({
  root: {
    margin: "2rem 0",
    maxWidth: 350,
    boxShadow: "10px 10px 8px 10px #888888",
  },
});

const Projects = () => {
  const p1 = useWebAnimations({ ...rollIn });
  const p2 = useWebAnimations({ ...rollIn });
  const p3 = useWebAnimations({ ...rollIn });
  const p4 = useWebAnimations({ ...rollIn });
  const p5 = useWebAnimations({ ...rollIn });
  

  useEffect(() => {
    p1.ref.current.addEventListener("click", () => {
      p1.animate({ ...jackInTheBox });
    });
    p2.ref.current.addEventListener("click", () => {
      p2.animate({ ...jackInTheBox });
    });
    p3.ref.current.addEventListener("click", () => {
      p3.animate({ ...jackInTheBox });
    });
    p4.ref.current.addEventListener("click", () => {
      p4.animate({ ...jackInTheBox });
    });
  }, [p1, p2, p3, p4]);

  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} ref={p1.ref}>
          <Card className={classes.root}>
            <ProjectItem
              image={p1img}
              title="Expense Tracker"
              body="An Income Expense Tracker App, build by using Context Api and useReducer Hook displaying income expense and final balance"
              githubUrl="https://github.com/Imrulafridi/Expense-Tracker-Bootcamp2020"
              surgeUrl="http://imrulafridi-expense-tracker.surge.sh/"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} ref={p2.ref}>
          <Card className={classes.root}>
            <ProjectItem
              image={p2img}
              title="COVID-19 Tracker"
              body="A Covid-19 Tracker App Showing Infected, Recovered and Death Numbers by fetching an api Data, and portraying in chart"
              githubUrl="https://github.com/Imrulafridi/covid-19-tracker-project"
              surgeUrl="http://imrulafridi-covid19-tracker-app.surge.sh/"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} ref={p3.ref}>
          <Card className={classes.root}>
            <ProjectItem
              image={p3img}
              title="Shoe Store"
              body="A Shoe Store App using react router v6 to navigate between different components and exploring different routes"
              githubUrl="https://github.com/Imrulafridi/ShoeStoreProject"
              surgeUrl="http://imrulafridi-shoe-store-app.surge.sh/"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} ref={p4.ref}>
          <Card className={classes.root}>
            <ProjectItem
              image={p4img}
              title="Red Queen Race"
              body="An animation project of Web Animation Api built in react hook style, converted from plain javascript into react"
              githubUrl="https://github.com/Imrulafridi/Red-Queen-Race-Project4A"
              surgeUrl="http://imrulafridi-redqueen-race-4a.surge.sh/"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} ref={p5.ref}>
          <Card className={classes.root}>
            <ProjectItem
              image={p5img}
              title="Tiny Animated Website"
              body="An animation project of Web Animation Api built in react hook style, converted from plain javascript into react"
              githubUrl="https://github.com/Imrulafridi/Tiny-Animation-4b"
              surgeUrl="http://imrulafridi-tiny-animation-4b.surge.sh/"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
