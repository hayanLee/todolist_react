import React, { Fragment, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: '밥먹기', id: 1, content: '맛점하기', done: false },
        { title: '장보기', id: 2, content: '아이스크림 3개', done: false },
        { title: '청소', id: 3, content: '대청소', done: false },
        { title: '분리수거', id: 4, content: '페트병구기기', done: true },
        { title: '타이틀 최대 15글자', id: 4, content: '내용 최대 20글자', done: false },
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
                <div className='h-3/6 px-[20px] overflow-y-auto'>
                    <h1 className='font-bold text-3xl my-[10px] text-white'>
                        Working 🔥
                    </h1>
                    <div className='flex flex-wrap gap-[20px]'>
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

                <div className='h-3/6 px-[20px] overflow-y-auto'>
                    <h1 className='font-bold text-3xl my-[10px] text-white'>Done 👍</h1>
                    <div className='flex flex-wrap gap-[20px]'>
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
