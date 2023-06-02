import React from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faRectangleList,
    faChevronDown,
    faCashRegister,
} from '@fortawesome/free-solid-svg-icons'

type LateralMenuProps = {}

export default function LateralMenu({}: LateralMenuProps) {
    const router = useRouter()
    return (
        <S.Container>
            <ul className="ul-geral">
                <li>
                    <S.TagA>
                        <FontAwesomeIcon className="i" icon={faHome} />
                        <span onClick={() => router.push('/home')}>Início</span>
                    </S.TagA>
                </li>
                <li>
                    <div>
                        <S.TagA>
                            <FontAwesomeIcon
                                className="i"
                                icon={faCashRegister}
                            />
                            <span>Caixa </span>
                        </S.TagA>
                        <FontAwesomeIcon className="i" icon={faChevronDown} />
                    </div>
                    <ul className="sub-menu">
                        <li>
                            <S.TagA>
                                <span onClick={() => router.push('/cashFlow')}>
                                    Caixa
                                </span>
                            </S.TagA>
                        </li>
                    </ul>
                </li>
                <li>
                    <div>
                        <S.TagA>
                            <FontAwesomeIcon
                                className="i"
                                icon={faRectangleList}
                            />
                            <span>Categorias</span>
                        </S.TagA>
                        <FontAwesomeIcon className="i" icon={faChevronDown} />
                    </div>
                    <ul className="sub-menu">
                        <li>
                            <S.TagA>
                                <span
                                    onClick={() =>
                                        router.push(
                                            '/categories/createCategories'
                                        )
                                    }
                                >
                                    Cadastrar Categoria
                                </span>
                            </S.TagA>
                        </li>
                        <li>
                            <S.TagA>
                                <span
                                    onClick={() =>
                                        router.push(
                                            '/categories/deleteCategories'
                                        )
                                    }
                                >
                                    Deletar Categoria
                                </span>
                            </S.TagA>
                        </li>
                    </ul>
                </li>
                <li>
                    <S.TagA></S.TagA>
                </li>
            </ul>
        </S.Container>
    )
}
