import React, { FC, useState } from 'react';

type Props =　{
    addTodo: (value: string) => void;
}

const Form: FC<Props> = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }):void => {
        e.preventDefault()
        addTodo(value)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={e => setValue(e.target.value)}
                />
        </form>
    )
}

export default Form;
