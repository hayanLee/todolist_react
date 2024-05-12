import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

export default function App() {
    return (
        <div className='w-screen h-screen bg-slate-100 flex justify-center  '>
            <div className='max-w-[1200px] min-w-[800px] bg-pink-100 '>
                <Header />
                <TodoList />
            </div>
        </div>
    );
}
