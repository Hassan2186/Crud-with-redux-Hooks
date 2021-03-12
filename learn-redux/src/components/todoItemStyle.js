import styled from 'styled-components'
export const Container = styled.div`
    background: cornflowerblue;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
    margin-bottom:5px;
    border: 1px solid #333
`
export const EditDelete = styled.div`
    width: 25%;
    margin-right: 0;
    text-align: right;
    display: flex;
`
export const Name = styled.div`
    text-align: center;
    margin: auto;
    width: 70%;
`
export const ItemNumber = styled.div`
    text-align: center;
    margin: auto;
`
export const Button = styled.button`
    padding: 10px 0;
    border: none;
    outline:none;
    appearance: none;
    border: 1px solid #333;
    flex-grow:1;
`

export const ItemText = styled.h4`
    margin: 0;
`
export const Input = styled.input`
    padding: 10px;
    width: 70%;
`
