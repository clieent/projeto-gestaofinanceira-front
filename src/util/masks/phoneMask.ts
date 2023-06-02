export default function phoneMask(phone: any) {

    return phone?.slice(0, 15).replace(/\D/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1)$2$3-$4')
}