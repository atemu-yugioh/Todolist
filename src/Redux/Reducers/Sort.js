import * as types from "../../Constants/ActionType";
const initialState = {
  sortName: "name",
  sortValue: 1,
};

export const sort = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT: {
      //   let sort = {...state};
      //   sort.sortName = action.sortName;
      //   sort.sortStatus = action.sortStatus;
      return {
        ...state,
        sortName: action.sortName,
        sortValue: action.sortValue,
      };
    }
    default:
      return state;
  }
};
