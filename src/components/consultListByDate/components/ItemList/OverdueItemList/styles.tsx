import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    style?: string | any
    value?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 5px 5px;
    margin: 15px 0px;
    background-color: var(--color-preto2);
    span {
        color: var(--color-cinza1);
        font-size: 20px;
    }
`

export const IconItem = styled(FontAwesomeIcon)<ContainerProps>`
    font-size: 25px;
    color: var(--color-branco1);
    margin: 20px;
    justify-self: center;
`

export const WrapperData = styled.div`
    h4 {
        padding-bottom: 5px;
        color: var(--color-cinza2);
    }`

export const Item = styled.div`
    height: 80px;
    background-color: var(--color-preto3);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    align-items: center;
    justify-items: center;
    padding: 0px 10px;
    margin: 5px;
    `

export const WrapperButton = styled.div`
    button {
        width: 100px;
        background-color: transparent !important;
        border: 2px solid var(--color-verde-escuro2);
        &:hover{
            color: var(--color-branco2);

        }
    }
`
