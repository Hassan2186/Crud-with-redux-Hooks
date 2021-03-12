import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
function TodoList() {
    const items = useSelector(state => state);
    if(items.length!==0){
        return (
            <div>
                {items.map((item,index) => {
                    return(
                        <TodoItem key={index} item={item} index={index}></TodoItem>
                    )
                })}
            </div>
        )
    }else{
        return (
            <h2>There Is No Items</h2>
        )
    }
}

export default TodoList
