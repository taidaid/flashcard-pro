import rootReducer from "./reducers";
import * as actions from "../actions/actions";
import * as constants from "../constants/constants";
import { stack, stacks } from "../data/fixtures";

describe("root reducer", () => {
  it("returns the initial state", () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
  });

  it("sets the main stack", () => {
    expect(rootReducer({}, { type: constants.SET_STACK, stack })).toEqual({
      stack,
      stacks: [],
    });
  });

  it("loads stacks", () => {
    expect(rootReducer({}, { type: constants.LOAD_STACKS, stacks })).toEqual({
      stack: {},
      stacks,
    });
  });

  it("adds a stack", () => {
    expect(rootReducer({}, { type: constants.ADD_STACK, stack })).toEqual({
      stack: {},
      stacks: [stack],
    });
  });
});
