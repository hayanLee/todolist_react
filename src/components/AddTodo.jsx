import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleChange = (e) => {
        if (e.target.id === 'title') setTitle(e.target.value);
        else setContent(e.target.value);
    };
    const handleSubmit = () => {
        onAdd({ title, id: 4, content });
        setTitle('');
        setContent('');
    };
    return (
        <div className='w-full bg-slate-100 p-4 flex'>
            <div>
                <label htmlFor='title'>제목</label>
                <input type='text' id='title' value={title} onChange={handleChange} />
                <label htmlFor='content'>내용</label>
                <input type='text' id='content' value={content} onChange={handleChange} />
            </div>
            <button className='bg-slate-300' onClick={handleSubmit}>
                Add Todo
            </button>
        </div>
    );
}
