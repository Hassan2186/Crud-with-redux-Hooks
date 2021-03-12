import React, {useState} from 'react'
import {addTodo} from '../redux/Actions'
import {useDispatch} from 'react-redux'
import {Container, Input, Button, FormList, Title} from './todoInputStyle.js'


function TodoInput() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    return (
        <Container>
            <Title>Add Some Text</Title>
            <FormList className='form-list'>
                <Input type="text" value= {name} onChange={(e)=>setName(e.target.value)}/>
                <Button onClick={()=>{dispatch(addTodo(name));setName('')}}>Add</Button>
            </FormList>
        </Container>
    )
}

export default TodoInput
