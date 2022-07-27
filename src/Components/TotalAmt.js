import React from "react";
import {
  Select,
  TextField,
  InputLabel,
  MenuItem,
  Stack,
  Button,
  FormControl,
  Divider,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default class TotalAmt extends React.Component {
  calcTotalPaid = () => {
    return this.props.paidList.reduce(
      (prev, curr) => prev + Number(curr.paidAmount),
      0
    );
  };

  render() {
    const currentTally = {};

    this.props.paidList.forEach((paidEntry) => {
      currentTally[paidEntry.payer]
        ? (currentTally[paidEntry.payer] += Number(paidEntry.paidAmount))
        : (currentTally[paidEntry.payer] = Number(paidEntry.paidAmount));
    });

    return (
      <div>
        <Typography variant="h4">Who Paid First?</Typography>
        <br />
        <Stack direction="row" spacing={2} justifyContent="center" m={2}>
          <FormControl>
            {this.props.payer === "" ? null : <InputLabel>Payer</InputLabel>}
            <Select
              name="payer"
              value={this.props.payer}
              onChange={this.props.handleChange}
              autoWidth
              label="payer"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Payer
              </MenuItem>
              {this.props.paxList &&
                this.props.paxList.length > 0 &&
                this.props.paxList.map((pax, index) => (
                  <MenuItem key={index} value={pax}>
                    {pax}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

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
        <br />
        {this.props.paidList && this.props.paidList.length > 0 ? (
          <div>
            <Divider>
              <Typography variant="h6">
                Total Paid: ${this.calcTotalPaid().toFixed(2)}
              </Typography>
            </Divider>
            {this.props.paidList.map((paidEntry, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                m={2}
                justifyContent="center"
              >
                <TextField
                  name="payer"
                  label="Payer"
                  variant="filled"
                  size="small"
                  value={paidEntry.payer}
                  disabled={true}
                />
                <TextField
                  name="paidAmount"
                  label="Amount ($)"
                  variant="filled"
                  type="number"
                  size="small"
                  value={paidEntry.paidAmount}
                  onChange={this.props.handleChange}
                  disabled={true}
                />
                <TextField
                  name="paidItem"
                  label="Item Name"
                  variant="filled"
                  size="small"
                  value={paidEntry.paidItem}
                  onChange={this.props.handleChange}
                  disabled={true}
                />

                <Button
                  variant="contained"
                  name="delete-paid"
                  id="delete-paid"
                  size="small"
                  onClick={(event) => this.props.handleDelete(index, event)}
                >
                  <DeleteForeverIcon />
                </Button>
              </Stack>
            ))}
            <br />
            <Divider>
              <Typography variant="h6">Current Tally</Typography>
            </Divider>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Who Has Paid How Much
                </Typography>

                {Object.entries(currentTally).map(([key, value], index) => (
                  <Typography key={index} variant="h5" component="div">
                    {key} | ${Math.abs(value).toFixed(2)}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </div>
        ) : null}
      </div>
    );
  }
}
