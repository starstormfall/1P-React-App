import React from "react";
import { Box, TextField, Button } from "@mui/material";

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
        <h3>Enter Who Needs To Pay:</h3>

        <TextField
          name="paxInput"
          label="Name"
          variant="filled"
          value={this.props.paxInput}
          onChange={this.props.handleChange}
          required={true}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={this.props.handleAddPaxClick}
        >
          Add Person
        </Button>

        {this.props.paxList && this.props.paxList.length > 0 ? (
          <div>
            <hr />
            <h3>List of Names Who Are Paying:</h3>
            {this.props.paxList.map((pax, index) => (
              <div key={index}>
                <TextField
                  name="editPax"
                  size="small"
                  label="Name"
                  variant="filled"
                  value={this.props.paxList[index]}
                  disabled={this.state.editMode ? false : true}
                  onChange={(event) =>
                    this.props.handleEditPaxChange(index, event)
                  }
                />
                <button
                  name="delete-pax"
                  onClick={(event) => this.props.handleDelete(event, index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button onClick={this.handleEdit}>
              {this.state.editMode ? "Save" : "Edit"}
            </button>
            <p>Total Pax Paying: {this.props.paxList.length}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
