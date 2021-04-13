const suma=require('./modulos/sumar');
const resta=require('./modulos/restar')
const multiplicar=require('./modulos/multiplicar')
const dividir=require('./modulos/dividir')
const matematica=require('./modulos/matematica')

console.log(suma(2,4));
console.log(resta(2,4))
console.log(multiplicar(2,0))
console.log(dividir(2,0))


console.log(matematica.suma(2,4))
console.log(matematica.resta(2, 4))
console.log(matematica.mutipliclar(2, 0))
console.log(matematica.dividir(2, 0))