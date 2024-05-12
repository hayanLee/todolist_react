import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleChange = (e) => {
        if (e.target.id === 'title') setTitle(e.target.value);
        else setContent(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, id: uuidv4(), content, done: false });
        setTitle('');
        setContent('');
    };
    return (
        <div className='w-full h-14 bg-sky-200 p-4 flex items-center'>
            <form onSubmit={handleSubmit} className='w-full flex items-center '>
                <>
                    <label htmlFor='title' className='font-bold'>
                        제목
                    </label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        onChange={handleChange}
                        className='mr-4 ml-2 rounded-lg p-1.5'
                    />
                    <label htmlFor='content' className='font-bold'>
                        내용
                    </label>
                    <input
                        type='text'
                        id='content'
                        value={content}
                        onChange={handleChange}
                        className='mr-4 ml-2 rounded-lg p-1.5'
                    />
                </>
                <button className='bg-slate-200 w-[200px] ml-auto rounded-lg p-1.5 hover:bg-slate-500'>
                    <span className='font-bold'>Add Todo</span>
                </button>
            </form>
        </div>
    );
}
