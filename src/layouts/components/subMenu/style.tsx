import styled from 'styled-components'

type ContainerProps = {
    showSubMenu: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: var(--color-a-plus);
    //background-color: #030105f8;
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
    ul {
        display: ${({ showSubMenu }) => (showSubMenu ? 'flex' : 'none')};
    }
`
export const OptionsList = styled.ul`
    padding: 5px;
    color: var(--color-f-plus);
    //color: #d4d4d4;
    flex-direction: column;
    gap: 5px;
    li {
        border-radius: 4px;
        /* border: solid 1.5px #381152; */
        padding: 10px 5px;
        list-style: none;
        transition: 0.5s;
        &:hover {
            background: var(--color-e);
            //background: #3d1259;
            cursor: pointer;
        }
    }
`
