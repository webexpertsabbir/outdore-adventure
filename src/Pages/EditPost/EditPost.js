import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import blogPostEdit from '../../redux/thunk/posts/blogPostEdit';

const EditPost = () => {
    const { register, handleSubmit } = useForm();

    const { title, description, user, image, _id } = useLoaderData()


    const dispatch = useDispatch();

    const submit = (data) => {
        const post = {
            title: data.model,
            image: data.image,
            description: data.description,
            user: data.user,
            spec: [],
        };

        console.log(post);
        dispatch(blogPostEdit(post, _id));
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='model'>
                        Title
                    </label>
                    <input type='text' id='model' {...register("model")} placeholder={title} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image' >
                        Image
                    </label>
                    <input type='text' name='image' id='image' {...register("image")} placeholder={image} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='user'>
                        User Name
                    </label>
                    <input type='text' id='user' {...register("user")} placeholder={user} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea type='text' id='description' {...register("description")} placeholder={description} />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};



export default EditPost;