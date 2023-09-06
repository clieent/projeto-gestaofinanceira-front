import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type ContainerProps = {
    create: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    gap: 15px;
    h3 {
        color: var(--color-branco1);
    }
`

export const Header = styled.div`
    font-size: 20px;
    text-align: center;
    padding-top: 25px;
`

export const WrapperBanks = styled.div`
    display: grid;
    justify-content: center;
`

export const WrapperButton = styled.div<ContainerProps>`
    display: flex;
    visibility: ${({ create }) => (create ? 'hidden' : 'visible')};
    height: ${({ create }) => (create ? '0px' : 'auto')};
    width: 450px;
`

export const WrapperList = styled.div`
    text-align: center;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 0px 20px 20px;
    background-color: var(--color-preto2);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    h3 {
        padding: 10px;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 95% 0px;
    align-items: center;
    padding-top: 10px;
`

export const Input = styled.input`
    color: var(--color-branco2);
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background-color: var(--color-preto5);
    border: hidden;
    font-size: 20px;
    font-weight: 500;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        background-color: var(--color-preto3);
    }
`

export const WrapperIcon = styled.div`
    display: flex;
    gap: 10px;
    padding-left: 15px;
`

export const Icon = styled(FontAwesomeIcon)`
    color: var(--color-branco2);
    &:hover {
        cursor: pointer;
        color: var(--color-cinza1);
    }
`
