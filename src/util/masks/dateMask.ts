export default function dateMask(data: any) {
    let formattedData = new String(data)
    
    const day = parseInt(formattedData.slice(0, 2))
    const month = parseInt(formattedData.slice(3, 5))

    if (day > 31) {
        formattedData = '31' + formattedData.slice(2);
    }
    if (month > 12) {
        formattedData = formattedData.slice(0, 3) + '12' + formattedData.slice(5)
    }
    if (data === undefined || data === null || data === '') {
        return ''
    }

    return formattedData?.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1')
}