import React from "react";
import AddItem from "./AddItem";
import { Select, Box, TextField, InputLabel, MenuItem } from "@mui/material";

export default class TotalAmt extends React.Component {
  render() {
    return (
      <div>
        <h3>Who Paid How Much For What?</h3>

        <select
          name="payer"
          value={this.props.payer}
          onChange={this.props.handleChange}
        >
          <option value="" disabled>
            Select Payer
          </option>
          {this.props.paxList &&
            this.props.paxList.length > 0 &&
            this.props.paxList.map((pax, index) => (
              <option key={index} value={pax}>
                {pax}
              </option>
            ))}
        </select>

        <TextField
          name="paidItem"
          label="Item Name"
          variant="filled"
          value={this.props.paidItem}
          onChange={this.props.handleChange}
          required={true}
        />
        <TextField
          name="paidAmount"
          label="Amount ($)"
          variant="filled"
          type="number"
          value={this.props.paidAmount}
          onChange={this.props.handleChange}
          required={true}
        />
        <br />
        <button onClick={this.props.handleAddPaidEntryClick}>
          Add Payment
        </button>
        <hr />
        {this.props.paidList && this.props.paidList.length > 0 ? (
          <div>
            <h3>List of Payment Details</h3>
            {this.props.paidList.map((paidEntry, index) => (
              <div key={index}>
                <TextField
                  name="payer"
                  label="Payer"
                  variant="filled"
                  value={paidEntry.payer}
                  disabled={true}
                />
                <TextField
                  name="paidItem"
                  label="Item Name"
                  variant="filled"
                  value={paidEntry.paidItem}
                  onChange={this.props.handleChange}
                  disabled={true}
                />
                <TextField
                  name="paidAmount"
                  label="Amount ($)"
                  variant="filled"
                  type="number"
                  value={paidEntry.paidAmount}
                  onChange={this.props.handleChange}
                  disabled={true}
                />
                <button
                  name="delete-paid"
                  onClick={(event) => this.props.handleDelete(event, index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <p>Total Amount: ${this.props.totalAmount}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
