import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export class SplitEven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      numOfPax: 1,
      amtPerPax: 0,
      calculateNow: false,
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.amtPerPax !== prevState.amtPerPax) {
      this.setState({
        calculateNow: true,
      });
    }
  };

  calcAmountPerPax = () => {
    let amountPerPax = this.state.amount / this.state.numOfPax;
    this.setState({
      amtPerPax: amountPerPax.toFixed(2),
    });
  };

  increasePax = () => {
    this.setState({
      numOfPax: this.state.numOfPax + 1,
    });
  };

  decreasePax = () => {
    if (this.state.numOfPax > 1) {
      this.setState({
        numOfPax: this.state.numOfPax - 1,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const showAmtPerPax = (
      <div>Each person should pay ${this.state.amtPerPax}.</div>
    );

    return (
      <div>
        <h3>Enter Total Amount Paid:</h3>
        <TextField
          id="amount"
          label="Amount ($)"
          variant="filled"
          value={this.state.amount}
          onChange={this.handleChange}
          required={true}
          disabled={this.state.calculateNow ? true : false}
        />
        <h3>Enter Number of Pax:</h3>
        <button onClick={this.decreasePax}>-</button>
        <TextField
          id="numOfPax"
          label="Number of Pax"
          variant="filled"
          value={this.state.numOfPax}
          onChange={this.handleChange}
          required={true}
          disabled={this.state.calculateNow ? true : false}
        />
        <button onClick={this.increasePax}>+</button>
        <br />
        <button onClick={this.calcAmountPerPax}>Calculate!</button>
        <br />
        {this.state.calculateNow ? showAmtPerPax : null}
      </div>
    );
  }
}
