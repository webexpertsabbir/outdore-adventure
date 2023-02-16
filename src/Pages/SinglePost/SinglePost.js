import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
    const { title, description, image } = useLoaderData()
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SinglePost;