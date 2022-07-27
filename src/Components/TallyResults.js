import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
        <Typography variant="h4">How Do We Split?</Typography>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Each Person Pays
            </Typography>
            <Typography variant="h5" component="div">
              ${splitAmount}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Divider>
          <Typography variant="h6">Who Should Get Back $</Typography>
        </Divider>
        <Card>
          <CardContent>
            {Object.entries(finalTally)
              .filter(([key, value]) => {
                return value > 0;
              })
              .map(([key, value], index) => (
                <Typography key={index}>
                  {key} | ${Math.abs(value).toFixed(2)}
                </Typography>
              ))}
          </CardContent>
        </Card>
        <br />
        <Divider>
          <Typography variant="h6">Who Needs To Pay Back $</Typography>
        </Divider>
        <Card>
          <CardContent>
            {Object.entries(finalTally)
              .filter(([key, value]) => {
                return value < 0;
              })
              .map(([key, value], index) => (
                <Typography key={index}>
                  {key} | ${Math.abs(value).toFixed(2)}
                </Typography>
              ))}
          </CardContent>
        </Card>
        <br />
        {/* <p>{JSON.stringify(paidTally)}</p>
        <p>{JSON.stringify(finalTally)}</p> */}
        <Button variant="contained">
          <SendIcon /> | Share Results
        </Button>
      </div>
    );
  }
}
