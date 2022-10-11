// Action creator
import { getCreator, getCreators } from "../utils/api";

export const fetchCreators = (payload) => {
  return { type: "FETCH_CREATORS", payload };
};

export const fetchCreatorsAsync = () => {
  return async (dispatch) => {
    const res = await new Promise((res, rej) =>
      setTimeout(() => res(getCreators()), 1000)
    );
    return dispatch(fetchCreators(res));
  };
};

export const selectedCreator = (id) => {
  return {
    type: "CREATOR_SELECTED",
    payload: getCreator(id),
  };
};

// function fetchCreators() {
//   return (dispatch) => {
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//       dispatch(increment());
//     }, 1000);
//   };
// }
