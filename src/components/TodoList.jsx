import React from 'react';
import Todo from './Todo';

export default function TodoList({ title, todos, onChange, onDelete }) {
    return (
        <div className='h-3/6 px-[20px] overflow-y-auto'>
            <h1 className='font-bold text-3xl my-[10px] text-white'>{title}</h1>
            <div className='flex flex-wrap gap-[20px]'>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onChange={onChange}
                    />
                ))}
            </div>
        </div>
    );
}
