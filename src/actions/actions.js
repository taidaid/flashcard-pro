import { SET_STACK, LOAD_STACKS } from "../constants/constants";

export const setStack = stack => {
  return {
    type: SET_STACK,
    stack,
  };
};

export const loadStacks = stacks => {
  return { type: LOAD_STACKS, stacks };
};
