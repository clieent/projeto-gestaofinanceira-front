import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--color-preto1);
    width: 100%;
    `

export const Header = styled.div`
    background-color: var(--color-preto1);
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
    color: var(--color-branco1);
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
    color: var(--color-branco1);
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
`

export const List = styled.div`
    background-color: var(--color-preto2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
`

export const WrapperTitles = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-left: 160px;
    text-align: left;
    position: relative;
    h3 {
        color: var(--color-branco1);
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
    }
`
