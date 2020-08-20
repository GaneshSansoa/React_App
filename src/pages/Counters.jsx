import React, { Component } from "react";
import Count from "./Count";

class Counters extends Component {
  render() {
    // console.log(this.props);
    const {
      onReset,
      onDelete,
      onIncrement,
      counters,
      onDecrement,
    } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={onReset}>
          {" "}
          Reset{" "}
        </button>
        {counters.map((count) => (
          <Count
            key={count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counters={count}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
