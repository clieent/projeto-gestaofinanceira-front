import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TagA = styled.a`
    text-decoration: none;
    align-items: center;
    display: flex;
`
export const Icon = styled(FontAwesomeIcon)`
    text-align: center;
    color: white;
    font-size: 25px;
    padding: 10px 6px;
`

export const Li = styled.li`
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
    &:hover {
        background-color: #111316;
        cursor: pointer;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #181a1d;
    min-width: auto;
    height: 100vh;
    grid-area: lateralMenu;
    font-size: 20px;
    gap: 5px;

    /* strong {
        color: #c0bbbb;
        background-color: #111316;
        border: #767373 solid 1px;
        padding: 10px;
        &:hover {
            color: #ffffff;
            cursor: pointer;
        }
    } */
    .ul-geral {
        height: 100%;
        padding-top: 15px;
    }

    .i {
        height: 25px;
        min-width: 50px;
        text-align: center;
        line-height: 30px;
        color: white;
        font-size: 20px;
    }

    span {
        font-size: 25px;
        font-weight: 400;
        color: white;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sub-menu {
        padding: 2px 5px 5px 40px;
        margin-top: -5px;
        list-style: none;
        background-color: #15171b;
        /* display: none; */
    }
    .a-sub {
        color: #fff;
        font-size: 15px;
        padding: 5px 0;
    }
`
