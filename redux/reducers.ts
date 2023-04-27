import { UPDATE_FLOWER } from "./actions";
import { combineReducers } from "redux";

const flower = (flower = { flower: "" }, action) => {
  switch (action.type) {
    case UPDATE_FLOWER:
      return { flower: action.flower };
    default:
      return flower;
  }
};

export default combineReducers({ flower });
