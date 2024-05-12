import React from 'react';

export default function Todo({ todo }) {
    const { title, content } = todo;
    return (
        <div className='flex'>
            {title} : {content}
            <button className='bg-slate-200 mr-2'>삭제</button>
            <button className='bg-slate-200'>변경</button>
        </div>
    );
}
