import { GET_CONTENT } from "../../ActionType/ActionTypes";

  
  const initialState = {
    posts: [],
  };
  
  const postReducer = (state = initialState, action) => {
  
  
    switch (action.type) {
      case GET_CONTENT:
        return {
          ...state,
          posts: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default postReducer;
