import React from "react";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const ProjectItem = ({ image, title, body, githubUrl, surgeUrl }) => {
  return (
    <div>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
        >
          GITHUB URL
        </Button>
        <Button
          href={surgeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
        >
          SURGE URL
        </Button>
      </CardActions>
    </div>
  );
};

export default ProjectItem;
