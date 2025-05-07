import { Weight } from './Weight';
import { Answer } from './Answer';
import { Exam } from './Exam';

const pesos = new Weight([2, 2, 2, 2, 2]);
const gabarito = new Answer("Gabarito", ['a', 'b', 'a', 'c', 'd']);

const prova = new Exam(gabarito, pesos);

const aluno1Teste = new Answer("Aluno 1", ['a', 'b', 'b', 'b', 'b']);
const aluno2Teste = new Answer("Aluno 2", ['a', 'b', 'a', 'c', 'd']); 
const aluno3Teste = new Answer("Aluno 2", ['a', 'b', 'c', 'c', 'd']);

prova.add(aluno1Teste);
prova.add(aluno2Teste);
prova.add(aluno3Teste);

console.log("Média:", prova.avg());
console.log("Notas menores que 6:", prova.lt(6));
console.log("Notas maiores que 6:", prova.gt(6));
console.log("Menor nota:", prova.min());
console.log("Maior nota:", prova.max());