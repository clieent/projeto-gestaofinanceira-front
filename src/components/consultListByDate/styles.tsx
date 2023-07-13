import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    //background-color: black;
    background-color: var(--color-a);
    width: 100%;
    `

export const Header = styled.div`
    background-color: var(--color-a);
    //background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    padding: 0 20px;
    `

export const WrapperBalanceFilter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const WrapperIcon = styled.div`
    color: #ccc;
    font-size: 25px;
    
    `

export const Icon = styled(FontAwesomeIcon)`
    `

export const WrapperDateGroup = styled.div`
    display: flex;
    width: 300px;
`

export const WrapperSelect = styled.div`
    display: flex;
    width: 300px;
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
    //background-color: #0a0b0d;
    background-color: var(--color-a);
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
