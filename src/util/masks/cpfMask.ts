export default function cpfMask(cpf: string | undefined) {
    return cpf
        ?.replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4')
}
