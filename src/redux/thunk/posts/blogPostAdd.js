import { addPost } from "../../Action/Action";


const blogPostAdd = (post) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-seven.vercel.app/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addPost({
          _id: data.insertedId,
          ...post,
        })
      );
    }
  };
};

export default blogPostAdd;