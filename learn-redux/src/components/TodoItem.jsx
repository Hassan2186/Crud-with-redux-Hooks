import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, updateTodo} from '../redux/Actions'
import {Container, EditDelete, Name, ItemNumber, Button, ItemText, Input} from './todoItemStyle.js'
function TodoItem({item,index}) {
    const dispatch = useDispatch();
    const [editable,setEditable] = useState(false);
    const [name,setName]=useState(item.name)
    return (
        <Container>
            <ItemNumber>#{index+1}</ItemNumber>
            <Name>
            {editable? <Input type= 'text' value={name} onChange={(e)=>(setName(e.target.value))}/>:<ItemText>{item.name}</ItemText>}
            </Name>
            <EditDelete>
                {editable? '':<Button onClick={()=> {dispatch(deleteTodo(index))}}>Delete</Button>}
                <Button onClick={()=>{dispatch(updateTodo(name,index)); setEditable(!editable)}}>{editable ?'Update':'Edit'}</Button>
            </EditDelete>
        </Container>
    )
}

export default TodoItem
