import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type TypeColorProps = {
    paid?: boolean
    value?: boolean
    showDetails?: boolean
    checked?: boolean
}

export const Container = styled.div<TypeColorProps>`
    display: grid;
    height: ${({ showDetails }) => (showDetails ? '60px' : '110px')};
    transition-duration: 0.5s;
    grid-template-columns: 100px 1fr;
    overflow: hidden;
    align-items: center;
    place-items: center;
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

export const IconItem = styled(FontAwesomeIcon)<TypeColorProps>`
    font-size: 25px;
    color: var(--color-branco1);
    display: grid;
    
`

export const Item = styled.div<TypeColorProps>`
    height: ${({ showDetails }) => (showDetails ? '60px' : '110px')};
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
    height: ${({ showDetails }) => (showDetails ? '50px' : '90px')};
    background-color: ${({ value }) =>
        value
            ? 'var(--color-verde-exclusivo)'
            : 'var(--color-vermelho-exclusivo)'};
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
    align-items: center;
    justify-content: center;
    flex-direction: row;
    right: 30px;
    position: absolute;
    gap: 30px;
    `

export const Icon = styled(FontAwesomeIcon)<TypeColorProps>`
    &:hover {
        font-size: 28px;
        cursor: pointer;
        color: var(--color-branco1);
    }
`

export const WrapperDataFixed = styled.div`
    padding-left: 10px;
    span {
        color: var(--color-cinza1);
        font-size: 20px;
    }
    `

export const Day = styled.div`
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 3px;
    span {
        color: var(--color-cinza3);
        font-size: 18px;
        padding-top: 20px;
    }
`