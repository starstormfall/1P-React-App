import React from "react";
import { Select, Box, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function AddItem(props) {
  return (
    <div>
      {props.propItem && props.propItem.length > 0
        ? props.propItem.map((data, i) => {
            return (
              <div key={`entry${i}`}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: " 75%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel id="payer">Payer</InputLabel>
                  <Select
                    labelId="payer"
                    name="payer"
                    id="payer"
                    value={data.payer}
                    label="payer"
                    onChange={(e) => props.handleChange(e, i)}
                  >
                    {props.paxList && props.paxList.length > 0
                      ? props.paxList.map((pax, j) => {
                          return (
                            <MenuItem key={j} value={pax}>
                              {pax}
                            </MenuItem>
                          );
                        })
                      : null}
                  </Select>
                  {/* <TextField
                    id="payer"
                    label="Payer"
                    variant="filled"
                    value={data.payer}
                    onChange={(e) => props.handleChange(e, i)}
                    disabled={props.calculateNow ? true : false}
                  /> */}
                  <TextField
                    name="item"
                    label="Item Name"
                    variant="filled"
                    value={data.item}
                    onChange={(e) => props.handleChange(e, i)}
                    disabled={props.calculateNow ? true : false}
                  />
                  <TextField
                    id="amount"
                    label="Amount ($)"
                    variant="filled"
                    value={data.amount}
                    onChange={(e) => props.handleChange(e, i)}
                    required={true}
                    disabled={props.calculateNow ? true : false}
                  />
                  {/* <button onClick={props.handleClick}>delete</button> */}
                </Box>
              </div>
            );
          })
        : null}
      <button onClick={() => props.handleAddItem()}>Add Item</button>
    </div>
  );
}

export default AddItem;
