import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/Design/ButtonAppBar.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Container, Stack } from "@mui/material";
import myTheme from "./Components/Design/Theme.js";
import { SplitExactly } from "./Components/SplitExactly.js";
import { SplitEqually } from "./Components/SplitEqually.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BalanceIcon from "@mui/icons-material/Balance";
import EqualizerIcon from "@mui/icons-material/Equalizer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "exactly",
    };
  }

  componentDidMount() {
    document.title = "Get Back $";
  }

  handleTabChange = (event) => {
    if (this.state.tabValue === "equally") {
      this.setState({
        tabValue: "exactly",
      });
    } else if (this.state.tabValue === "exactly") {
      this.setState({
        tabValue: "equally",
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Typography component={"span"} variant={"body2"}>
          <header className="App-header">
            <ButtonAppBar />
          </header>
          <br />
          <div className="App">
            <Stack
              justifyContent="center"
              alignItems="center"
              marginBottom={10}
              marginTop={10}
            >
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleTabChange}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab
                  value="equally"
                  icon={<BalanceIcon />}
                  iconPosition="bottom"
                  label="Split Equally  "
                />

                <Tab
                  value="exactly"
                  icon={<EqualizerIcon />}
                  iconPosition="bottom"
                  label="Split Exactly"
                />
              </Tabs>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              {this.state.tabValue === "equally" ? (
                <SplitEqually />
              ) : (
                <SplitExactly />
              )}
            </Stack>
          </div>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
