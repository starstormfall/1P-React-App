import React from "react";
import "./App.css";
import ButtonAppBar from "./Components/ButtonAppBar.js";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./Components/Theme.js";
import { SplitEven } from "./Components/SplitEven.js";
import { Typography } from "@mui/material";
import AddItem from "./Components/AddItem.js";
import { Grid } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Typography component={"span"} variant={"body2"}>
          <ButtonAppBar />
          <header className="App-header">
            <div className="App">
              <Grid container spacing={10} columns={16}>
                <Grid item m>
                  <SplitEven />
                </Grid>
                <Grid item m>
                  <AddItem />
                </Grid>
              </Grid>
            </div>
          </header>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
