import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 140px);
    min-height: 700px;
`

export const Header = styled.div`
    width: 60%;
    height: 30%;
    min-height: 160px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-bottom: 3px solid #BCBCBC;
    margin-bottom: 30px;
    gap: 20px;
    
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

export const Button = styled.button`
    padding: 1.7rem;
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
    padding: 1.8rem;
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
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    overflow-y: scroll;

    @media screen and (max-width: 1012px){
        width: 80%;
    }

    @media screen and (max-width:480px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
         width: 90%;
    }
`