import * as types from "../../Constants/ActionType";

const initialState = {
  id: "",
  name: "",
  status: false,
};

export const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK: {
      state = action.task;
      return { ...state };
    }
    case types.CLEAR_FORM: {
      return {
        ...state,
        id: "",
        name: "",
        status: false,
      };
    }

    default:
      break;
  }
  return { ...state };
};
