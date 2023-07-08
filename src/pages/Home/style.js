import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    width: 50%;
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
    margin-top: 20px;
    margin-bottom: 20px;
`

export const SectionButtonHeader = styled.section`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
`
export const Button = styled.button`
    padding: 16px;
    font-size: ${({ theme }) => theme.size_desktop};
    font-weight: bold;
    color: #5CA4EA;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #E5E5E5;
    border: 2px solid #5CA4EA;
    border-radius:5px;

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
    overflow-y: scroll;
    width: 50%;
    margin-bottom: 10px;
     
`