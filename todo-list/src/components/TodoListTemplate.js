import React from 'react';
import './TodoListTemplate.css';

const ToListTemplate = ({palette, form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 축구명단
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>

            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default ToListTemplate;