import React from "react";
import {
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditOffIcon from "@mui/icons-material/EditOff";

export default class TotalPax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  handleEdit = () => {
    if (!this.state.editMode) {
      this.setState({
        editMode: true,
      });
    } else {
      this.setState({
        editMode: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Typography variant="h4">Who's Splitting $?</Typography>
        <br />
        <Stack direction="row" spacing={2} justifyContent="center" m={2}>
          <TextField
            name="paxInput"
            label="Name"
            variant="outlined"
            value={this.props.paxInput}
            onChange={this.props.handleChange}
            required={true}
            fullWidth={true}
          />
          <Button
            variant="contained"
            size="small"
            onClick={this.props.handleAddPaxClick}
          >
            <PersonAddIcon />
          </Button>
        </Stack>
        <br />
        {this.props.paxList && this.props.paxList.length > 0 ? (
          <div>
            <Divider>
              <Typography variant="h6">
                Total Contributors: {this.props.paxList.length}
                <IconButton onClick={this.handleEdit}>
                  {this.state.editMode ? <EditOffIcon /> : <BorderColorIcon />}
                </IconButton>
              </Typography>
            </Divider>
            {this.props.paxList.map((pax, index) => (
              <div key={index}>
                <Stack
                  m={2}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <TextField
                    autoFocus
                    name="editPax"
                    size="small"
                    label="Name"
                    variant="filled"
                    fullWidth={true}
                    value={this.props.paxList[index]}
                    disabled={this.state.editMode ? false : true}
                    onChange={(event) =>
                      this.props.handleEditPaxChange(index, event)
                    }
                  />
                  <Button
                    variant="contained"
                    size="small"
                    name="delete-pax"
                    onClick={(event) => this.props.handleDelete(index, event)}
                  >
                    <PersonRemoveIcon />
                  </Button>
                </Stack>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
