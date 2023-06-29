import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    width: 100%;
`

export const Header = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const WrapperIcon = styled.div`
    color: #ccc;

`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;

`

export const MonthTitle = styled.p`
    color: #CCC;
    font-weight: 700;
    font-size: 20px;
`

export const List = styled.div`
    background-color: #0a0b0d;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`
