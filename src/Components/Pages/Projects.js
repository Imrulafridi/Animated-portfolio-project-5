import React from "react";
import image from '../images/p1.jpeg'
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Grid } from "@material-ui/core";
import ProjectItem from './ProjectItem';


const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    maxWidth: 345,
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <ProjectItem
              image={image}
              title="Expense Tracker"
              githubUrl="https://github.com/Imrulafridi/Expense-Tracker-Bootcamp2020"
              surgeUrl="http://imrulafridi-expense-tracker.surge.sh/"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <ProjectItem />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <ProjectItem />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
