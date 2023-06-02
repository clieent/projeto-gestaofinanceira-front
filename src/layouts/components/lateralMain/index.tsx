import React from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCoffee,
    faHome,
    faRectangleList,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

type LateralMenuProps = {}

export default function LateralMenu({}: LateralMenuProps) {
    const router = useRouter()
    return (
        <S.Container>
            <ul>
                <li>
                    <a href="#">
                        <span onClick={() => router.push('/home')}>Início</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span onClick={() => router.push('/cashFlow')}>
                            Caixa
                        </span>
                    </a>
                </li>
                <li>
                    <div>
                        <a href="#">
                            <span>Categorias</span>
                        </a>
                    </div>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">
                                <span
                                    onClick={() =>
                                        router.push(
                                            '/categories/createCategories'
                                        )
                                    }
                                >
                                    Cadastrar Categoria
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span
                                    onClick={() =>
                                        router.push(
                                            '/categories/deleteCategories'
                                        )
                                    }
                                >
                                    Deletar Categoria
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"></a>
                </li>
            </ul>
        </S.Container>
    )
}
