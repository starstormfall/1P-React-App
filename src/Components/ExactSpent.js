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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export class ExactSpent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costStated: 0,
      addGST: false,
      addServiceCharge: false,
      sharedItem: false,
    };
  }

  handleCostStatedChange = (event) => {
    this.setState({
      costStated: event.target.value,
    });
    this.calcFinalCost(event.target.value);
  };

  handleCheckboxClick = (event) => {
    //   this.setState({
    //     [event.target.name]: event.target.checked,
    //   });
    this.setState((prevState, props) => ({
      [event.target.name]: event.target.checked,
    }));
    this.calcFinalCost(this.state.costStated);
  };

  calcFinalCost = (costStated) => {
    this.setState((prevState, props) => {
      let calcValue = costStated;
      if (prevState.addGST) {
        calcValue *= 1.07;
      }
      if (prevState.addServiceCharge) {
        calcValue *= 1.1;
      }
      this.props.setPaidAmountFromChild(calcValue);
      return {};
    });
  };

  // calcFinalCost = (costStated) => {
  //   let calcValue = costStated;
  //   if (this.state.addGST) {
  //     calcValue *= 1.07;
  //   }
  //   if (this.state.addServiceCharge) {
  //     calcValue *= 1.1;
  //   }
  //   this.props.setPaidAmountFromChild(calcValue);
  // };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (
  //     this.state.addGST !== prevState.addGST ||
  //     this.state.addServiceCharge !== prevState.addServiceCharge ||
  //     this.state.costStated !== prevState.costStated
  //   ) {
  //     this.calcFinalCost(this.state.costStated);
  //   }
  // };

  render() {
    const currentTally = {};

    this.props.paidList.forEach((paidEntry) => {
      currentTally[paidEntry.payer]
        ? (currentTally[paidEntry.payer] += Number(paidEntry.paidAmount))
        : (currentTally[paidEntry.payer] = Number(paidEntry.paidAmount));
    });

    return (
      <div>
        <Typography variant="h4">Who Spent How Much?</Typography>
        <br />
        <Stack direction="row" spacing={2} justifyContent="center" m={2}>
          <FormControl>
            {this.props.spender === "" ? null : (
              <InputLabel>Spender</InputLabel>
            )}
            <Select
              name="spender"
              value={this.props.spender}
              onChange={this.props.handleChange}
              autoWidth
              label="spender"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Spender
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
            name="costStated"
            label="Cost Stated ($)"
            variant="outlined"
            type="number"
            value={this.state.costStated}
            onChange={(event) => {
              this.handleCostStatedChange(event);
            }}
            required={true}
          />
          <TextField
            name="paidItem"
            label="Item Name"
            variant="outlined"
            value={this.props.paidItem}
            onChange={this.props.handleChange}
          />
        </Stack>
        <Stack direction="row" justifyContent="center" m={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="addGST"
                checked={this.state.addGST}
                onClick={(event) => {
                  this.handleCheckboxClick(event);
                }}
              />
            }
            label="Add 7% GST"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="addServiceCharge"
                checked={this.state.addServiceCharge}
                onClick={(event) => {
                  this.handleCheckboxClick(event);
                }}
              />
            }
            label="Add 10% Service Charge"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="sharedItem"
                checked={this.state.sharedItem}
                onClick={(event) => {
                  this.handleCheckboxClick(event);
                }}
              />
            }
            label="Shared Item"
          />
        </Stack>

        <Stack direction="row" justifyContent="center" m={2} spacing={2}>
          <TextField
            name="calcAmt"
            label="Final Cost ($)"
            variant="filled"
            value={this.props.paidAmount}
            disabled={true}
          />
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
          <Button
            variant="contained"
            onClick={this.props.handleAddPaidEntryClick}
          >
            <AddIcon />
          </Button>
        </Stack>
        {this.props.paidList && this.props.paidList.length > 0 ? (
          <div>
            <Divider>
              <Typography variant="h6">Total Expenses: ${}</Typography>
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
                  name="spender"
                  label="Spender"
                  variant="filled"
                  size="small"
                  value={paidEntry.spender}
                  disabled={true}
                />
                <TextField
                  name="finalCost"
                  label="Final Cost($)"
                  variant="filled"
                  type="number"
                  size="small"
                  value={paidEntry.paidAmount}
                  disabled={true}
                />
                <TextField
                  name="paidItem"
                  label="Item Name"
                  variant="filled"
                  size="small"
                  value={paidEntry.paidItem}
                  disabled={true}
                />
                <TextField
                  name="payer"
                  label="Payer"
                  variant="filled"
                  size="small"
                  value={paidEntry.payer}
                  disabled={true}
                />

                <Button
                  variant="contained"
                  size="small"
                  onClick={(event) =>
                    this.props.handleDelete(index, "deletePaid", event)
                  }
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
