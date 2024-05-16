import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

export default function App() {
    const [todos, setTodos] = useState([
        { title: '밥먹기', id: 1, content: '맛점하기', isDone: false },
        { title: '장보기', id: 2, content: '아이스크림 3개', isDone: false },
        { title: '청소', id: 3, content: '대청소', isDone: false },
        { title: '분리수거', id: 4, content: '페트병구기기', isDone: true },
        {
            title: '타이틀 최대 15글자',
            id: 5,
            content: '내용 최대 20글자',
            isDone: false,
        },
    ]);
    const handleAddTodo = (newTodo) => setTodos((prevTodos) => [...prevTodos, newTodo]);
    const handleDeleteTodo = (deletedTodo) =>
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== deletedTodo.id));
    const handleChangeTodo = (changedTodo) =>
        setTodos((prevTodos) =>
            prevTodos.map((t) =>
                t.id === changedTodo.id ? { ...t, isDone: !t.isDone } : t
            )
        );

    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
        <div className='w-screen h-screen bg-slate-100 flex justify-center overflow-hidden'>
            <div className='max-w-[1200px] min-w-[800px] bg-blue-500'>
                <Header />
                <AddTodo onAdd={handleAddTodo} />
                <TodoList
                    title='Working 🔥'
                    todos={workingTodos}
                    onChange={handleChangeTodo}
                    onDelete={handleDeleteTodo}
                />
                <TodoList
                    title='Done 👍'
                    todos={doneTodos}
                    onChange={handleChangeTodo}
                    onDelete={handleDeleteTodo}
                />
            </div>
        </div>
    );
}
