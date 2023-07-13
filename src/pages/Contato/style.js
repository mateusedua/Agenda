import { styled } from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 140px);
    min-height: 600px;
`

export const Form = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 1012px){
        width: 80%;
    }

    @media screen and (max-width: 768px){
         width: 90%;
    }
    
    @media screen and (max-width:480px){
        width: 90%;
    }
`

export const Input = styled.input`
    width: 100%;
    background-color: white;
    height: 60px;
    font-size: 2.2rem;
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
    word-break: ${props => props.quebra === true ? 'break-all' : null};
`

export const Select = styled.select`
    height: 60px;
    text-indent: 7px;
    font-size: 2.2rem;
    background-color: white;
    border: ${props => props.validateSelect ? '2px solid red' : 'none'};
    border-radius: 5px;

`

export const Button = styled.button`
    width: 100%;
    height: 60px;
    font-size: 2.2rem;
    border: none;
    background-color: #5CA4EA;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #4fa0ef;
    }
`
