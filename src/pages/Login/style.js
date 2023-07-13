import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Form = styled.div`
    width: 40%;
    display: flex;  
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 1012px){
        width: 60%;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }

    @media screen and (max-width:480px){
        width: 90%;
    }
`

export const Input = styled.input`
    padding: 2.5rem;
    background-color: white;
    font-size: 20px;
    border-radius: 5px; 
    border: ${props => props.validateErrors ? '2px solid red' : 'none'};

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    padding: 2.5rem;
    font-size: 20px;
    border: none;
    background-color: #5CA4EA;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #4fa0ef;
    }
`
export const Text = styled.span`
    font-size: ${props => props.size ? props.size : 'none'};
    color: ${props => props.color ? props.color : 'none'};
    font-weight: ${props => props.weigth ? props.weigth : 'none'};
`