import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '../../config/api/api'
import * as S from './styles'
import { SetStateAction, useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import ItemList from './components/ItemList'
import DefaultToggle from '../defaultToggle'

interface IConsultListByDate {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: boolean
    user_id: string
    category_id: {
        "_id": string
        "title": string
    }
    createdAt: Date
    updatedAt: Date
    __v: number
}

type ConsultListByDateProps = {}

export default function ConsultListByDate({}: ConsultListByDateProps) {
    const userId = useStore((value) => value.userId)
    const [cashFlow, setCashFlow] = useState<IConsultListByDate[]>()

    const [showValues, setShowValues] = useState({inputs: false, outputs: false})
    //const [showValues, setShowValues] = useState({inputs: false, outputs: false})

    const getCashFlow = async () => {
        await api
            .get(`/cashFlows/${userId}/users`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    setCashFlow(response.data)
                    console.log(response.data)
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

    if (!atualDate.date && userId) {
        initialValue()
        //getCashFlow()
    }

    useEffect(() => {getCashFlow()}, [userId])

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

    function showItems(item: IConsultListByDate, index: number, itemDate: Date) {
        return atualDate.maskDate ==
            itemDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }) ? (
            <ItemList item={item} key={index} />
        ) : null
    }

    const options = [{name: "Entradas", value: false, id: "input"}, {name: "Saídas", value: true, id: "output"}]

    return (
        <S.Container>
            <S.WrapperBalanceFilter>
                <DefaultToggle 
                    options={options}
                    id="checkboxes-tags-demo"
                    placeholder={'Escolha'}
                    label={'Tipo'}
                    setState={setShowValues}
                    />
            </S.WrapperBalanceFilter>

            <S.Header>
                <S.WrapperIcon>
                    <S.Icon
                        onClick={handlePrevMonth}
                        icon={light('arrow-alt-circle-left')}
                    />
                </S.WrapperIcon>
                <S.MonthTitle>{atualDate.maskDate.toUpperCase()}</S.MonthTitle>
                <S.WrapperIcon>
                    <S.Icon
                        onClick={handleNextMonth}
                        icon={light('arrow-alt-circle-right')}
                    />
                </S.WrapperIcon>

            </S.Header>
            <S.List>
                <S.WrapperTitles>
                        <h3>Nome</h3>
                        <h3>Descrição</h3>
                        <h3>Categoria</h3>
                        <h3>Data de Val.</h3>
                        <h3>Valor</h3>
                </S.WrapperTitles>
                {cashFlow?.map((item, index) => {
                    const date = item.dueDate.split('/')
                    const currentMonth = date[1]
                    const currentYear = date[2]
                    const itemDate = new Date(`${currentYear} ${currentMonth}`)
                    
                    //return showItems(item, index, itemDate)


                    return (showValues.inputs == false && showValues.outputs == false) || (showValues.inputs == true && showValues.outputs == true)
                    ? showItems(item, index, itemDate)
                    : (showValues.inputs == true && item.type == false)

                    ? showItems(item, index, itemDate)
                    : (showValues.outputs == true && item.type == true)

                    ? showItems(item, index, itemDate)
                    : null

                    })}
            </S.List>
        </S.Container>
    )
}
