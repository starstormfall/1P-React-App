import React from "react";
import TotalPax from "./TotalPax";
import TotalAmt from "./TotalAmt";
import { TallyResults } from "./TallyResults";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export class SplitEqually extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paxList: [],
      paxInput: "",
      paidList: [],
      payer: "",
      paidItem: "",
      paidAmount: "",
      noInputError: false,
      nameExistsError: false,
    };
  }

  handleAddPaxClick = () => {
    if (
      this.state.paxInput !== "" &&
      !this.state.paxList.includes(this.state.paxInput)
    ) {
      let newPaxList = this.state.paxList.concat([this.state.paxInput]);
      this.setState({
        paxList: newPaxList,
        paxInput: "",
        payer: this.state.paxInput,
        noInputError: false,
        nameExistsError: false,
        wrongAmountError: false,
      });
    } else if (this.state.paxList.includes(this.state.paxInput)) {
      this.setState({
        paxInput: "",
        nameExistsError: true,
      });
    } else {
      this.setState({
        noInputError: true,
      });
    }
  };

  handleAddPaidEntryClick = (index, event) => {
    if (this.state.paidAmount === "" || this.state.paidAmount < 0) {
      this.setState({
        wrongAmountError: true,
      });
    } else {
      if (this.state.paidItem === "") {
        this.state.paidItem = "not stated";
      }

      let paidEntry = {
        payer: this.state.payer,
        paidItem: this.state.paidItem,
        paidAmount: this.state.paidAmount,
      };

      this.setState({
        paidList: [...this.state.paidList, paidEntry],
        paidItem: "",
        paidAmount: "",
        wrongAmountError: false,
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

  handleEditPaxChange = (index, event) => {
    this.state.paxList[index] = event.target.value.toLowerCase();

    this.setState({
      paxList: this.state.paxList,
    });
  };

  handleDelete = (index, type, event) => {
    if (type === "deletePax") {
      this.state.paxList.splice(index, 1);

      this.setState({
        paxList: this.state.paxList,
      });
    } else if (type === "deletePaid") {
      this.state.paidList.splice(index, 1);

      this.setState({
        paidList: this.state.paidList,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.noInputError ? (
          <Alert severity="error">
            No name submitted. Please fill in the required field!{" "}
          </Alert>
        ) : null}

        {this.state.nameExistsError ? (
          <Alert severity="error">
            Name already exists. Please add another name!
          </Alert>
        ) : null}

        {this.state.wrongAmountError ? (
          <Alert severity="error">
            Invalid amount. Please enter a positive amount paid!
          </Alert>
        ) : null}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
          marginTop={5}
          justifyContent="center"
        >
          <TotalPax
            paxList={this.state.paxList}
            paxInput={this.state.paxInput}
            handleChange={this.handleChange}
            handleAddPaxClick={this.handleAddPaxClick}
            handleEditPaxChange={this.handleEditPaxChange}
            handleDelete={this.handleDelete}
          />

          {this.state.paxList.length > 1 ? (
            <Box sx={{}}>
              <TotalAmt
                paxList={this.state.paxList}
                payer={this.state.payer}
                paidItem={this.state.paidItem}
                paidAmount={this.state.paidAmount}
                handleChange={this.handleChange}
                paidList={this.state.paidList}
                handleAddPaidEntryClick={this.handleAddPaidEntryClick}
                handleDelete={this.handleDelete}
              />
            </Box>
          ) : null}
          {this.state.paidList &&
          this.state.paidList.length > 0 &&
          this.state.paxList.length > 1 ? (
            <Box sx={{}}>
              <TallyResults
                paidList={this.state.paidList}
                paxList={this.state.paxList}
              />
            </Box>
          ) : null}
        </Stack>
      </div>
    );
  }
}
