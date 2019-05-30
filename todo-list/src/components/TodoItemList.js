import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    // 리렌더링 할 지 말지 정해주는 사이클메소드. 따로 구현되지 않으면 언제나 true를 반환
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        // todos: todo 객체들이 들어있는 배열
        // onToggle: 체크박스를 키고 끄는 함수
        // onRemove: 아이템을 삭제시키는 함수 
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;