import React, { Component } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import SpacexListComponent from "../SpacexListComponent/SpacexListComponent";

class HomeComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>SpaceX Launch Programs</h1>
        <div className="row">
          <div className="col-md-3 col-xs-12 col-sm-4">
            <FilterComponent />
          </div>
          <div className="col-md-9 col-xs-12 col-sm-8 spacexComponent">
            <SpacexListComponent />
          </div>
        </div>
      </div>
    );
  }

}

export default HomeComponent;
