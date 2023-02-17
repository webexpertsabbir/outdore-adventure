import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../ActionType/ActionTypes"

export const loadPost = (data) =>{
    return{
        type: GET_CONTENT,
        payload: data
    }
}

export const addPost = (data) => {
    return {
      type: ADD_CONTENT,
      payload: data,
    };
  };

  export const postDelete = (id) => {
    return {
      type: DELETE_CONTENT,
      payload: id,
    };
  };

  export const postEdit = (id) => {
    return {
      type: UPDATE_CONTENT,
      payload: id,
    };
  };