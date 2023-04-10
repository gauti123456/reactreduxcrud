import { ADD_USER, REMOVE_USER, UPDATE_USER } from "./crudTypes";

const initialState = {
  users: [],
};

export const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case UPDATE_USER:
      let {id,name,age} = action.payload
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === id ? { ...user, name, age } : user
        ),
      };
    default: {
      return state;
    }
  }
};
