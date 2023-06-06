import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    width: 60%;
    height: 40%;
    display: flex;
    align-items: end;
    flex-direction: column;
    border-bottom: 3px solid #BCBCBC;
    margin-bottom: 30px;
`

export const SectionInputSelect = styled.section`
    width: 100%;
    display: flex;
    align-items: end;
    height: 50%;
`

export const SectionButtonHeader = styled.section`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`
export const Button = styled.button`
    width: 200px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: #5CA4EA;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #E5E5E5;
    border: 2px solid #5CA4EA;
    border-radius:5px;
    cursor: pointer;

    &:hover{
        color: white;
        background-color: #5CA4EA;
    }
   
`

export const Input = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 20px;
    font-size: 20px;
    text-indent: 15px;
    background-color: white;
    border: none;

    &:focus{
        outline: none;
    }
`

export const Main = styled.div`
    height: 100%;
    width: 60%;
    overflow-y: scroll;
    margin-bottom: 10px;
`