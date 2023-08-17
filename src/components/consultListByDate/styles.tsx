import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type ContainerProps = {
    showButton?: boolean
    showAlertMessage?: boolean
}

export const Container = styled.div`
    background-color: var(--color-preto1);
    width: 100%;
    `

export const Header = styled.div`
    background-color: var(--color-preto1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    `

export const WrapperIcon = styled.div`
    color: var(--color-branco1);
    font-size: 25px;
    &:hover{
        cursor: pointer;
        color: var(--color-cinza1);
        font-size: 27px;
    }
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
    padding: 0px 15px 50px 0px;
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

export const WrapperButton = styled.div<ContainerProps>`
    visibility: ${({ showButton }) => (showButton ? 'visible' : 'hidden')};
    height: ${({ showButton }) => (showButton ? 'auto' : '0px')};
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 0px 350px;
    margin-bottom: ${({ showButton }) => (showButton ? '10px' : '0px')};
`

export const WrapperAlertBox = styled.div<ContainerProps>`
    visibility: ${({ showAlertMessage }) => (showAlertMessage ? 'visible' : 'hidden')};;
    height: ${({ showAlertMessage }) => (showAlertMessage ? 'auto' : '0px')};
    text-align: center;
    justify-content: center;
    font-weight: 500;
    font-size: 26px;
    gap: 30px;
    display: flex;
    border: ${({ showAlertMessage }) => (showAlertMessage ? '3px solid' : 'none')};
    border-radius: 10px;
    color: var(--color-branco1);
    border-color: var(--color-verde-exclusivo);
    margin: 0px auto;
    padding: ${({ showAlertMessage }) => (showAlertMessage ? '15px 80px' : '0px')};
    `

export const AlertMessage = styled.span`
`

export const IconItem = styled(FontAwesomeIcon)<ContainerProps>`
    font-size: 28px;
    color: var(--color-verde-exlusivo);
    `