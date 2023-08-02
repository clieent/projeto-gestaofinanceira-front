import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type TypeColorProps = {
    value?: boolean
    showDetails?: boolean
}

export const Container = styled.div<TypeColorProps>`
    display: grid;
    height: ${({ showDetails }) => (showDetails ? '60px' : '90px')};
    transition-duration: 0.5s;
    grid-template-columns: 100px 1fr;
    overflow: hidden;
`
export const WrapperData = styled.div<TypeColorProps>`
    max-height: 90px;
    padding: 10px 0px 10px 15px;
    overflow-y: ${({ showDetails }) => (showDetails ? 'hidden' : 'auto')};
    span {
        color: var(--color-cinza1);
        font-size: 20px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--color-preto3);
        border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-preto1);
    }
`

export const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 20px;
    color: var(--color-branco1);
    text-transform: uppercase;
    padding-right: 30px;
    padding-left: 20px;
`

export const Item = styled.div<TypeColorProps>`
    height: ${({ showDetails }) => (showDetails ? '60px' : '90px')};
    padding: 5px 0px 5px 40px;
    width: 100%;
    background-color: var(--color-preto5);
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    position: relative;
    text-align: left;
    align-items: center;
    transition-duration: 0.5s;
`

export const TypeColor = styled.div<TypeColorProps>`
    width: 10px;
    transition-duration: 0.5s;
    height: ${({ showDetails }) => (showDetails ? '50px' : '80px')};
    background-color: ${({ value }) =>
        value
            ? 'var(--color-vermelho-exclusivo)'
            : 'var(--color-verde-exclusivo)'};
    position: absolute;
    display: flex;
    left: -10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
`

export const WrapperIcon = styled.div`
    display: flex;
    color: var(--color-cinza1);
    font-size: 25px;
    position: absolute;
    right: 50px;
    &:hover {
        cursor: pointer;
        color: var(--color-branco1);
    }
`

export const Icon = styled(FontAwesomeIcon)``

export const WrapperDataFixed = styled.div`
    padding-left: 15px;
    span {
        color: var(--color-cinza1);
        font-size: 20px;
    }
`
