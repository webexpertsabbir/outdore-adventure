import React, { useEffect, useState } from 'react';
import PostCard from '../Shared/PostCard/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

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