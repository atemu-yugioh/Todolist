import * as types from "../Constants/ActionType";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};

export const coloseForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

export const clearForm = () => {
  return {
    type: types.CLEAR_FORM,
  };
};

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS,
    id,
  };
};

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};

export const filterTable = (filter) => {
  return {
    type: types.FILTER_TABLE,
    filter,
  };
};

export const search = (keyWord) => {
  return {
    type: types.SEARCH,
    keyWord,
  };
};

export const sort = (sortName, sortValue) => {
  return {
    type: types.SORT,
    sortName,
    sortValue,
  };
};
