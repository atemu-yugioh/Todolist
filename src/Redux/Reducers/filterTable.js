import * as types from "../../Constants/ActionType";
const initialState = {
  name: "",
  status: -1,
};

export const filterTable = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TABLE: {
      state = action.filter;
      return { ...state };
    }

    default:
      return state;
  }
};
