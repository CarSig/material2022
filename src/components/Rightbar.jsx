import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
          <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/thumb/men/72.jpg" />
          <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/thumb/women/15.jpg" />
          <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/thumb/women/55.jpg" />
          <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/thumb/men/55.jpg" />
          <Avatar alt="Joe Smith" src="https://randomuser.me/api/portraits/thumb/men/45.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
