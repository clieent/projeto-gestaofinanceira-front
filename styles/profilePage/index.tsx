import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

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
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
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
