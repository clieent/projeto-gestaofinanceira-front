import { light, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '../../config/api/api'
import * as S from './styles'
import { SetStateAction, useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import ItemList from './components/ItemList'
import DefaultToggle from '../defaultToggle'
import SelectBox from '../selectBox'
import { release } from 'os'

interface ICashFlow {
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
    paid: boolean
}

interface IReleaseData {
    categoryId: string
}

type categoryType = {
    title: string
    _id: string
}[]

type ConsultListByDateProps = {}

export default function ConsultListByDate({}: ConsultListByDateProps) {
    const userId = useStore((value) => value.userId)
    const [cashFlow, setCashFlow] = useState<ICashFlow[]>()
    const [releaseData, setReleaseData] = useState<IReleaseData>({
        categoryId: ''
    })
    const [selectCategory, setSelectCategory] = useState('')
    const [selectAllCategories, setSelectAllCategories] =
        useState<categoryType>([])
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
    
    const [showInputsOutputs, setShowInputsOutputs] = useState(false)

    const [showPaids, setShowPaids] = useState(false)
    const [showUnpaids, setShowUnpaids] = useState(false)

    function showItems(item: ICashFlow, index: number, itemDate: Date) {
        return atualDate.maskDate ==
            itemDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }) ? (
            <ItemList item={item} key={index} />
        ) : null
    }

    useEffect(() => {
        loadDate()
    }, [])

    async function loadDate() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectAllCategories(data)
        
    }

    const [searchCashFlow, setSearchCashFlow] = useState<Partial<ICashFlow>>({})

    function filterCashFlows(item: ICashFlow) {
            if(!item.type == showInputsOutputs) return
            if(releaseData.categoryId === 'Todos' || releaseData.categoryId === '') return item
            
            if(([releaseData.categoryId].includes(item.category_id._id))) return item.category_id._id

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

                {/* <S.WrapperBalanceFilter>
                    <DefaultToggle
                        setState={setShowInputsOutputs}
                        ctaToggle={showInputsOutputs ? 'Entradas' : 'Saídas'}
                    />
                </S.WrapperBalanceFilter> */}

                <S.WrapperBalanceFilter>
                    <DefaultToggle
                        setState={setShowPaids}
                        ctaToggle={'Pagos'}
                        status={showPaids}
                    />

                    <DefaultToggle
                        setState={setShowUnpaids}
                        ctaToggle={'Não Pagos'}
                        status={showUnpaids}
                    />
                </S.WrapperBalanceFilter>

                <S.WrapperSelect>
                    <SelectBox
                        title_name="Tipo"
                        id="type"
                        value={searchCashFlow.type}
                        setState={setSearchCashFlow}
                        values={[
                            { value: 'Todas', label: 'Todas' },
                            { value: false, label: 'Entradas' },
                            { value: true, label: 'Saídas' },
                        ]}
                    />
                </S.WrapperSelect>

                <S.WrapperSelect>
                    <SelectBox
                        title_name="Categoria"
                        id="categoryId"
                        value={releaseData.categoryId}
                        setState={setReleaseData}
                        values={[
                            { value: 'Todos', label: 'Todos' },
                            ...selectAllCategories.map(({ title, _id }) => ({
                                value: _id,
                                label: title,
                            })),
                        ]}
                        filterAction={setSearchCashFlow}
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


                {cashFlow
                    ?.filter((item) => filterCashFlows(item))
                    .map((item, index) => {
                        const date = item.dueDate.split('/')
                        const currentMonth = date[1]
                        const currentYear = date[2]
                        const itemDate = new Date(
                            `${currentYear} ${currentMonth}`
                        )
                        return showItems(item, index, itemDate)
                    })}
                
                
            </S.List>
        </S.Container>
    )
}
