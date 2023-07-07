import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import * as S from './styles'
import { useEffect, useState } from 'react'
import api from '../../config/api/api'
import useStore from '@/src/zustand/store'
import ItemList from './components/ItemList'

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

type ConsultListByDateProps = {}

export default function ConsultListByDate({}: ConsultListByDateProps) {
    const { userId } = useStore()
    const [cashFlow, setCashFlow] = useState<IConsultListByDate[]>()

    const getCashFlow = async () => {
        await api
            .get(`/cashFlows/${userId}/users`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    setCashFlow(response.data)
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [atualDate, setAtualDate] = useState({ date: '', maskDate: '' })

    const initialValue = () => {
        const currentDate = new Date()
        setAtualDate((prev) => ({
            ...prev,
            maskDate: currentDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }),
            date: currentDate.toString(),
        }))
    }

    if (!atualDate.date) {
        initialValue()
        getCashFlow()
    }

    const handlePrevMonth = () => {
        let [year, month] = atualDate.date.split('-')
        let currentDate = new Date(`${year} ${month}`)
        currentDate.setMonth(currentDate.getMonth() - 1)

        setAtualDate((prev) => ({
            ...prev,
            maskDate: currentDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }),
            date: currentDate.toString(),
        }))
    }

    const handleNextMonth = () => {
        let [year, month] = atualDate.date.split('-')
        let currentDate = new Date(`${year} ${month}`)
        currentDate.setMonth(currentDate.getMonth() + 1)

        setAtualDate((prev) => ({
            ...prev,
            maskDate: currentDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }),
            date: currentDate.toString(),
        }))
    }

    return (
        <S.Container>
            <S.Header>
                <S.WrapperIcon>
                    <S.Icon
                        onClick={handlePrevMonth}
                        icon={light('arrow-alt-circle-left')}
                    />
                </S.WrapperIcon>
                <S.MonthTitle>{atualDate.maskDate}</S.MonthTitle>
                <S.WrapperIcon>
                    <S.Icon
                        onClick={handleNextMonth}
                        icon={light('arrow-alt-circle-right')}
                    />
                </S.WrapperIcon>
            </S.Header>
            <S.List>
                {cashFlow?.map((item, index) => {
                    const date = item.dueDate.split('/')
                    const currentMonth = date[1]
                    const currentYear = date[2]
                    const itemDate = new Date(`${currentYear} ${currentMonth}`)

                    return atualDate.maskDate ==
                        itemDate.toLocaleDateString('pt-BR', {
                            month: 'long',
                            year: 'numeric',
                        }) ? (
                        <ItemList item={item} key={index} />
                    ) : null
                })}
            </S.List>
        </S.Container>
    )
}
