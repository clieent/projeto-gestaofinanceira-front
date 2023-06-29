function ValidateEmail(email: string) {
    const emailRegex = new RegExp(/^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,}$/)
    if (!emailRegex.test(email)) {
        return false
    }
    return true
}
export default ValidateEmail
