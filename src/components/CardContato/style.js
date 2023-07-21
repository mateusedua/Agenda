import { styled } from "styled-components";



export const MainCard = styled.div`
    width: 100%;
    background-color: white;
    padding: 1rem;
    display: flex;
    padding: 2.2rem;
    flex-direction: row;
`

export const Section = styled.section`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
`
export const SectionFooterCard = styled.section`
height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const Button = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
`
export const SectionInformationHeader = styled.section`
    width: 100%;
`

export const P = styled.p`
    font-size: ${props => props.size ? props.size : '15px'};
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.weight ? props.weight : 'none'};
    background-color: ${props => props.bg ? props.bg : 'none'};
    padding: ${props => props.pd ? props.pd : 'none'};
    border-radius: ${props => props.br ? props.br : 'none'};
    word-break: ${props => props.quebra === true ? 'break-all' : null};  
`

export const DivCategory = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
`

export const Redirect = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
`