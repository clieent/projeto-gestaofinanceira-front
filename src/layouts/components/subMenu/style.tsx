import styled from 'styled-components'

type ContainerProps = {
    showSubMenu: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: var(--color-preto3);
    width: ${({ showSubMenu }) => (showSubMenu ? 200 : 0)}px;
    height: 100vh;
    position: absolute;
    left: 100%;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition-duration: 400ms;
    ul {
        display: ${({ showSubMenu }) => (showSubMenu ? 'flex' : 'none')};
    }
    `
export const OptionsList = styled.ul`
    padding: 5px;
    color: var(--color-branco2);
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
        border-radius: 5px;
        padding: 10px 25px;
        list-style: none;
        &:hover {
            background: var(--color-verde-escuro2);
            cursor: pointer;
        }
    }
`
