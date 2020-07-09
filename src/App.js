import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import Control from "./Components/Control";
import TagList from "./Components/Taglist";
import { connect } from "react-redux";
import * as actions from "./Action/Action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayform: false,
    };
  }

  onGenerateData = () => {
    var randomstring = require("randomstring");
    var task = [
      {
        id: randomstring.generate(),
        name: "Learn ReactJs",
        status: true,
      },
      {
        id: randomstring.generate(),
        name: "Learn AngularJs",
        status: false,
      },
      {
        id: randomstring.generate(),
        name: "Learn English",
        status: true,
      },
    ];
    // create array then push on localstorage
    localStorage.setItem("task", JSON.stringify(task));
  };

  onToggleForm = () => {
    if (this.props.itemEditing.id) {
      this.props.onOpenForm();
      this.props.onClearForm();
    } else {
      this.props.onClearForm();
      this.props.onToggleForm();
    }
  };

  onShowForm = () => {
    this.setState({
      isDisplayform: true,
    });
  };

  onDelete = (id) => {
    let { task } = this.state;
    let index = task.findIndex((task) => task.id === id);
    task.splice(index, 1);
    this.setState({
      task: task,
    });
    localStorage.setItem("task", JSON.stringify(task));
  };

  onFilter = (filterName, filterStatus) => {
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: parseInt(filterStatus),
      },
    });
  };

  onSearch = (keySearch) => {
    this.setState({
      keySearch: keySearch.toLowerCase(),
    });
  };

  onSort = (sortName, sortValue) => {
    this.setState({
      sortBy: sortName,
      sortValue: sortValue,
    });
  };
  render() {
    let { isDisplayform } = this.props;

    // if (sortBy === "name") {
    //   task.sort((taskNext, task) => {
    //     if (taskNext.name.toLowerCase() > task.name.toLowerCase())
    //       return sortValue;
    //     else if (taskNext.name.toLowerCase() < task.name.toLowerCase())
    //       return -sortValue;
    //     else return 0;
    //   });
    // } else {
    //   task.sort((taskNext, task) => {
    //     console.log("ad");
    //     if (taskNext.status > task.status) return -sortValue;
    //     else if (taskNext.status <= task.status) return sortValue;
    //     else return 0;
    //   });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Management Works</h1>
          <hr />
        </div>
        <div className="row">
          {/* Form */}
          <div
            className={
              isDisplayform === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            <Form />
          </div>
          {/* Control */}
          <div
            className={
              isDisplayform === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span>
                <i className="fa fa-plus mr-2"></i>
                Add Works
              </span>
            </button>
            <button
              type="button"
              className="btn btn-danger ml-2"
              onClick={this.onGenerateData}
            >
              Generate
            </button>
            <Control />
            {/* ListWork */}
            <TagList
              onDelete={this.onDelete}
              onUpdateTask={this.onUpdateTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayform: state.tasks.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (Dispatch, prop) => {
  return {
    onToggleForm: () => {
      Dispatch(actions.toggleForm());
    },
    onClearForm: () => {
      Dispatch(actions.clearForm());
    },
    onOpenForm: () => {
      Dispatch(actions.openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
