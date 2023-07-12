import { styled } from "styled-components";



export const MainCard = styled.div`
    width: 100%;
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: row;
`

export const Section = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props=> props.justify ? props.justify : 'none'};
    align-items: ${props=>props.items ? props.items : 'none'};
`

export const Button = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
`
export const SectionInformationHeader = styled.section`
    width: 100%;
`

export const P = styled.span`
    font-size: ${props => props.size ? props.size : '15px'};
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.weight ? props.weight : 'none'};
    background-color: ${props => props.bg ? props.bg : 'none'};
    padding: ${props => props.pd ? props.pd : 'none'};
    border-radius: ${props => props.br ? props.br : 'none'};
`

export const DivCategory = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-left: 10px;
`

export const Redirect = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
`