import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
    showMenu: boolean
}


export const Icon = styled(FontAwesomeIcon)`
    text-align: center;
    color: var(--color-verde-claro2);
    font-size: 18px;
`
export const Item = styled.li<ContainerProps>`
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: ${({ showMenu }) => (showMenu ? '50px 100%' : '50px')};
    height: 50px;
    list-style: none;
    overflow: hidden;
    transition-duration: 0.5s;
    &:hover {
        background: var(--color-verde-escuro2);
        cursor: pointer;
    }
`

export const Container = styled.div<ContainerProps>`
    display: grid;
    height: 100%;
    width: 100%;
    max-height: 100vh;
    transition-duration: 300ms;
    grid-template-rows: 70px auto;
    * {
        transition-duration: 0.3s;
    }
    
    
`

export const MenuOptionsList = styled.ul`
    padding: 5px;
    color: var(--color-branco2);
`

export const Header = styled.div<ContainerProps>`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
        transition-duration: .7s;
    }
    `

export const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`


export const Title = styled.span<ContainerProps>`
    min-height: 16px;
    line-height: 16px;
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    align-items: center;
    justify-content: flex-start;
    //position: relative;
    overflow: hidden;
    transition-delay: 0.3s;
    
    p {
        align-items: center;
        line-height: 16px;
        position: absolute;
        height: 16px;
    }
`
