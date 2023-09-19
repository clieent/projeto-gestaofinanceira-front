import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0px;
`

export const Content = styled.div`
    width: 50%;
    padding: 30px;
    border-radius: 8px;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    background-color: var(--color-preto5);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        `

export const WrapperImage = styled.div`
    border: 4px solid var(--color-verde-claro1);
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

export const WrapperInputs = styled.div``

export const WrapperButton = styled.div``
