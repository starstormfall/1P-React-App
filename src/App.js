import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/ButtonAppBar.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import myTheme from "./Components/Theme.js";
import { SplitEven } from "./Components/SplitEven.js";
import { ToggleMode } from "./Components/ToggleMode.js";
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
              {/* <ToggleMode handleToggleChange={this.handleToggleChange} />
              {this.state.splitMode === "even" ? ( */}
              {/* <SplitEven /> */}
              <SplitEqually />
              {/* ) : (
                <SplitIndividual />
              )} */}
              {/* <Grid container spacing={4} columns={16}>
                <Grid item md background-color="pink">
                  <SplitEven />
                </Grid>
                <Grid item md>
                  <TotalPax />
                </Grid>
              </Grid> */}
            </div>
          </header>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
