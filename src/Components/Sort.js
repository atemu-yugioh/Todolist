import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Action/Action";

class Sort extends Component {
  onSort = (sortName, sortValue) => {
    this.props.onSort(sortName, sortValue);
  };

  render() {
    let { typeSort } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort
            <i className="far fa-caret-square-down ml-3"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className={
                typeSort.sortName === "name" && typeSort.sortValue === 1
                  ? "dropdown-item icon sort_selected"
                  : "dropdown-item"
              }
              href="#dropdown"
              onClick={() => this.onSort("name", 1)}
            >
              <i className="fa fa-sort-alpha-down mr-2"></i>
              Name A - Z
            </a>
            <a
              className={
                typeSort.sortName === "name" && typeSort.sortValue === -1
                  ? "dropdown-item icon sort_selected"
                  : "dropdown-item"
              }
              href="#dropdown"
              onClick={() => this.onSort("name", -1)}
            >
              <i className="fa fa-sort-alpha-down mr-2"></i>
              Name Z - A
            </a>
            <hr />
            <a
              className={
                typeSort.sortName === "status" && typeSort.sortValue === 1
                  ? "dropdown-item icon sort_selected"
                  : "dropdown-item"
              }
              href="#dropdown"
              onClick={() => this.onSort("status", 1)}
            >
              Status Active
            </a>
            <a
              className={
                typeSort.sortName === "status" && typeSort.sortValue === -1
                  ? "dropdown-item icon sort_selected"
                  : "dropdown-item"
              }
              href="#dropdown"
              onClick={() => this.onSort("status", -1)}
            >
              Status Hide
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    typeSort: state.sort,
  };
};

const mapDispatchToProps = (Dispatch, props) => {
  return {
    onSort: (sortName, sortValue) => {
      Dispatch(actions.sort(sortName, sortValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
