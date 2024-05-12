import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: '밥먹기', id: 1, content: '한식먹기', done: true },
        { title: '쇼핑', id: 2, content: '장보기', done: true },
        { title: '청소', id: 3, content: '대청소', done: false },
    ]);
    const handleAddTodo = (todo) => setTodos([...todos, todo]);
    const handleDeleteTodo = (todo) => setTodos(todos.filter((t) => t.id !== todo.id));
    const handleChangeTodo = (todo) =>
        setTodos(
            todos.map((t) => {
                if (t.id === todo.id) {
                    return { ...t, done: !t.done };
                } else return t;
            })
        );
    return (
        <div>
            <AddTodo onAdd={handleAddTodo} />
            <div className='mb-4'>
                <h1>Working</h1>
                {todos.map(
                    (todo) =>
                        !todo.done && (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onDelete={handleDeleteTodo}
                                onChange={handleChangeTodo}
                            />
                        )
                )}
            </div>
            <div>
                <h1>Done</h1>
                {todos.map(
                    (todo) =>
                        todo.done && (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onDelete={handleDeleteTodo}
                                onChange={handleChangeTodo}
                            />
                        )
                )}
            </div>
        </div>
    );
}
