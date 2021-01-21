import React, { Component } from "react";
import "./FilterComponent.css";
import { connect } from "react-redux";
import userListsAction from "../../redux/actions/userLists.action";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const queryString = require('query-string');

class FilterComponent extends Component {
  state = {
    launch_year: [
      {
        id: 2006,
        year: 2006,
      },
      {
        id: 2007,
        year: 2007,
      },
      {
        id: 2008,
        year: 2008,
      },
      {
        id: 2009,
        year: 2009,
      },
      {
        id: 2010,
        year: 2010,
      },
      {
        id: 2011,
        year: 2011,
      },
      {
        id: 2012,
        year: 2012,
      },
      {
        id: 2013,
        year: 2013,
      },
      {
        id: 2014,
        year: 2014,
      },
      {
        id: 2015,
        year: 2015,
      },
      {
        id: 2016,
        year: 2016,
      },
      {
        id: 2017,
        year: 2017,
      },
      {
        id: 2018,
        year: 2018,
      },
      {
        id: 2019,
        year: 2019,
      },
      {
        id: 2020,
        year: 2020,
      },
    ],
    launch_success: [
      {
        id: true,
        value: true,
      },
      { id: false, value: false },
    ],
    land_success: [
      {
        id: true,
        value: true,
      },
      {
        id: false,
        value: false,
      },
    ],

    filterData: {
      launch_year: '',
      launch_success: '',
      land_success: '',
    },
    clicked: false,
  };

  handleCLick = (field, value) => {
    let newData = this.state.filterData;
    if (field === "year") {
      newData = {
        ...newData,
        launch_year: value,
      };
    }

    if (field === "launch") {
      newData = {
        ...newData,
        launch_success: value,
      };
    }

    if (field === "land") {
      newData = {
        ...newData,
        land_success: value,
      };
    }
    const newUrl = JSON.parse(JSON.stringify(newData));
    if(newUrl.land_success === ''){
      delete newUrl.land_success;
    }
    if(newUrl.launch_success === ''){
      delete newUrl.launch_success;
    }
    if(newUrl.launch_year === ''){
      delete newUrl.launch_year;
    }
    const url = queryString.stringify(newUrl);
    this.setState({filterData: newData})
    this.props.history.replace(url);
    this.props.filtedData(url);
  };
  render() {
    return (
      <div className="filterComponent">
        <h2>Filters </h2>
        <div className="fliterBox">
          <h4>Launch Year </h4>
          <ul className="d-flex flex-wrap filter-options">
            {this.state.launch_year.map((item) => (
              <li key={item.id}>
                <button
                  className="btn btn-success"
                  onClick={() => this.handleCLick("year", item.id)}
                >
                  {item.year}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="fliterBox">
          <h4>Succesful Launch </h4>
          <ul className="d-flex flex-wrap filter-options">
            {this.state.launch_success.map((item) => (
              <li key={`${item.id}`}>
                <button
                  className="btn btn-success"
                  onClick={() => this.handleCLick("launch", item.id)}
                >
                  {`${item.value}`}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="fliterBox">
          <h4>Succesful Landing </h4>
          <ul className="d-flex flex-wrap filter-options">
            {this.state.land_success.map((item) => (
              <li key={`${item.id}`}>
                <button
                  className="btn btn-success"
                  onClick={() => this.handleCLick("land", item.id)}
                >
                  {`${item.value}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filtedData: (datas) => dispatch(userListsAction.modifyResearchCall(datas)),
  };
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(FilterComponent);
