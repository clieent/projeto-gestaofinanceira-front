import { light, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import api from '../../config/api/api'
import * as S from './styles'
import { useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import ItemList from './components/ItemList'
import SelectBox from '../selectBox'
import DefaultButton from '../defaultButton'

interface ICashFlow {
    _id: string
    title: string
    description?: string
    value: string
    dueDate: string
    type: any
    user_id: string
    category_id: {
        _id: string
        title: string
    }
    createdAt: Date
    updatedAt: Date
    __v: number
    paid: any
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
    const [selectAllCategories, setSelectAllCategories] =
        useState<categoryType>([])
    const userId = useStore((value) => value.userId)
    const [cashFlow, setCashFlow] = useState<ICashFlow[]>()
    const [atualDate, setAtualDate] = useState({ date: '', maskDate: '' })
    const [searchCashFlow, setSearchCashFlow] = useState<Partial<ICashFlow>>()
    const [releaseData, setReleaseData] = useState<IReleaseData>({
        categoryId: '',
    })
    const [showInputsOutputs, setShowInputsOutputs] = useState({
        type: 'Todas',
    })
    const [showDebts, setShowDebts] = useState({ paid: 'Todas' })
    const [selectedBoxes, setSelectedBoxes] = useState<string[]>([])
    const [showButton, setShowButton] = useState<boolean>(false)
    const [showAlertMessage, setShowAlertMessage] = useState(false)
    const [timer, setTimer] = useState(4)

    // PEGAR OS LANÇAMENTOS NO cashFlows \/ \/ \/
    const getCashFlow = async () => {
        await api
            .get(`/cashFlows/${userId}/users`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    setCashFlow(response.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCashFlow()
    }, [userId])

    // MÁSCARA DE DATA ATUAL
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

    // MÊS SEGUINTE E MÊS ANTERIOR \/ \/ \/
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

    // RENDERIZAR ITEMS DO COMPONENTE ItemList
    function showItems(item: ICashFlow, index: number, itemDate: Date) {
        return atualDate.maskDate ==
            itemDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
            }) ? (
            <ItemList
                item={item}
                key={index}
                isSelected={selectedBoxes.includes(item._id)}
                setSelectedBoxes={setSelectedBoxes}
                selectedBoxes={selectedBoxes}
            />
        ) : null
    }



    // CARREGAR CATEGORIAS
    async function loadDate() {
        const { data } = await api.get<categoryType>('/categories', {
            params: { userId },
        })
        setSelectAllCategories(data)
    }

    useEffect(() => {
        loadDate()
    }, [])

    
    // FUNÇÕES DE FILTRAGENS
    function filterCashFlows(takeCashflow: Partial<ICashFlow>) {

        if (
            (releaseData.categoryId == 'Todas' ||
                releaseData.categoryId == '') &&
            showInputsOutputs.type == 'Todas' &&
            showDebts.paid == 'Todas'
        )
            return true

        if (showInputsOutputs.type == 'Todas') {
            if (releaseData.categoryId) {
                if (showDebts.paid) {
                    return (
                        takeCashflow.category_id?._id ==
                            releaseData.categoryId && takeCashflow.paid
                    )
                } else if (takeCashflow.paid !== 'Todas') {
                    return (
                        takeCashflow.category_id?._id ==
                            releaseData.categoryId && !takeCashflow.paid
                    )
                }
                return takeCashflow.category_id?._id == releaseData.categoryId
            } else {
                if (releaseData.categoryId == 'Todas') return true
            }
            return true
        }

        if (!showInputsOutputs.type || showInputsOutputs.type) {
            if (
                releaseData.categoryId == 'Todas' ||
                releaseData.categoryId == ''
            ) {
                return takeCashflow.type == showInputsOutputs.type
            } else {
                return (
                    takeCashflow.category_id?._id == releaseData.categoryId &&
                    takeCashflow.type == showInputsOutputs.type
                )
            }
        }

        
        return true
    }

    // QUITAGEM DE ITENS
    useEffect(() => {
        if (selectedBoxes.length > 0) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
        console.log(selectedBoxes)
    }, [selectedBoxes])


    const handleCloseButton = () => {
        setShowButton(false)
        setSelectedBoxes([])
    }

    async function sendToPaid() {
        await api.patch(`cashFlows/${userId}`, selectedBoxes).then((response) => {
            console.log(response)
            setCashFlow([])
            getCashFlow()
            setShowAlertMessage(true)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        if(showAlertMessage) {
            const closeMessageTimer = setTimeout(() => {
                setShowAlertMessage(false)
            }, 4000)
            
            const intervalTimer = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
            
            if(timer == 0) {
                clearInterval(closeMessageTimer)
                clearInterval(intervalTimer)
            }
            
            return () => {
                clearTimeout(closeMessageTimer)
                clearInterval(intervalTimer)
                setTimer(4)
            }
        }
    }, [showAlertMessage])

    console.log(timer)


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

                <S.WrapperSelect>
                    <SelectBox
                        title_name="Status das Dívidas"
                        id="paid"
                        value={searchCashFlow?.paid}
                        setState={setShowDebts}
                        values={[
                            { value: 'Todas', label: 'Todas' },
                            { value: false, label: 'Pagas' },
                            { value: true, label: 'Não Pagas' },
                        ]}
                    />
                </S.WrapperSelect>

                <S.WrapperSelect>
                    <SelectBox
                        title_name="Tipo"
                        id="type"
                        value={searchCashFlow?.type}
                        setState={setShowInputsOutputs}
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
                            { value: 'Todas', label: 'Todas' },
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
                <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                    <S.IconItem
                        icon={solid('circle-check')}
                        style={{color: "#00cb62"}}
                    />
                    <S.AlertMessage>
                        Dívida quitada com <strong>SUCESSO</strong>
                    </S.AlertMessage>
                </S.WrapperAlertBox>

                <S.WrapperButton showButton={showButton}>
                    <DefaultButton
                        onClick={() => {
                            sendToPaid()
                            handleCloseButton()
                            
                        }}
                        ctaButton={'Realizar Pagamento'}
                    />

                    <DefaultButton
                        onClick={() => {
                            handleCloseButton()
                        }}
                        ctaButton={'Cancelar'}
                    />
                </S.WrapperButton>

                <S.WrapperTitles>
                    <h3>Nome</h3>
                    <h3>Descrição</h3>
                    <h3>Categoria</h3>
                    <h3>Data de Val.</h3>
                    <h3>Valor</h3>
                </S.WrapperTitles>

                {cashFlow
                    ?.filter((item: ICashFlow) => filterCashFlows(item))
                    .map((item: ICashFlow, index: number) => {
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
