import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Action/Action";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(value);
    if (name === "status") {
      value = value === "true" ? true : false;
    }

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.taskUpdate.id) {
      this.props.onUpdateTask(this.state);
      this.props.onClearForm();
      this.props.onCloseForm();
    } else {
      this.props.onAddTask(this.state);
      this.props.onClearForm();
      this.props.onCloseForm();
    }
  };

  UNSAFE_componentWillMount() {
    if (this.props.taskUpdate) {
      this.setState({
        id: this.props.taskUpdate.id,
        name: this.props.taskUpdate.name,
        status: this.props.taskUpdate.status,
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskUpdate) {
      this.setState({
        id: nextProps.taskUpdate.id,
        name: nextProps.taskUpdate.name,
        status: nextProps.taskUpdate.status,
      });
    } else if (nextProps && nextProps.taskUpdate === null) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }

  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
    this.props.onCloseForm();
  };
  render() {
    let { onCloseForm } = this.props;
    if (!this.props.isDisplayForm) return "";
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.state.id === "" ? "Add Works" : "Update Works"}
            <span
              className={
                this.state.id === ""
                  ? "fa fa-times-circle text-right ml-160"
                  : "fa fa-times-circle text-right ml-135"
              }
              onClick={onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name Works"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status:</label>
              <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Hide</option>
              </select>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary mr-15">
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.tasks.isDisplayForm,
    taskUpdate: state.itemEditing,
  };
};

const mapDispatchToProps = (Dispatch, props) => {
  return {
    onAddTask: (task) => {
      Dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      Dispatch(actions.coloseForm());
    },
    onClearForm: () => {
      Dispatch(actions.clearForm());
    },
    onUpdateTask: (task) => {
      Dispatch(actions.updateTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
