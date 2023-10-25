import { useEffect, useRef, useState } from 'react'
import MainLayout from '../../src/layouts/mainLayout'
import * as S from '../../styles/categories'
import DefaultButton from '@/src/components/defaultButton'
import api from '@/src/config/api/api'
import useStore from '../../src/zustand/store'
import { light, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import CreateCategories from '../../src/components/createCategories'

type categoryType = {
    title: string
    _id: string
}[]

interface ICategories {
    title: string
}

export default function Categories() {
    const { userId } = useStore()
    const [selectCategory, setSelectCategory] = useState<categoryType>([])
    const [create, setCreate] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean[]>([])
    const [trash, setTrash] = useState<boolean[]>([])
    const [update, setUpdate] = useState<ICategories>()
    const [refresh, setRefresh] = useState<boolean>(false)
    const inputRefs = useRef<(HTMLInputElement | any)[any]>([])
    const [showAlertMessage, setShowAlertMessage] = useState(false)
    const [timer, setTimer] = useState(4)

    async function loadDateCategories() {
        await api
            .get<categoryType>('/categories', {
                params: { userId },
            })
            .then((response) => {
                setSelectCategory(response.data)
                setArray(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleClickButton = () => {
        setCreate(!create)
    }

    useEffect(() => {
        loadDateCategories()
    }, [])

    function setArray(data: any) {
        setTrash(new Array(data.length).fill(false))
        setEdit(new Array(data.length).fill(false))
    }

    const handleOnChange = (e: { target: any }) => {
        const { value }: string | any = e.target
        setUpdate((prev: any) => ({
            ...prev,
            title: value,
        }))
    }

    useEffect(() => {
        if (showAlertMessage) {
            const closeMessageTimer = setTimeout(() => {
                setShowAlertMessage(false)
            }, 4000)

            const intervalTimer = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)

            if (timer == 0) {
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

    const handleClickPatch = (id: string, index: number) => {
        api.patch(`/categories/${id}`, update)
            .then((reponse) => {
                loadDateCategories()
                edit[index] = false
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
    }, [update])

    const handleClickEdit = (index: number) => {
        let arrayEditCopy = [...edit]
        arrayEditCopy = arrayEditCopy.map((boolean, i) =>
            index === i ? !boolean : false
        )

        if (inputRefs.current[index]) {
            inputRefs.current[index].focus()
        }
        setEdit(arrayEditCopy)
    }

    function handleClickTrash(index: number) {
        let arrayTrashCopy = [...trash]
        arrayTrashCopy.map((boolean, i) => {
            if (index === i) {
                arrayTrashCopy[i] = !boolean
            } else {
                arrayTrashCopy[i] = false
            }
        })
        setTrash(arrayTrashCopy)
    }

    useEffect(() => {
        if (refresh) {
            loadDateCategories()
            setRefresh(false)
        }
    }, [refresh])

    function handleClickDelete(id: string) {
        api.delete(`/categories/${id}`)
            .then((reponse) => {
                loadDateCategories()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.Container>
            <S.Header>
                <h3>Lista de categorias</h3>
            </S.Header>

            <S.WrapperCategories>
                <S.WrapperButton create={create ?? false}>
                    <DefaultButton
                        onClick={handleClickButton}
                        ctaButton={'Nova Categoria'}
                    />
                </S.WrapperButton>
                <CreateCategories
                    create={create}
                    setRefresh={setRefresh}
                    setCreate={setCreate}
                    setShowToast={setShowAlertMessage}
                />
            </S.WrapperCategories>
            <S.WrapperList>
                <h3>Categorias Criadas:</h3>
                {selectCategory.map(({ title, _id }, index) => (
                    <S.Content key={_id}>
                        <S.Input
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            id={_id}
                            placeholder={title}
                            value={inputRefs.current.value}
                            onFocus={() => handleClickEdit(index)}
                            onBlur={() => handleClickPatch(_id, index)}
                            onChange={(e) => handleOnChange(e)}
                        />

                        <S.WrapperIcon>
                            {trash[index] ? (
                                <>
                                    <S.Icon
                                        icon={light('check')}
                                        onClick={() => handleClickDelete(_id)}
                                    />{' '}
                                    <S.Icon
                                        icon={light('xmark')}
                                        onClick={() => handleClickTrash(index)}
                                    />{' '}
                                </>
                            ) : edit[index] ? (
                                <>
                                    <S.Icon
                                        icon={light('check')}
                                        onClick={() =>
                                            handleClickPatch(_id, index)
                                        }
                                    />{' '}
                                    <S.Icon
                                        icon={light('xmark')}
                                        onClick={() => handleClickTrash(index)}
                                    />{' '}
                                </>
                            ) : (
                                <>
                                    <S.Icon
                                        icon={light('pencil')}
                                        onClick={() => handleClickEdit(index)}
                                    />

                                    <S.Icon
                                        icon={light('trash')}
                                        onClick={() => {
                                            handleClickTrash(index)
                                        }}
                                    />
                                </>
                            )}
                        </S.WrapperIcon>
                    </S.Content>
                ))}
            </S.WrapperList>
            <S.WrapperAlertBox showAlertMessage={showAlertMessage}>
                <S.IconItem
                    icon={solid('circle-check')}
                    style={{ color: '#00cb62' }}
                />
                <S.AlertMessage>
                    Categoria cadastrada com <strong>SUCESSO</strong>
                </S.AlertMessage>
            </S.WrapperAlertBox>
        </S.Container>
    )
}

Categories.getLayout = function GetLayout(page: any) {
    return <MainLayout pageLayout={'CATEGORIAS'}>{page}</MainLayout>
}
