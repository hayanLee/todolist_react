import React from 'react';

export default function Todo({ todo, onDelete, onChange }) {
    const { title, content, done } = todo;
    const handleDelete = () => onDelete(todo);
    const handleChange = () => onChange(todo);

    return (
        <div
            className={`flex flex-col w-[200px] h-[200px] ${
                !done ? 'bg-yellow-100' : 'bg-pink-100'
            } p-3 rounded-lg`}
        >
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p>{content}</p>
            <div className='mt-auto'>
                <button
                    className='bg-red-300 mr-2 p-1.5 rounded-lg hover:bg-red-400'
                    onClick={handleDelete}
                >
                    삭제
                </button>
                <button
                    className='bg-sky-200 p-1.5 rounded-lg hover:bg-sky-400'
                    onClick={handleChange}
                >
                    {done ? <span>취소 ↩️</span> : <span>완료 ✅</span>}
                </button>
            </div>
        </div>
    );
}
