import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
    showMenu: boolean
}

export const Icon = styled(FontAwesomeIcon)`
    text-align: center;
    color: #d4d4d4;
    font-size: 30px;
`

export const Container = styled.div<ContainerProps>`
    display: flex;
    width: ${({ showMenu }) => (showMenu ? 200 : 60)}px;
    flex-direction: column;
    background-color: #190526;
    height: 100vh;
    font-size: 20px;
    position: relative;
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
export const WrapperLi = styled.div`
    display: grid;
    grid-template: 50px auto;
    height: auto;
    li {
        border-radius: 10px;
        padding: 10px;
        list-style: none;
        transition: 0.5s;
        &:hover {
            background: #3d1259;
        }
    }
`
