import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    showInstallmentsInfo?: boolean
    showAlertMessage?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
`

export const WrapperRegister = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    padding: 30px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const WrapperButton = styled.div`
    display: flex;
    width: 450px;
    justify-self: center;
    align-self: center;
`

export const WrapperSelect = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 20px 0px;
`

export const DataInputs = styled.div<ContainerProps>`
    gap: 10px;
    display: flex;
    flex-direction: column;
`

export const DataInputInstallment = styled.div<ContainerProps>`
    visibility: ${({ showInstallmentsInfo }) => showInstallmentsInfo ? 'visible' : 'hidden'};
    gap: 10px;
`

export const WrapperIcon = styled.div`
    padding: 15px 0px;
    color: var(--color-cinza1);
    gap: 15px;
    align-items: center;
    justify-self: center;
    display: grid;
    grid-template-columns: auto 100px 1fr;
`

export const Icon = styled(FontAwesomeIcon)`
    padding: 15px 0px;
    font-size: 26px;
    &:hover {
        font-size: 28px;
        color: var(--color-preto2);
        cursor: pointer;
    }
`

export const WrapperAlertBox = styled.div<ContainerProps>`
    visibility: ${({ showAlertMessage }) => (showAlertMessage ? 'visible' : 'hidden')};
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

export const AlertMessage = styled.span`
`

export const IconItem = styled(FontAwesomeIcon)`
    font-size: 28px;
    color: var(--color-verde-exlusivo);
    `