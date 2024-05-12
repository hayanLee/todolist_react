import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: '밥먹기', id: 1, content: '한식먹기' },
        { title: '쇼핑', id: 2, content: '장보기' },
        { title: '청소', id: 3, content: '대청소' },
    ]);
    const handleAddTodo = (todo) => setTodos((prev) => [...prev, todo]);
    return (
        <div>
            <AddTodo onAdd={handleAddTodo} />
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}
