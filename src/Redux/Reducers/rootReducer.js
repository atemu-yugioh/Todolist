import { combineReducers } from "redux";
import { tasks } from "./tasks";
import { itemEditing } from "./itemEditing";
import { filterTable } from "./filterTable";
import { sort } from "./Sort";
import { search } from "./Search";
export const rootReducer = combineReducers({
  tasks,
  itemEditing,
  filterTable,
  search,
  sort,
});
