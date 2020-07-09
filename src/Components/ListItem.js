import React, { Component } from "react";
import * as actions from "../Action/Action";
import { connect } from "react-redux";

class ListItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  };

  onUpdateTask = () => {
    this.props.onEditTask(this.props.task);
    this.props.onOpenForm();
  };

  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "badge badge-danger"
                : "badge badge-success"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning mr-2"
            onClick={this.onUpdateTask}
          >
            <span className="fa fa-pencil-alt mr-2"></span>
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-2"></span>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProp = (state) => {
  return {};
};

const mapDispatchToProp = (Dispatch, prop) => {
  return {
    onUpdateStatus: (id) => {
      Dispatch(actions.updateStatus(id));
    },
    onDelete: (id) => {
      Dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      Dispatch(actions.coloseForm());
    },
    onOpenForm: () => {
      Dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      Dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(ListItem);
