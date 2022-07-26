import React from "react";

export class TallyResults extends React.Component {
  calcSplitAmount = () => {
    let totalPaid = this.props.paidList.reduce(
      (prev, curr) => prev + Number(curr.paidAmount),
      0
    );
    return totalPaid / this.props.paxList.length;
  };

  render() {
    const paidTally = {};
    const finalTally = {};
    const splitAmount = this.calcSplitAmount().toFixed(2);
    for (const pax of this.props.paxList) {
      paidTally[pax] = 0;
    }

    this.props.paidList.forEach((paidEntry) => {
      paidTally[paidEntry.payer] += Number(paidEntry.paidAmount);
    });

    Object.entries(paidTally).forEach(([key, value]) => {
      finalTally[key] = value - splitAmount;
    });

    return (
      <div>
        <p>Each pax should pay: ${splitAmount}</p>
        <h3>Who Should Get Back $?</h3>
        {Object.entries(finalTally)
          .filter(([key, value]) => {
            return value > 0;
          })
          .map(([key, value], index) => (
            <div key={index}>
              <p>
                {key} should get back ${Math.abs(value)}
              </p>
            </div>
          ))}

        <h3>Who Should Pay Back $?</h3>

        {Object.entries(finalTally)
          .filter(([key, value]) => {
            return value < 0;
          })
          .map(([key, value], index) => (
            <div key={index}>
              <p>
                {key} needs to pay ${Math.abs(value)}
              </p>
            </div>
          ))}

        <p>{JSON.stringify(paidTally)}</p>
        <p>{JSON.stringify(finalTally)}</p>
      </div>
    );
  }
}
