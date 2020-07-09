import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Action/Action";

class Search extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      keySearch: "",
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keySearch);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Input Search ... "
            name="keySearch"
            value={this.state.keySearch}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onSearch}
            >
              <i className="fa fa-search mr-2"></i>Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (Dispatch, prop) => {
  return {
    onSearch: (keyWord) => {
      Dispatch(actions.search(keyWord));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
