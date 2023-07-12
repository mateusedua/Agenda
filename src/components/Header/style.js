import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 1rem;
    border-bottom: 2px solid #BCBCBC;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #5CA4EA;
    border: none;
    border-radius:5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover{
        background-color: #83B7E5;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
`

export const DropDown = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
    
`

export const ItemDown = styled.div`
    position: absolute;
    background-color: white;
    width: 130px;
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 5px;
`
export const Sair = styled.span`
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }
`

export const LinkHeader = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: ${props => props.size ? props.size : null};
    &:hover{
        text-decoration: underline;
    }
`