import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export function ToggleMode(props) {
  return (
    <ToggleButtonGroup
      exclusive
      onChange={(e) => props.handleToggleChange(e)}
      aria-label="toggle mode"
    >
      <ToggleButton aria-label="split evenly">Split Equally</ToggleButton>
      <ToggleButton aria-label="split individually">Split Exactly</ToggleButton>
    </ToggleButtonGroup>
  );
}
