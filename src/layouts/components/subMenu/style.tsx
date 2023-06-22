import styled from 'styled-components'

type ContainerProps = {
    showSubMenu: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: red;
    width: ${({ showSubMenu }) => (showSubMenu ? 200 : 0)}px;
    height: calc(100vh - 70px);
    position: absolute;
    top: 70px;
    left: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    transition-duration: 500ms;

    ul {
        display: ${({ showSubMenu }) => (showSubMenu ? 'flex' : 'none')};
    }
`
export const OptionsList = styled.ul`
    padding: 5px;

    flex-direction: column;
    gap: 5px;
    li {
        border-radius: 4px;
        border: solid 1px black;
        padding: 10px 5px;
        list-style: none;
        &:hover {
            cursor: pointer;
        }
    }
`
