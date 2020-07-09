import * as types from "../../Constants/ActionType";
const data = JSON.parse(localStorage.getItem("task"));
const initialState = {
  tasks: data ? data : [],
  isDisplayForm: false,
};

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL: {
      return { ...state };
    }
    case types.ADD_TASK: {
      let newTask = {
        id: require("randomstring").generate(),
        name: action.task.name,
        status: action.task.status,
      };

      let tasks = [...state.tasks];

      tasks.push(newTask);

      state.tasks = tasks;

      localStorage.setItem("task", JSON.stringify(state.tasks));
      return { ...state };
    }
    case types.TOGGLE_FORM: {
      state.isDisplayForm = !state.isDisplayForm;
      return { ...state };
    }
    case types.OPEN_FORM: {
      state.isDisplayForm = true;
      return { ...state };
    }
    case types.CLOSE_FORM: {
      state.isDisplayForm = false;
      return { ...state };
    }
    case types.UPDATE_STATUS: {
      let task = state.tasks.map(
        (task) =>
          task.id === action.id ? { ...task, status: !task.status } : task
        // nếu kiểm tra đúng ==> trả về 1 cái task copy và ghi đè thuộc tính status của cái task được copy đó ==> kết quả là cái task có cái id sẽ được thay thế bằng cái taskcopy ==> state của redux thay đổi ==> re-render
        // vd: khi nhấn vào thằng thứ hai trong mảng (state.taks:mảng các task )
        //demo
        //map thằng thứ nhất không có id giống id cần xét trả về chính cái task thứ nhất đó luôn
        // tiếp theo map thằng thứ hai, lúc này có id trùng nhau ==> nó trả về cái task copy (...task) và đồng thời ghi đè thuộc tính status (còn cái task thứ hai(lúc đầu) lúc nhận vào để xét điều kiện thì nó bỏ qua không quan tâm luôn)
        //map thằng thư 3 giống thằng thứ nhất
        // trả về 1 mảng task ==> gán lại cái state.task = task ==> re-render giao diện
        //NOTE: redux khoongre-render khi thuộc tính của thuộc tính con bên trong state thay đổi (id,name,status) là các thuộc tính con của thuộc tính tasks bên trong state
      );

      state.tasks = task;

      localStorage.setItem("task", JSON.stringify(state.tasks));
      return { ...state };
    }
    case types.DELETE_TASK: {
      let tasks = [...state.tasks];

      let index = tasks.findIndex((task) => task.id === action.id);

      tasks.splice(index, 1);

      state.tasks = tasks;

      localStorage.setItem("task", JSON.stringify(state.tasks));

      return { ...state };
    }
    case types.UPDATE_TASK: {
      let taskUpdate = [...state.tasks];
      let index = taskUpdate.findIndex((task) => task.id === action.task.id);
      taskUpdate[index] = action.task;
      state.tasks = taskUpdate;

      localStorage.setItem("task", JSON.stringify(state.tasks));
      return { ...state };
    }
    default:
      return { ...state };
  }
};
