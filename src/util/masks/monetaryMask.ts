export default function monetaryMask(money: number | string) {
    const symbolMoney = 'R$'
    const symbolDecimal = ','
  
    if (money === undefined || money === null || money === '') {
        return ''
    }

    return `${symbolMoney}${String(money).replace(/\D/g, '')
        .replace(/(\d+)(\d{2})$/, (_, reais, centavos) =>
            `${reais.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}${symbolDecimal}${centavos}`
        )}`
}