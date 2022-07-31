import React from "react";
import {
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export class QuickSpent extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4">How Much Was Spent?</Typography>
        <br />
        <Stack direction="row" spacing={2} justifyContent="center" m={2}>
          <TextField
            name="paidAmount"
            label="Amount ($)"
            variant="outlined"
            type="number"
            value={this.props.paidAmount}
            onChange={this.props.handleChange}
            required={true}
          />
          <TextField
            name="paidItem"
            label="Item Name"
            variant="outlined"
            value={this.props.paidItem}
            onChange={this.props.handleChange}
          />

          <Button
            variant="contained"
            onClick={this.props.handleAddPaidEntryClick}
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
    );
  }
}
