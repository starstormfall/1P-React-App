import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* <React.Fragment key={"left"}> */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          // onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>{" "}
        {/* <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          ></Drawer> */}
        {/* </React.Fragment> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GET BACK $
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
