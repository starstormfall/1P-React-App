import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/Design/ButtonAppBar.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import myTheme from "./Components/Design/Theme.js";
import { SplitExactly } from "./Components/SplitExactly.js";
import { SplitEqually } from "./Components/SplitEqually.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BalanceIcon from "@mui/icons-material/Balance";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CalculateIcon from "@mui/icons-material/Calculate";
import { QuickSplit } from "./Components/QuickSplit.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "quick",
      top: false,
    };
  }

  componentDidMount() {
    document.title = "Get Back $";
  }

  handleTabChange = (event) => {
    if (event.target.name === "equally") {
      this.setState({
        tabValue: "equally",
      });
    } else if (event.target.name === "exactly") {
      this.setState({
        tabValue: "exactly",
      });
    } else if (event.target.name === "quick") {
      this.setState({
        tabValue: "quick",
      });
    }
  };

  handleAboutClick = () => {};

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      top: open,
    });
  };

  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Typography component={"span"} variant={"body2"}>
          <header className="App-header">
            <ButtonAppBar handleAboutClick={this.handleAboutClick} />
            <React.Fragment key={this.state.top}>
              <Drawer
                anchor={this.state.top}
                open={this.state.top}
                onClose={this.toggleDrawer(this.state.top, false)}
              >
                testing
              </Drawer>
            </React.Fragment>
          </header>
          <br />
          <div className="App">
            <Stack
              justifyContent="center"
              alignItems="center"
              marginTop={10}
              marginBottom={5}
            >
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleTabChange}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="secondary tabs"
                centered
              >
                <Tab
                  value="quick"
                  name="quick"
                  icon={<CalculateIcon />}
                  iconPosition="bottom"
                  label="Quick Split"
                />
                <Tab
                  value="equally"
                  name="equally"
                  icon={<BalanceIcon />}
                  iconPosition="bottom"
                  label="Split Equally"
                />

                <Tab
                  value="exactly"
                  name="exactly"
                  icon={<EqualizerIcon />}
                  iconPosition="bottom"
                  label="Split Exactly"
                />
              </Tabs>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              {this.state.tabValue === "equally" ? <SplitEqually /> : null}
              {this.state.tabValue === "exactly" ? <SplitExactly /> : null}
              {this.state.tabValue === "quick" ? <QuickSplit /> : null}
            </Stack>
          </div>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
