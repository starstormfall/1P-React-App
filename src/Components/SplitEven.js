import React from "react";
import AddItem from "./AddItem.js";
import TotalPax from "./TotalPax.js";

export class SplitEven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPax: 1,
      amtPerPax: 0,
      calculateNow: false,
      paidList: [
        {
          payer: "",
          item: "",
          amount: 0,
        },
      ],

      paxList: [],
      currentPax: "",
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

  calcTotalAmt = () => {
    let totalAmt = 0;
    for (let index = 0; index < this.state.paidList.length; index++) {
      totalAmt += Number(this.state.paidList[index].amount);
    }
    return totalAmt;
  };

  handlePaxChange = (event, i) => {
    // for changing paxList
    console.log("adding pax");
    console.log(this.state.paxList);
    let currentPax = this.state.paxList[i];
    if (event.target.id === "paxName") {
      currentPax = event.target.value;
    }

    let paxArray = [...this.state.paxList];
    paxArray.splice(i, 1, currentPax);
    this.setState({
      paxList: paxArray,
    });
  };

  handleChange = (event, i) => {
    // for changing paidList items
    console.log("adding to paidList");
    console.log(event.target.id);
    console.log(event);
    let currentEntry = this.state.paidList[i];
    if (event.target.name === "item") {
      currentEntry.item = event.target.value;
    } else if (event.target.id === "amount") {
      currentEntry.amount = event.target.value;
    } else if (event.target.name === "payer") {
      console.log("add payer");
      currentEntry.payer = event.target.value;
    }

    let array = [...this.state.paidList];
    array.splice(i, 1, currentEntry);
    this.setState({
      paidList: array,
    });
    console.log(this.state.paidList);
  };

  handleAddItem = () => {
    let array = [...this.state.paidList];
    array.push({ payer: "", item: "", amount: 0 });
    this.setState({
      paidList: array,
    });
  };

  handleAddPax = () => {
    let array = [...this.state.paxList];
    array.push("");
    this.setState({
      paxList: array,
    });
  };

  handleClick = () => {
    if (
      this.state.currentPax !== "" &&
      !this.state.paxList.includes(this.state.currentPax)
    ) {
      let newPaxList = this.state.paxList.concat([this.state.currentPax]);
      this.setState({
        paxList: newPaxList,
        currentPax: "",
      });
    } else if (this.state.paxList.includes(this.state.currentPax)) {
      alert("Name already added. Please add another name");
      this.setState({
        currentPax: "",
      });
    } else {
      alert("Please enter a name!");
    }
  };

  render() {
    const showAmtPerPax = (
      <div>Each person should pay ${this.state.amtPerPax}.</div>
    );

    return (
      <div>
        <TotalPax
        // paxList={this.state.paxList}
        // currentPax={this.state.currentPax}
        // handleClick={this.handleClick}
        // handleEdit={this.}
        />
        {/* <h3>Everybody Who Needs to Pay:</h3>
        <AddPax
          propItem={this.state.paxList}
          handlePaxChange={this.handlePaxChange}
          handleAddPax={this.handleAddPax}
        />
        <button>Confirm All</button>
        <hr /> */}

        <h3>Who Paid How Much For What?</h3>
        <AddItem
          propItem={this.state.paidList}
          handleChange={this.handleChange}
          handleAddItem={this.handleAddItem}
          paxList={this.state.paxList}
        />

        <h4>Total Amount: ${this.calcTotalAmt()}</h4>
        <hr></hr>
        {/* <h3>Who Else Should Pay?</h3>
        <AddItem
          propValue={this.state.amount}
          handleChange={this.handleChange}
          propItem={this.state.items}
          handleAdd={this.handleAdd}
        /> */}

        {this.state.calculateNow ? showAmtPerPax : null}
      </div>
    );
  }
}
