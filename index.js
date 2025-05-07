"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Weight_1 = require("./Weight");
const Answer_1 = require("./Answer");
const Exam_1 = require("./Exam");
const pesos = new Weight_1.Weight([2, 2, 2, 2, 2]);
const gabarito = new Answer_1.Answer("Gabarito", ['a', 'b', 'a', 'c', 'd']);
const prova = new Exam_1.Exam(gabarito, pesos);
const aluno1 = new Answer_1.Answer("Aluno 1", ['a', 'b', 'b', 'b', 'b']); // acerta 2 questõe
const aluno2 = new Answer_1.Answer("Aluno 2", ['a', 'b', 'a', 'c', 'd']); // acerta todas
const aluno3 = new Answer_1.Answer("Aluno 2", ['a', 'b', 'c', 'c', 'd']);
prova.add(aluno1);
prova.add(aluno2);
prova.add(aluno3);
console.log("Média:", prova.avg());
console.log("Notas menores que 6:", prova.lt(6));
console.log("Notas maiores que 6:", prova.gt(6));
console.log("Menor nota:", prova.min());
console.log("Maior nota:", prova.max());
