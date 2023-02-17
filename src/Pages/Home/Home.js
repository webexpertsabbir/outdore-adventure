import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadPostData from '../../redux/thunk/posts/fetchPosts';
import PostCard from '../Shared/PostCard/PostCard';

const Home = () => {
    // const [posts, setPosts] = useState([]);
    const posts = useSelector(state => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetch("http://localhost:5000/posts")
        //     .then((res) => res.json())
        //     .then((data) => setPosts(data));
        dispatch(loadPostData())
        
    }, [dispatch]);

    return (
       <div className='px-20 py-16'>
         <div className='grid grid-cols-4 gap-5'>
            {
                posts.map(post => <PostCard
                key={post._id}
                post={post}
                ></PostCard>)
            }
        </div>
       </div>
    );
};

export default Home;