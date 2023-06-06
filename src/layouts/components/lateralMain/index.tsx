import React from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'

type LateralMenuProps = {}

export default function LateralMenu({}: LateralMenuProps) {
    const router = useRouter()
    return (
        <S.Container>
            <ul className="ul-geral">
                <S.Li>
                    <S.TagA>
                        <S.Icon icon={light('house')} />
                        <span onClick={() => router.push('/home')}>Início</span>
                    </S.TagA>
                </S.Li>
                <S.Li>
                    <div>
                        <S.TagA>
                            <S.Icon icon={light('cash-register')} />
                            <span>Caixa </span>
                        </S.TagA>
                        <S.Icon icon={light('chevron-down')} />
                    </div>
                    <ul className="sub-menu">
                        <S.Li>
                            <S.TagA className="a-sub">
                                <span onClick={() => router.push('/cashFlow')}>
                                    Caixa
                                </span>
                            </S.TagA>
                        </S.Li>
                        <S.Li>
                            <S.TagA className="a-sub">
                                <span onClick={() => router.push('/cashCheck')}>
                                    Consulta
                                </span>
                            </S.TagA>
                        </S.Li>
                    </ul>
                </S.Li>
                <S.Li>
                    <div>
                        <S.TagA>
                            <S.Icon icon={light('rectangle-list')} />
                            <span>Categorias</span>
                        </S.TagA>
                        <S.Icon icon={light('chevron-down')} />
                    </div>
                    <ul className="sub-menu">
                        <S.Li>
                            <S.TagA className="a-sub">
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
                        </S.Li>
                        <S.Li>
                            <S.TagA className="a-sub">
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
                        </S.Li>
                    </ul>
                </S.Li>
                <S.Li>
                    <S.TagA></S.TagA>
                </S.Li>
            </ul>
        </S.Container>
    )
}
