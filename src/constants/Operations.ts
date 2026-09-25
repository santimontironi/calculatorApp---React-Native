export const Operations = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '÷'
}

export const calculate: Record<string, (a: number, b: number) => number> = {
    [Operations.add]: (a, b) => a + b,
    [Operations.subtract]: (a, b) => a - b,
    [Operations.multiply]: (a, b) => a * b,
    [Operations.divide]: (a, b) => a / b
}