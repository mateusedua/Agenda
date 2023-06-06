import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    min-height: 65px;
    border-bottom: 2px solid #BCBCBC;
    display: flex;
    justify-content: space-between;
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

export const Text = styled.span`
    color: black;
    font-size: 25px;
    font-weight: bold;
    margin-left: 10px;
`