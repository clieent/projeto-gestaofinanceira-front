import styled from 'styled-components'


type TypeColorProps = {
    value: boolean
}


export const Container = styled.div`
    display: grid;
    height: 60px;
    grid-template-columns: 100px 1fr;
`
export const WrapperData = styled.div`
    span {
        color: #fff;
        font-size: 20px;
    }
    `

export const TypeColor = styled.div<TypeColorProps>`
    width: 10px;
    height: 50px;
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
    font-weight: 600;
    font-size: 20px;
    color: #ccc;
    text-transform: uppercase;
    padding-right: 30px;
    padding-left: 20px;
    `

export const Item = styled.div`
    width: 100%;
    background-color: #1c2026;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    //padding-left: 50px;
    position: relative;
    text-align: center;
    align-items: center;
    `

