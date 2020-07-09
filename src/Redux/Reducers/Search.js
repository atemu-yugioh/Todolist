import * as types from "../../Constants/ActionType";
const initialState = "";

export const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH: {
      state = action.keyWord;
      return state;
    }
    default:
      return state;
  }
};
