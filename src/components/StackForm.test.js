import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StackForm } from "./StackForm";
import { stack } from "../data/fixtures";

Enzyme.configure({ adapter: new Adapter() });

const changeTitle = "change title";
const changePrompt = "change prompt";
const changeAnswer = "change answer";

describe("StackForm", () => {
  const stackForm = shallow(<StackForm />);

  it("renders the home Link", () => {
    // console.log(stackForm.debug());
    expect(stackForm.find("Link h4").text()).toEqual("Home");
  });

  it("renders the title", () => {
    expect(stackForm.contains(<h4>Create a New Stack</h4>));
  });

  it("renders an Add Card button", () => {
    expect(
      stackForm
        .find("Button")
        .at(0)
        .props().children
    ).toEqual("Add a Card");
  });

  it("renders a Save and Add Stack button", () => {
    expect(
      stackForm
        .find("Button")
        .at(1)
        .text()
    ).toEqual("Save and Add Stack");
  });

  describe("when rendering the Form", () => {
    it("renders a Form component", () => {
      expect(stackForm.find("Form").exists()).toBe(true);
    });

    it("renders a FormControl component", () => {
      expect(stackForm.find("FormControl").exists()).toBe(true);
    });
  });

  describe("and updating the title", () => {
    beforeEach(() => {
      stackForm
        .find("FormControl")
        .simulate("change", { target: { value: changeTitle } });
    });

    it("updates the title in the state", () => {
      //   console.log(stackForm.state());
      expect(stackForm.state().title).toEqual(changeTitle);
    });
  });

  describe("when adding a new card", () => {
    beforeEach(() => {
      stackForm
        .find("Button")
        .at(0)
        .simulate("click");
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it("adds a new card to state", () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it("renders the prompt section", () => {
      expect(
        stackForm
          .find("FormLabel")
          .at(1)
          .text()
      ).toEqual("Prompt:");
    });

    it("renders the answer section", () => {
      expect(
        stackForm
          .find("FormLabel")
          .at(2)
          .text()
      ).toEqual("Answer:");
    });

    describe("and updating the Card prompt", () => {
      beforeEach(() => {
        stackForm
          .find("FormControl")
          .at(1)
          .simulate("change", { target: { value: changePrompt } });
      });

      it("updates the prompt in the state", () => {
        // console.log(stackForm.state());
        expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
      });
    });

    describe("and updating the Card answer", () => {
      beforeEach(() => {
        stackForm
          .find("FormControl")
          .at(2)
          .simulate("change", { target: { value: changeAnswer } });
      });

      it("updates the answer in the state", () => {
        // console.log(stackForm.state());
        expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
      });
    });
  });
});
