export default function dateMask(data: any) {
    const cleanedData = data?.slice(0, 10).replace(/\D/g, '')
    let formattedData = new String(cleanedData).replace(/(\d{2})(\d)/, '$1/$2')
    
    const day = parseInt(formattedData.slice(0, 2), 10)
    const month = parseInt(formattedData.slice(3, 5), 10)
    
    if (day > 31) {
        formattedData = '31' + formattedData.slice(2);
    }
    if (month > 12) {
        formattedData = formattedData.slice(0, 3) + '12' + formattedData.slice(5)
    }
    
    if (data === undefined || data === null || data === '') {
        return ''
    }

    return formattedData.replace(/(\d{2})(\d{2})/, '$1/$2')
}