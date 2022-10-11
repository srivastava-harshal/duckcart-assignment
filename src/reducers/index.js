import { combineReducers } from "redux";

const creatorsReducer = (state = [], action) => {
  if (action.type === "FETCH_CREATORS") {
    return action.payload;
  }

  return state;
};

const selectedCreatorReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATOR_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  creators: creatorsReducer,
  selectedCreator: selectedCreatorReducer,
});
