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
    transition-duration: 500ms;

    `

export const OptionsList = styled.ul<ContainerProps>`
    padding: 5px;
    color: var(--color-branco2);
    display: flex;
    flex-direction: column;
    gap: 5px;
    visibility: ${({ showSubMenu }) => (showSubMenu ? 'visible' : 'hidden')};
    transition-delay: 250ms;
    opacity: ${({ showSubMenu }) => (showSubMenu ? '1' : '0')};
    transition-property: ${({ showSubMenu }) => (showSubMenu ? 'all' : 'none')};
    li {
        display: ${({ showSubMenu }) => (showSubMenu ? 'block' : 'none')};
        border-radius: 5px;
        padding: 10px 25px;
        list-style: none;
        white-space: nowrap;
        &:hover {
            background: var(--color-verde-escuro2);
            cursor: pointer;
        }
    }
`