import styled from 'styled-components'

export const TagA = styled.a`
    text-decoration: none;
    align-items: center;
    display: flex;
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
        background: red;
        height: 100%;
        padding-top: 15px;
    }

    .li {
        position: relative;
        list-style: none;
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
        padding: 6px 6px 14px 60px;
        margin-top: -5px;
        .TagA {
            color: black;
        }
    }
`
