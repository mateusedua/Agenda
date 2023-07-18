import styled from "styled-components";
import { FaLowVision } from 'react-icons/fa'


export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Header = styled.div`
    span{
        font-size: 2.4rem;
        font-weight: bold;
    }

    p{
        font-size: 2.4rem;
        margin-top: 10px;
    }
`

export const Main = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 7px;
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

export const DivSenha = styled.div`
    position: relative;
    width: 100%;
`

export const IconVision = styled(FaLowVision)`
    position: absolute;
    width: 23px;
    height: 23px;
    margin-top: 20px;
    right: 15px;
    cursor: pointer;
`