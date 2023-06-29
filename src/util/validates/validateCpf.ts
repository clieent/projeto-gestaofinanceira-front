export default (value: string) => {
    return /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/.test(value)
}
