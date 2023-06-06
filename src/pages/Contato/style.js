import { styled } from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`

export const Input = styled.input`
    width: 100%;
    background-color: white;
    height: 60px;
    font-size: 20px;
    text-indent: 7px;
    border-radius: 5px; 
    border: ${props => props.validateErrors ? '2px solid red' : 'none'};

    &:focus{
        outline: none;
    }
`

export const Text = styled.span`
    font-size: ${props => props.size ? props.size : 'none'};
    color: ${props => props.color ? props.color : 'none'};
    font-weight: ${props => props.weigth ? props.weigth : 'none'};
`

export const Select = styled.select`
    height: 60px;
    text-indent: 7px;
    font-size: 20px;
    background-color: white;
    border: ${props => props.validateSelect ? '2px solid red' : 'none'};
    border-radius: 5px;

`

export const Button = styled.button`
    width: 100%;
    height: 60px;
    font-size: 20px;
    border: none;
    background-color: #5CA4EA;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #4fa0ef;
    }
`
