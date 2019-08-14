import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { addStack } from "../actions/actions";

class StackForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      cards: [],
    };
  }

  addCard() {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: "", answer: "" });
    this.setState({ cards });
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  addStack(e) {
    e.preventDefault();
    console.log("Stack Form state", this.state);
    this.props.addStack(this.state);
  }

  render() {
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline onSubmit={e => this.addStack(e)}>
          <FormGroup>
            <FormLabel>Title:</FormLabel>{" "}
            <FormControl
              onChange={e => this.setState({ title: e.target.value })}
            />
          </FormGroup>
          {this.state.cards.map((card, index) => {
            return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <FormLabel>Prompt:</FormLabel>{" "}
                  <FormControl
                    onChange={e => {
                      this.updateCardPart(e, index, "prompt");
                    }}
                  />{" "}
                  <FormLabel>Answer:</FormLabel>{" "}
                  <FormControl
                    onChange={e => {
                      this.updateCardPart(e, index, "answer");
                    }}
                  />
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add a Card</Button>
        <hr />
        <Link to="/">
          <Button onClick={e => this.addStack(e)}>Save and Add Stack</Button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { addStack }
)(StackForm);
