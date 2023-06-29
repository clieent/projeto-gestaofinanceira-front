import { useState } from 'react'
import * as S from './styles'

interface IConsultListByDate {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: boolean
    user_id: string
    category_id: string
    createdAt: Date
    updatedAt: Date
    __v: number
}

type ItemListProps = {
    item: IConsultListByDate
}

export default function ItemList({ item }: ItemListProps) {

    const date = item.createdAt.toString().split('T')[0]
    const currentDay = date.split('-')[2]


    return (
        <S.Container>
            <S.Day>Dia<span>{currentDay}</span></S.Day>
            <S.Item>

            <S.TypeColor value={item?.type} />
            <S.WrapperData>
                <h3>Nome</h3>
                <span>{item.title}</span>
            </S.WrapperData>
            <S.WrapperData>
                <h3>Descrição</h3>
                <span>{!item.description || item.description == '' ? '"Sem descrição..."' : item.description}</span>
            </S.WrapperData>
            <S.WrapperData>
                <h3>Categoria</h3>
                <span>{item.category_id}</span>
            </S.WrapperData>
            <S.WrapperData>
                <h3>Data de Val.</h3>
                <span>{item.dueDate}</span>
            </S.WrapperData>
            <S.WrapperData>
                <h3>Valor</h3>
                <span>{item.value}</span>
            </S.WrapperData>
            </S.Item>
        </S.Container>
    )
}
