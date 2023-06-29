import styled from 'styled-components'


type TypeColorProps = {
    value: boolean
}


export const Container = styled.div`
    height: 115px;
    display: flex;
`
export const WrapperData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    h3 {
        color: #CCC;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;    }
    span {
        color: #fff;
        font-size: 16px;
    }
`

export const TypeColor = styled.div<TypeColorProps>`
    width: 10px;
    height: 105px;
    background-color: ${({value}) => (value ? '#ED525B' : '#57bb1a')};
    position: absolute;
    top: 5px;
    display: flex;
    left: -10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
`
export const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 700;
    font-size: 20px;
    color: #ccc;
    text-transform: uppercase;
    padding-right: 30px;
    padding-left: 20px;
`

export const Item = styled.div`
    background-color: #1c2026;
    width: 100%;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    //grid-template-columns: repeat(5, 1fr);
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`
