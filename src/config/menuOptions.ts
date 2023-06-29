import SubMenu from '@/src/layouts/components/subMenu'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'

interface IMenuOptions {
    id: string
    title: string
    icon: IconDefinition
    route?: string
    subMenu?: ISubMenu
}

interface ISubMenu {
    options: IOptions[]
    id: string
}

interface IOptions {
    id: string
    title: string
    route: string
}

export const MenuOptions: IMenuOptions[] = [
    {
        id: 'lateral-main-home',
        title: 'Inicio',
        icon: light('house'),
        route: '/home',
    },
    {
        id: 'lateral-main-cash',
        title: 'Fluxo de Caixa',
        icon: light('cash-register'),
        subMenu: {
            id: 'sub-menu-cash',
            options: [
                {
                    id: 'option-sub-menu-new-launch',
                    title: 'Novo Lançamento',
                    route: '/cashFlow',
                },
                {
                    id: 'option-sub-menu-launch',
                    title: 'Lançamentos',
                    route: '/cashCheck',
                },
            ],
        },
    },
    {
        id: 'lateral-main-category',
        title: 'Categorias',
        icon: light('rectangle-history'),
        subMenu: {
            id: 'sub-menu-category',
            options: [
                {
                    id: 'option-sub-menu-create-category',
                    title: 'Criar Categoria',
                    route: '/categories/createCategories',
                },
                {
                    id: 'option-sub-menu-delete-category',
                    title: 'Deletar Categoria',
                    route: '/categories/deleteCategories',
                },
            ],
        },
    },
]
