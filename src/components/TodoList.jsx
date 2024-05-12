import React, { Fragment, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: '밥먹기', id: 1, content: '한식먹기', done: true },
        { title: '쇼핑', id: 2, content: '장보기', done: true },
        { title: '청소', id: 3, content: '대청소', done: false },
        { title: '청소', id: 4, content: '대청소', done: true },
        { title: '청소', id: 5, content: '대청소', done: false },
        { title: '청소', id: 6, content: '대청소', done: true },
        { title: '청소', id: 7, content: '대청소', done: false },
        { title: '청소', id: 8, content: '대청소', done: true },
        { title: '청소', id: 231, content: '대청소', done: false },
        { title: '청소', id: 123, content: '대청소', done: true },
        { title: '청소', id: 312, content: '대청소', done: true },
        { title: '청소', id: 124124, content: '대청소', done: false },
        { title: '청소', id: 454234, content: '대청소', done: false },
        { title: '청소', id: 3457, content: '대청소', done: false },
        { title: '청소', id: 455, content: '대청소', done: false },
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
        <>
            <AddTodo onAdd={handleAddTodo} />
            <Fragment>
                <div className='h-3/6 ml-[20px] overflow-y-auto'>
                    <h1 className='font-bold text-3xl my-[10px] text-white'>
                        Working 🔥
                    </h1>
                    <div className='flex flex-wrap gap-[15px]'>
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
                </div>

                <div className='h-3/6 ml-[20px] overflow-y-auto'>
                    <h1 className='font-bold text-3xl my-[10px] text-white'>Done 👍</h1>
                    <div className='flex flex-wrap gap-[15px]'>
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
            </Fragment>
        </>
    );
}
