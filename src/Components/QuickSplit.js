import React from "react";
import Alert from "@mui/material/Alert";
import {
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { QuickSpent } from "./QuickSpent";

export class QuickSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paxNum: 0,
    };
  }

  handleAddClick = () => {
    this.setState({
      paxNum: this.state.paxNum + 1,
    });
  };

  handleSubtractClick = () => {
    if (this.state.paxNum > 1) {
      this.setState({
        paxNum: this.state.paxNum - 1,
      });
    }
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.toLowerCase();

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Alert severity="info">
          Split expenses based on number of pax without fuss!
        </Alert>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
          marginTop={5}
          justifyContent="center"
        >
          <Stack>
            <Typography variant="h4">How Many Will Split $?</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" m={2}>
              <Button
                variant="contained"
                size="small"
                onClick={this.handleSubtractClick}
              >
                <RemoveIcon />
              </Button>
              <TextField
                name="paxNum"
                type="number"
                label="Number of Pax"
                variant="outlined"
                value={this.state.paxNum}
                onChange={this.handleChange}
                required={true}
                color="secondary"
                inputProps={{ maxLength: 24 }}
              />
              <Button
                variant="contained"
                size="small"
                onClick={this.handleAddClick}
              >
                <AddIcon />
              </Button>
            </Stack>
            <QuickSpent />
          </Stack>
        </Stack>
        <br />
      </div>
    );
  }
}
