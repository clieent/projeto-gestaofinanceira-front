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
        color: var(--color-cinza1);
        font-size: 20px;
    }
    `

export const TypeColor = styled.div<TypeColorProps>`
    width: 10px;
    height: 50px;
    background-color: ${({value}) => (value ? 'var(--color-vermelho-exclusivo)' : 'var(--color-verde-exclusivo)')};
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
    color: var(--color-branco1);
    text-transform: uppercase;
    padding-right: 30px;
    padding-left: 20px;
    `

export const Item = styled.div`
    width: 100%;
    padding-left: 50px;
    background-color: var(--color-preto5);
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    position: relative;
    text-align: left;
    align-items: center;
    `

