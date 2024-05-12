import React from 'react';

export default function Todo({ todo, onDelete, onChange }) {
    const { title, content, done } = todo;
    const handleDelete = () => onDelete(todo);
    const handleChange = () => onChange(todo);

    return (
        <div className='flex'>
            {title} : {content}
            <button className='bg-slate-200 mr-2' onClick={handleDelete}>
                삭제
            </button>
            <button className='bg-slate-200' onClick={handleChange}>
                {done ? '취소' : '완료'}
            </button>
        </div>
    );
}
