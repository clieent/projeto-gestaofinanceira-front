export default function monetaryMask(money: string) {
    if (money === undefined || money === null || money === '') {
        return ''
    }

    const moneyFormatted = (
        Number(money?.replace(/\D/g, '')) / 100
    ).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return moneyFormatted
}
