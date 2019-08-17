import * as actions from "./actions";
import * as constants from "../constants/constants";
import { stack, stacks } from "../data/fixtures";

describe("actions", () => {
  it("creates an action to set the main stack", () => {
    const expectedAction = {
      type: constants.SET_STACK,
      stack,
    };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it("creates an action to add a stack", () => {
    const expectedAction = {
      type: constants.ADD_STACK,
      stack,
    };

    expect(actions.addStack(stack)).toEqual(expectedAction);
  });

  it("creates an action to load stacks", () => {
    const expectedAction = { type: constants.LOAD_STACKS, stacks };

    expect(actions.loadStacks(stacks)).toEqual(expectedAction);
  });
});
