import React, { FC, useState } from 'react';

type Props = {
    content: string,
    id: string,
    deleteTodo: (id:string) => void
}

const Item: FC<Props> = ({ content, id, deleteTodo }) => {
    const [isDone, setIsDone] = useState<boolean>(false)
    
    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input 
                type='checkbox'
                onChange={() => setIsDone(!isDone)}
            />
            <span 
                style={{textDecoration: isDone? 'line-through' : 'none'}}
            >{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item;
