export default function phoneMask(phone: any) {
    return phone?.slice(0, 14)
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1})/, '($1)$2')
        .replace(/(\d{4})(\d{4})$/, '$1-$2')

}

