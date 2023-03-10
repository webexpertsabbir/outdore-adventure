import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import blogPostAdd from '../../../redux/thunk/posts/blogPostAdd';

const AddPost = () => {
    const { register, handleSubmit } = useForm();

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
        dispatch(blogPostAdd(post));
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
                    <input type='text' id='model' {...register("model")} placeholder="Title" />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image' >
                        Image
                    </label>
                    <input type='text' name='image' id='image' {...register("image")} placeholder="Image url" />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='user'>
                        User Name
                    </label>
                    <input type='text' id='user' {...register("user")} placeholder="User Name" />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea type='text' id='description' {...register("description")} placeholder="Descriiption" />
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

export default AddPost;