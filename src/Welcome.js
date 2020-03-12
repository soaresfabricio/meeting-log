import React, { Component } from "react";
import { Link } from "@reach/router";

class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    const { userName, logOutUser } = this.props;

    return (
      <div className="text-right pr-3 pt-2">
        <span className="text-secondary font-weight-bold pl-1">{userName}</span>
        <Link
          to="/login"
          className="font-weight-bold text-primary pl-1"
          onClick={e => logOutUser(e)}
        >
          Logout
        </Link>
      </div>
    );
  }
}

export default Welcome;
