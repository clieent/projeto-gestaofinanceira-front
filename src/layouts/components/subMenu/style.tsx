import styled from 'styled-components'

type ContainerProps = {
    showSubMenu: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: #190526;
    width: ${({ showSubMenu }) => (showSubMenu ? 200 : 0)}px;
    height: calc(100vh - 60px);
    top: 60px;
    position: absolute;
    left: 100%;
    z-index: 9999;
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
    color: #d4d4d4;
    flex-direction: column;
    gap: 5px;
    li {
        border-radius: 4px;
        border: solid 1.5px;
        padding: 10px 5px;
        list-style: none;
        transition: background 0.5s;
        &:hover {
            background: #3d1259;
            cursor: pointer;
        }
    }
`
