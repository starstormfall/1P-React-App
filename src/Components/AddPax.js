import React from "react";
import { Box, TextField } from "@mui/material";

function AddPax(props) {
  return (
    <div>
      {props.propItem && props.propItem.length > 0
        ? props.propItem.map((data, i) => {
            return (
              <div key={`paxEntry${i}`}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: " 25%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="paxName"
                    label="Name"
                    variant="filled"
                    value={data.name}
                    onChange={(e) => props.handlePaxChange(e, i)}
                  />
                  {props.propItem.length > 1 ? (
                    <button id="addPax" onClick={props.handleClick}>
                      delete
                    </button>
                  ) : null}
                </Box>
              </div>
            );
          })
        : null}
      <button onClick={() => props.handleAddPax()}>Add Person</button>
    </div>
  );
}

export default AddPax;
