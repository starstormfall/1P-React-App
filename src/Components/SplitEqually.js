import React from "react";
import TotalPax from "./TotalPax";
import TotalAmt from "./TotalAmt";

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
      totalAmount: 0,
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
      });
    } else if (this.state.paxList.includes(this.state.paxInput)) {
      alert("Name already added. Please add another name");
      this.setState({
        paxInput: "",
      });
    } else {
      alert("Please enter a name!");
    }
  };

  handleAddPaidEntryClick = (index, event) => {
    if (this.state.paidItem === "" || this.state.paidAmount === "") {
      alert("Enter payment details");
    } else {
      let paidEntry = {
        payer: this.state.payer,
        paidItem: this.state.paidItem,
        paidAmount: this.state.paidAmount,
      };

      this.setState({
        paidList: [...this.state.paidList, paidEntry],
        paidItem: "",
        paidAmount: "",
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

  handleDelete = (event, index) => {
    console.log(this.state.totalAmount);
    if (event.target.name === "delete-pax") {
      this.state.paxList.splice(index, 1);

      this.setState({
        paxList: this.state.paxList,
      });
    } else if (event.target.name === "delete-paid") {
      this.state.paidList.splice(index, 1);

      this.setState({
        paidList: this.state.paidList,
      });
      this.calcTotalAmountPaid();
    }
  };

  calcTotalAmountPaid = () => {
    let currentTotalAmount = 0;

    for (let index = 0; index < this.state.paidList.length; index++) {
      currentTotalAmount += Number(this.state.paidList[index].paidAmount);
    }

    this.setState({
      totalAmount: currentTotalAmount,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.paidList !== prevState.paidList) {
      this.calcTotalAmountPaid();
    }
  };

  render() {
    return (
      <div>
        <TotalPax
          paxList={this.state.paxList}
          paxInput={this.state.paxInput}
          handleChange={this.handleChange}
          handleAddPaxClick={this.handleAddPaxClick}
          handleEditPaxChange={this.handleEditPaxChange}
          handleDelete={this.handleDelete}
        />
        <hr />
        {this.state.paxList && this.state.paxList.length > 0 ? (
          <TotalAmt
            paxList={this.state.paxList}
            payer={this.state.payer}
            paidItem={this.state.paidItem}
            paidAmount={this.state.paidAmount}
            handleChange={this.handleChange}
            paidList={this.state.paidList}
            handleAddPaidEntryClick={this.handleAddPaidEntryClick}
            handleDelete={this.handleDelete}
            totalAmount={this.state.totalAmount}
          />
        ) : null}
      </div>
    );
  }
}
