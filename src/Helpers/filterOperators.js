const filterOperators = (str) => {
    let symbol = str.charAt(str.length - 2);
    let lastNumber = str.charAt(str.length - 1);
    const operators = [
        '+',
        '-',
        '*',
        '/',
    ]

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === symbol && !lastNumber) {
            return str.slice(0, -3)
        }
    }
    return str
}

export default filterOperators;