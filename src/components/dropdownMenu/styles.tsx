import styled from 'styled-components'

export const Content = styled.div<{ showOptions: boolean }>`
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: ${({ showOptions }) => (showOptions ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    margin-top: 60px;
    width: 110px;
    `

export const Container = styled.div`
    height: 60px;
    position: relative;
    display: grid;
    padding: 0px 20px;
    border-radius: 10px;
    &:hover {
        background: var(--color-verde-escuro2);
        cursor: pointer;
    }
    `

export const DropMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;

    color: white;
    font-size: 16px;
    border-color: transparent;
    cursor: pointer;

    border: 3px solid var(--color-verde-escuro2);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    `

export const Item = styled.a`
    color: black;
    padding: 10px 14px;
    text-decoration: none;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }
`
