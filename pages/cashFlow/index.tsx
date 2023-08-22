import React, { useEffect, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/cashFlow'
import InputText from '../../src/components/inputText'
import SelectBox from '../../src/components/selectBox'
import DefaultButton from '@/src/components/defaultButton'
import api from '../../src/config/api/api'
import useStore from '../../src/zustand/store'
import dateMask from '@/src/util/masks/dateMask'
import monetaryMask from '@/src/util/masks/monetaryMask'
import { useRouter } from 'next/router'
import { light, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface releaseDataProps {
    title: string
    dueDate: string
    category_id: string
    description?: string
    value: any
    type: boolean
    user_id: string
    paid: boolean
    parcel?: number | null
}

type categoryType = {
    title: string
    _id: string
}[]

export default function CashFlow() {
    const [releaseData, setReleaseData] = useState<releaseDataProps>()
    const { userId } = useStore()
    const [selectCategory, setSelectCategory] = useState<categoryType>([])
    const [showParcels, setShowParcels] = useState(false)
    const [checkUncheck, setCheckUncheck] = useState(false)
    const [originalValue, setOriginalValue] = useState('');

    const handleCalculateParcel = () => {
        const valueInNumber = releaseData?.value
        const calculateParcel = valueInNumber / (releaseData?.parcel ?? 1)
        setReleaseData((prev: any) => ({ ...prev, value: calculateParcel }))

        console.log(calculateParcel)
        return calculateParcel
    }

    const router = useRouter()
    const handleClick = (e: any) => {
        e.preventDefault()
        api.post('/cashFlows', releaseData)
            .then((data) => {
                console.log(data)
                router.push('/cashCheck')
            })
            .catch((error) => {
                console.log(error)
            })
    }
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

    const handleShowInput = () => {
        setShowParcels((prev) => !prev)
        setCheckUncheck((prev) => !prev)
        if(!showParcels) {
            setReleaseData((prev: any) => ({
                ...prev,
                parcel: ''
            }))
        }
    }

    // FUNÇÃO DE PARCELAMENTO

    
    

    return (
        <S.Container>
            <h1>Caixa</h1>
            <S.WrapperRegister>
                <S.WrapperSelect>
                    <SelectBox
                        title_name="Categoria"
                        id="category_id"
                        value={releaseData?.category_id}
                        setState={setReleaseData}
                        values={selectCategory.map(({ title, _id }) => ({
                            value: _id,
                            label: title,
                        }))}
                    />

                    <SelectBox
                        title_name="Tipo"
                        id="type"
                        value={releaseData?.type}
                        setState={setReleaseData}
                        values={[
                            { value: true, label: 'Saída' },
                            { value: false, label: 'Entrada' },
                        ]}
                    />
                </S.WrapperSelect>
                <S.DataInputs>
                    <InputText
                        placeholder={'Título'}
                        value={releaseData?.title}
                        setState={setReleaseData}
                        id="title"
                        label="Título"
                    />
                    <InputText
                        placeholder={'Descrição'}
                        value={releaseData?.description}
                        setState={setReleaseData}
                        id="description"
                        label="Descrição"
                    />
                    <InputText
                        placeholder={'Data de vencimento'}
                        value={dateMask(releaseData?.dueDate)}
                        setState={setReleaseData}
                        id="dueDate"
                        label="Data de vencimento"
                    />
                    <InputText
                        placeholder={'R$0,00'}
                        value={releaseData?.value}
                        setState={setReleaseData}
                        id="value"
                        label="Valor"
                    />
                </S.DataInputs>

                <S.WrapperIcon>
                    <S.Icon
                        icon={
                            checkUncheck
                                ? light('square-check')
                                : light('square')
                        }
                        onClick={() => {
                            handleShowInput()
                        }}
                    />
                    <h4>PARCELAR</h4>

                    <S.DataInputParcel showParcelsInfo={showParcels}>
                        <InputText
                            placeholder={'Quantidade'}
                            value={releaseData?.parcel}
                            setState={setReleaseData}
                            id="parcel"
                            label="Quantas vezes"
                            type={'number'}
                        />
                    </S.DataInputParcel>
                </S.WrapperIcon>
                <S.WrapperButton>
                    <DefaultButton
                        onClick={handleCalculateParcel}
                        ctaButton={'Lançar'}
                    />
                </S.WrapperButton>
            </S.WrapperRegister>
        </S.Container>
    )
}

CashFlow.getLayout = function GetLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
