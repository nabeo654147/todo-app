import React, { FC } from 'react';
import Item from './Item';

type Props = {
    todos: {
        content: string,
        id: string
    }[],
    deleteTodo: (id: string) => void
}

const List :FC<Props> = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return (
                    <Item 
                        content={todo.content}
                        key={index}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                    />
                    )
                })
            }
        </ul>
    )
}

export default List;
