export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const addTodo = (item) => {
    return {
        type:ADD_TODO,
        item
    }
}
export const deleteTodo = (itemId) => {
    return {
        type:DELETE_TODO,
        itemId
    }
}
export const updateTodo = (item,id) => {
    return {
        type:UPDATE_TODO,
        item,
        id
    }
}