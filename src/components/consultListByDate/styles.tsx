import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    showButton?: boolean
    showAlertMessage?: boolean
}

export const Container = styled.div`
    background-color: var(--color-preto1);
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    
    `

export const Header = styled.div`
    //background-color: var(--color-verde-exclusivo);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding: 15px 20px;
    `

export const WrapperIcon = styled.div`
    color: var(--color-branco1);
    font-size: 25px;
    &:hover {
        cursor: pointer;
        color: var(--color-cinza1);
        font-size: 27px;
    }
    `

export const Icon = styled(FontAwesomeIcon)``

export const WrapperDateGroup = styled.div`
    display: flex;
    width: 300px;
`

export const WrapperSelect = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;
    `

export const Selects = styled.div`

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
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: var(--color-preto2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0px 15px 50px 0px;
`

export const WrapperTitles = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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
    visibility: ${({ showAlertMessage }) =>
        showAlertMessage ? 'visible' : 'hidden'};
    height: auto;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    gap: 30px;
    display: flex;
    border: 3px solid;
    border-radius: 10px;
    color: var(--color-branco1);
    border-color: var(--color-verde-exclusivo);
    margin: 0px auto;
    position: absolute;
    bottom: 30px;
    padding: 15px;
    z-index: 1;
    background-color: var(--color-preto2);
    align-items: center;
    right: 30px;
    /* animation: slideIn 1s ease forwards;

    @keyframes slideIn {
        from {
          right: -100px;
        }
        to {
          right: 30px;
        }
      } */
`

export const AlertMessage = styled.span``

export const IconItem = styled(FontAwesomeIcon)`
    font-size: 28px;
    color: var(--color-verde-exlusivo);
`
