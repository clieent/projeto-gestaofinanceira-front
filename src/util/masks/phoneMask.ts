export default function phoneMask(phone: string | any) {
    const noMask = phone
        ?.replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{2})(\d)/, '($1)$2')
        .replace(/(\d{5})(\d)/, '$1-$2')

    return noMask
}
