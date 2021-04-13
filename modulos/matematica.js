let matematica={
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    mutipliclar: function (a, b) {
        if (a == 0 || b === 0) {
            return console.log('multiplicar por 0 va a dar 0 ')
        } else { return a * b }
    },
    dividir: function (a, b) {
        if (a == 0 || b === 0) {
            return console.log('no se puede dividir por 0')
        } else { return a / b }
    }
}

module.exports=matematica