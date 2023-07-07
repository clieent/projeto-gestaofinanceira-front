import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    width: 100%;
`
export const WrapperBalanceFilter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 25px;
    padding: 10px 0 0;

`

export const Header = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 35px;
    `

export const WrapperIcon = styled.div`
    color: #ccc;
    
    `

export const Icon = styled(FontAwesomeIcon)`
    font-size: 25px;
    `


export const MonthTitle = styled.p`
    color: #CCC;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
`

export const List = styled.div`
    background-color: #0a0b0d;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
`

export const WrapperTitles = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-left: 100px;
    text-align: center;
    position: relative;
    h3 {
        color: #CCC;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
    }
`