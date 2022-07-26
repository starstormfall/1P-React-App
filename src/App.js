import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/Design/ButtonAppBar.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import myTheme from "./Components/Design/Theme.js";
import { ToggleMode } from "./Components/Design/ToggleMode.js";
import { SplitIndividual } from "./Components/SplitIndividual.js";
import { SplitEqually } from "./Components/SplitEqually.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitMode: "even",
    };
  }

  handleToggleChange = () => {
    if (this.state.splitMode === "even") {
      this.setState({
        splitMode: "individual",
      });
    } else if (this.state.splitMode === "individual") {
      this.setState({
        splitMode: "even",
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Typography component={"span"} variant={"body2"}>
          <ButtonAppBar />
          <header className="App-header">
            <div className="App">
              <SplitEqually />
            </div>
          </header>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
