export default function monetaryMask(money: number | string) {
    const symbolDecimal = ','
  
    if (money === undefined || money === null || money === '') {
        return ''
    }

    return `${String(money).replace(/\D/g, '')
        .replace(/(\d+)(\d{2})$/, (_, reais, centavos) =>
            `${reais.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}${symbolDecimal}${centavos}`
        )}`
}