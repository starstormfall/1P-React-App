import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>{" "}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GET BACK $
        </Typography>
        <React.Fragment key={"top"}>
          <Button color="inherit" onClick={toggleDrawer("top", true)}>
            About
          </Button>
          <Drawer
            anchor="top"
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            <Box fullWidth>
              <Stack
                direction={{ xs: "column", sm: "column" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                margin={5}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Introducing Get Back $
                </Typography>

                <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                  <ul>
                    <li>lunchtime with colleagues</li>
                    <li>grab trips</li>
                    <li>meal</li>
                    <li>bubble tea</li>
                  </ul>
                </Typography>
              </Stack>
            </Box>
          </Drawer>
        </React.Fragment>
        <Button endIcon={<AccountCircleIcon />} color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
