import { postDelete } from "../../Action/Action";

const deletePost = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://moon-tech-server-seven.vercel.app/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(postDelete(id));
    }
  };
};

export default deletePost;