import { nanoid } from 'nanoid';
import React, { FC, useState } from 'react';
import Form from './Form';
import List from './List';

type Props = {
    content: string,
    id: string
}[]

const App: FC = () => {
    const [todos, setTodos] = useState<Props>([])

    const addTodo = (content: string) => {
        setTodos([
            ...todos,
            {
                content: content,
                id: nanoid()
            }
        ])
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>こんにちは、今日もいい天気ですね</h1>
            <Form addTodo={addTodo} />
            <List 
                todos={todos} 
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default App;
