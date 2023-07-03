import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
    showMenu: boolean
}

export const Icon = styled(FontAwesomeIcon)`
    text-align: center;
    color: #d4d4d4;
    font-size: 18px;
`
export const Item = styled.li`
    border-radius: 10px;
    display: grid;
    grid-template-columns: 50px auto;
    height: 50px;
    min-width: 50px;
    max-width: 200px;
    list-style: none;
    transition-duration: 1500ms;
    overflow: hidden;
    &:hover {
        background: #3d1259;
    }
`

export const Container = styled.div<ContainerProps>`
    display: grid;
    height: 100%;
    width: 100%;
    max-height: 100vh;
    transition-duration: 500ms;
    grid-template-rows: 70px auto;
    ${Item} {
        width: ${({ showMenu }) => (showMenu ? '190px' : '50px')};
    }
    .title {
        width: ${({ showMenu }) => (showMenu ? 140 : 0)}px !important;
    }
`

export const MenuOptionsList = styled.ul`
    padding: 5px;
    color: #d4d4d4;
    &:hover {
        cursor: pointer;
    }
`

export const Header = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const Title = styled.span`
    min-height: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    transition-duration: 500ms;

    p {
        min-width: 140px;
        display: flex;
        align-items: center;
        width: 140px;
        line-height: 16px;
        position: absolute;
        height: 16px;
    }
`
