import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    showAlertMessage?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

export const Content = styled.div`
    margin: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
`

export const WrapperInput = styled.div``

export const WrapperButton = styled.div`
    align-self: center;
    width: 200px;
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