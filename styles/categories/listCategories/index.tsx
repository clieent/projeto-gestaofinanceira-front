import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
    gap: 5px;
    width: 100%;
    height: 100%;
`

export const WrapperList = styled.div `
    background-color: red;
    width: 80%;
    margin-left: 10px;
`

export const Content = styled.div `
    background-color: blue;
    display:flex;
    align-items: center;
    flex-direction: row;
    position: relative;
    
`

export const Icon = styled(FontAwesomeIcon)`

`

export const WrapperIcon = styled.div `
   display: flex;
   gap: 8px;
   position: absolute;
   margin-left: 90%;

`

export const Header = styled.div `
    display:grid;
   grid-template-columns: 50% 200px;
`

export const wrapperButton = styled.div``