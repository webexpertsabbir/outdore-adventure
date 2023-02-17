import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    console.log(post)
    const { image, title, description, _id } = post;
    console.log(image)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description?.slice(0, 180)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/post/${_id}`}><button className="btn btn-sm">Read More</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;