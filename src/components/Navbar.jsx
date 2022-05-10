import React from "react";
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar } from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({ display: "flex", gap: "20px", alignItems: "center" }));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lovro's App
        </Typography>
        <TheaterComedyIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 40, height: 40 }} src="https://i.redd.it/h1xjs7nmsdxy.png" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
