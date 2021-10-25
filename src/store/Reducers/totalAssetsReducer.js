import { GET_TOTAL } from "../Actions/actions";

const initialState = 1000;

export const totalAssetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;

    default:
      return state;
  }
};
