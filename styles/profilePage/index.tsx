import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    showAlertMessage?: boolean
    style?: any
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 30px;
    border-radius: 8px;
    background-color: var(--color-preto5);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const ContentInputs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export const WrapperImage = styled.div`
    display: flex;
    border: 4px solid var(--color-verde-claro1);
    justify-self: center;
    align-self: center;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    font-size: 20px;
    border-radius: 50%;
    margin-bottom: 20px;
    position: relative;
`

export const WrapperIcon = styled.label``

export const Icon = styled(FontAwesomeIcon)`
    color: var(--color-cinza1);
    position: absolute;
    font-size: 30px;
    right: -25px;
    bottom: -3px;
    cursor: pointer;

    &:hover {
        color: var(--color-cinza2);
    }
`

export const PreviewImage = styled.div`
    align-self: center;
    justify-content: center;
    display: flex;
    img{
        border-radius: 50%;
    }
`

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5px 0px;
    h2 {
        text-align: center;
        color: var(--color-cinza1);
    }
`

export const Input = styled.input`
    color: var(--color-branco2);
    padding-left: 10px;
    height: 50px;
    background-color: var(--color-preto2);
    border: hidden;
    font-size: 18px;
    font-weight: 500;
    &:focus {
        outline: none;
    }
`

export const WrapperButton = styled.div`
    display: flex;
    width: 450px;
    justify-self: center;
    align-self: center;
    padding: 35px 0px 25px;
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

export const AlertMessage = styled.div``

export const IconItem = styled(FontAwesomeIcon)<ContainerProps>`
    font-size: 25px;
    color: var(--color-branco1);
    margin-left: 15px;
`