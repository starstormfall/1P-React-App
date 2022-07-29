import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export class TallyExact extends React.Component {
  render() {
    const paidTally = {};
    const spentTally = {};
    const finalTally = {};

    for (const pax of this.props.paxList) {
      paidTally[pax] = 0;
    }

    for (const pax of this.props.paxList) {
      spentTally[pax] = 0;
    }

    this.props.paidList.forEach((paidEntry) => {
      paidTally[paidEntry.payer] += Number(paidEntry.paidAmount);
    });

    this.props.paidList.forEach((paidEntry) => {
      spentTally[paidEntry.spender] += Number(paidEntry.paidAmount);
    });

    Object.entries(paidTally).forEach(([key, value]) => {
      finalTally[key] = value - spentTally[key];
    });

    return (
      <div>
        <Typography variant="h4">How Do We Split?</Typography>
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
      </div>
    );
  }
}
