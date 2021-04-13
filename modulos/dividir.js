function dividir(a, b) {
    if (a == 0 || b === 0) {
        return console.log('no se puede dividir por 0')
    } else { return a / b }
}

module.exports=dividir