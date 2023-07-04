import * as S from './styles'

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

type ItemListProps = {
    item: IConsultListByDate
}

export default function ItemList({ item }: ItemListProps) {

    const date = item.createdAt.toString().split('T')[0]
    const currentDay = date.split('-')[2]



    return (
        <S.Container>
            <S.Day><span>{currentDay}</span></S.Day>
            <S.Item>
            <S.TypeColor value={item?.type} />
            <S.WrapperData>
                <span>{item.title}</span>
            </S.WrapperData>
            <S.WrapperData>
                <span>{!item.description || item.description == '' ? '"Sem descrição..."' : item.description.substring(0,20)}</span>
            </S.WrapperData>
            <S.WrapperData>
                <span>{item.category_id.title}</span>
            </S.WrapperData>
            <S.WrapperData>
                <span>{item.dueDate}</span>
            </S.WrapperData>
            <S.WrapperData>
                <span>{item.value}</span>
            </S.WrapperData>
            </S.Item>
        </S.Container>
    )
}
