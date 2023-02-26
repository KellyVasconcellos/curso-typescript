//import {ConcessionariaDao} from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'

import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import { Dao } from "./Dao";
import Pessoa from "./Pessoa";

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let carro = new Carro('veloster', 4)
let listcarro = new Array<Carro>
listcarro.push(carro)

let concessionaria = new Concessionaria('AV. DONA BLANDINA', listcarro);
//let pessoa: Pessoa = new Pessoa("", "");

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();

dao3.inserir(concessionaria);
dao3.selecionarTodos()
