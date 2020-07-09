import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import * as actions from "./../Action/Action";

class Taglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = name === "filterStatus" ? parseInt(target.value) : target.value;

    let filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.onFilter(filter);
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { tasks, filterTable, search, sort } = this.props;
    console.log(sort);
    //filter on table
    if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !==
            -1
          );
        });
      }
      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false);
        }
      });
    }
    // search on table
    if (search) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
    }
    //sort by name and status
    // return 1 giu nguyen
    // return -1 dao vi tri
    if (sort.sortName === "name") {
      tasks.sort((taskNext, task) => {
        if (taskNext.name.toLowerCase() > task.name.toLowerCase())
          return sort.sortValue;
        else if (taskNext.name.toLowerCase() < task.name.toLowerCase())
          return -sort.sortValue;
        else return 0;
      });
    } else {
      tasks.sort((taskNext, task) => {
        if (taskNext.status > task.status) return -sort.sortValue;
        else if (taskNext.status <= task.status) return sort.sortValue;
        else return 0;
      });
    }
    let elementTask = tasks.map((task, index) => {
      return (
        <ListItem
          key={task.id}
          index={index}
          task={task}
          onDelete={this.props.onDelete}
          onUpdateTask={this.props.onUpdateTask}
        />
      );
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={this.state.filterName}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    value={this.state.filterStatus}
                    onChange={this.onChange}
                  >
                    <option value={-1}>All</option>
                    <option value={0}>Hide</option>
                    <option value={1}>Active</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elementTask}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    filterTable: state.filterTable,
    search: state.search,
    sort: state.sort,
  };
};

const mapDispatchToProps = (Dispatch, props) => {
  return {
    onFilter: (filter) => {
      Dispatch(actions.filterTable(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Taglist);
