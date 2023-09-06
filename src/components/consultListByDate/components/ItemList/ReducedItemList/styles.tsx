import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    style?: string | any
    value?: boolean
    paid?: boolean
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 5px 15px 5px 0px;
    margin: 10px 0px;
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
`

export const WrapperData = styled.div`
    h4 {
        padding-bottom: 5px;
        color: var(--color-cinza2);
    }
`

export const Item = styled.div`
    height: 75px;
    width: 100%;
    background-color: var(--color-preto3);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    align-items: center;
    justify-items: center;
`

export const WrapperButton = styled.div`
    button {
        background-color: transparent !important;
        width: 100px;
        border: 2px solid var(--color-verde-escuro2);
        &:hover {
            color: var(--color-branco2);
        }
    }
`
