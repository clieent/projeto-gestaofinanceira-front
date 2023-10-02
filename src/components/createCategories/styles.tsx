import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    create?: boolean
    showAlertMessage?: boolean

}

export const Container = styled.div<ContainerProps>`
    width: 450px;
    display: ${({ create }) => (create ? 'flex' : 'none')};
    flex-direction: column;
`

export const DataInputs = styled.div`
    `

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    `
export const Content = styled.div<ContainerProps>`
    display: grid;
    gap: 10px;

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
    `

    export const AlertMessage = styled.span``

export const IconItem = styled(FontAwesomeIcon)`
    font-size: 28px;
    margin-left: 15px;
    color: var(--color-verde-exlusivo);
`
