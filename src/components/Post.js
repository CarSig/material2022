import React from "react";
import { Avatar, Box, Card, CardHeader, CardMedia, IconButton, CardContent, Typography, CardActions, Checkbox } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Niagara Falls"
        subheader="May 14, 2022"
      />
      <CardMedia component="img" height="450rem" image="https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg" alt="Niagara" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Niagara Falls s a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and
          the state of New York in the United States. Niagara Falls s a group of three waterfalls at the southern end of Niagara Gorge, spanning the border
          between the province of Ontario in Canada and the state of New York in the United States. the state of New York in the United States. Niagara Falls s
          a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New
          York in the United States.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
