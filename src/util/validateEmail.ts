function ValidateEmail(email: string) {
    const emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/)
    return emailRegex.test(email)
}
export default ValidateEmail
