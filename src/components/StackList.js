import React, { Component } from "react";
import { connect } from "react-redux";
import stacks from "../data/stacks.json";
import { Link } from "react-router-dom";
import { setStack, loadStacks } from "../actions/actions";

class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) {
      console.log("loading stacks");
      this.props.loadStacks(stacks);
    }
  }

  render() {
    return (
      <div>
        {this.props.stacks.map(stack => {
          return (
            <Link
              key={stack.id}
              to="/stack"
              onClick={() => this.props.setStack(stack)}
            >
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stacks: state.stacks };
}

export default connect(
  mapStateToProps,
  { setStack, loadStacks }
)(StackList);
