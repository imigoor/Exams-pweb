import { Weight } from './Weight';
import { Answer } from './Answer';
import { Exam } from './Exam';

const pesos = new Weight([2, 2, 2, 2, 2]);
const gabarito = new Answer("Gabarito", ['a', 'b', 'a', 'c', 'd']);

const prova = new Exam(gabarito, pesos);

const aluno1 = new Answer("Aluno 1", ['a', 'b', 'b', 'b', 'b']); // acerta 2 questõe
const aluno2 = new Answer("Aluno 2", ['a', 'b', 'a', 'c', 'd']); // acerta todas
const aluno3 = new Answer("Aluno 2", ['a', 'b', 'c', 'c', 'd']);

prova.add(aluno1);
prova.add(aluno2);
prova.add(aluno3);

console.log("Média:", prova.avg());
console.log("Notas menores que 6:", prova.lt(6));
console.log("Notas maiores que 6:", prova.gt(6));
console.log("Menor nota:", prova.min());
console.log("Maior nota:", prova.max());