import { postEdit } from "../../Action/Action";


const blogPostEdit = (post, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://moon-tech-server-seven.vercel.app/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
        dispatch(postEdit(id));
    }
  };
};

export default blogPostEdit;