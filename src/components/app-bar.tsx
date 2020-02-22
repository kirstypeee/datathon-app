import * as React from "react";
import logo from "../assets/images/logo-top.png";
import "./app-bar.css";

class AppBar extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app-bar">
        <div className="app-bar-logo">
          <img src={logo} />
        </div>
        <div className="app-bar-column">
          <i className="material-icons">timeline</i>
          <span className="app-bar-heading">Our Community Insights</span>
        </div>
      </div>
    );
  }
}

export default AppBar;
