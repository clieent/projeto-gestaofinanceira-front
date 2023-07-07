import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '../../config/api/api'
import * as S from './styles'
import { SetStateAction, useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import ItemList from './components/ItemList'
import DefaultToggle from '../defaultToggle'
import SelectBox from '../selectBox'

interface IConsultListByDate {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: boolean
    user_id: string
    category_id: {
        _id: string
        title: string
    }
    createdAt: Date
    updatedAt: Date
    __v: number
}

type categoryType = {
    title: string
    _id: string
}[]

type ConsultListByDateProps = {}

export default function ConsultListByDate({}: ConsultListByDateProps) {
    const userId = useStore((value) => value.userId)
    const [cashFlow, setCashFlow] = useState<IConsultListByDate[]>()

    const [atualDate, setAtualDate] = useState({ date: '', maskDate: '' })

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
    }

    useEffect(() => {
        getCashFlow()
    }, [userId])

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

    const [showOnlyOutputs, setshowOnlyOutputs] = useState(false)
    const [showOnlyInputs, setShowOnlyInputs] = useState(false)

    function showItems(
        item: IConsultListByDate,
        index: number,
        itemDate: Date
    ) {
        return atualDate.maskDate ==
            itemDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }) ? (
            <ItemList item={item} key={index} />
        ) : null
    }

    const [releaseData, setReleaseData] = useState<IConsultListByDate>()
    let [selectCategory, setSelectCategory] = useState<categoryType>([])

    useEffect(() => {
        console.log(releaseData)
    }, [releaseData])

    useEffect(() => {
        loadDate()
        setReleaseData((date: any) => ({
            ...date,
            user_id: userId,
        }))
    }, [])

    async function loadDate() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectCategory(data)
    }

    return (
        <S.Container>
            <S.Header>
                <S.WrapperDateGroup>
                    <S.WrapperIcon>
                        <S.Icon
                            onClick={handlePrevMonth}
                            icon={light('arrow-alt-circle-left')}
                        />
                    </S.WrapperIcon>
                    <S.MonthTitle>
                        {atualDate.maskDate.toUpperCase()}
                    </S.MonthTitle>
                    <S.WrapperIcon>
                        <S.Icon
                            onClick={handleNextMonth}
                            icon={light('arrow-alt-circle-right')}
                        />
                    </S.WrapperIcon>
                </S.WrapperDateGroup>
                <S.WrapperBalanceFilter>
                    <DefaultToggle
                        setState={setShowOnlyInputs}
                        ctaToggle={'Entradas'}
                        status={showOnlyInputs}
                    />
                    <DefaultToggle
                        setState={setshowOnlyOutputs}
                        ctaToggle={'Saídas'}
                        status={showOnlyOutputs}
                    />
                </S.WrapperBalanceFilter>

                <S.WrapperSelect>
                    <SelectBox
                        name="Categoria"
                        id="category_id"
                        value={releaseData?.category_id}
                        setState={setReleaseData}
                        values={selectCategory.map(({ title, _id }) => ({
                            value: _id,
                            label: title,
                        }))}
                    />
                </S.WrapperSelect>
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

                    return (showOnlyInputs == false &&
                        showOnlyOutputs == false) ||
                        (showOnlyInputs == true && showOnlyOutputs == true)
                        ? showItems(item, index, itemDate)
                        : showOnlyInputs == true && item.type == false
                        ? showItems(item, index, itemDate)
                        : showOnlyOutputs == true && item.type == true
                        ? showItems(item, index, itemDate)
                        : null
                })}
            </S.List>
        </S.Container>
    )
}
