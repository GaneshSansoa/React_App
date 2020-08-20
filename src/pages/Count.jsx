import React from "react";

class Count extends React.Component {
  render() {
    const styles = {
      fontSize: "20px",
    };
    const { onIncrement, onDecrement, onDelete, counters } = this.props;
    return (
      <div className="w-25">
        <div class="row">
          <div class="col-sm-3">
            <span className={this.loadClasses()}>{this.findCount()}</span>
          </div>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onIncrement(counters)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(counters)}
            disabled={counters.value == 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => onDelete(counters.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  loadClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counters.value == 0 ? "warning" : "primary";
    return classes;
  }

  findCount() {
    return this.props.counters.value > 0 ? this.props.counters.value : "Zero";
  }
}

export default Count;
