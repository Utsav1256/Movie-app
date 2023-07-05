import React from "react";

class Navbar extends React.Component {
  render() {
    // render() -> bcz. class component.
    return (
      <div className="nav">
        <div className="search-container">
          <input />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
