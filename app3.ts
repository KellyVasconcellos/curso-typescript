import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('veloster', 4)
carro.acelerar()

let moto = new Moto()
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

let listcarro = new Array<Carro>
listcarro.push(carro)
let concessionaria2 = new Concessionaria('AV. DONA BLANDINA', listcarro)

concessionaria2.mostrarListaDeCarros().forEach(item => {
  console.log(item)
})
console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosDeFuncionamento())
