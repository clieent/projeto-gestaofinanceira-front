export default function phoneMask(phone: string | undefined) {

    return phone?.replace(/\D/g, '').slice(0, 11).replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
}