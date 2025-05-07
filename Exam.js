"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
class Exam {
    constructor(answer, weight) {
        this.exams = [];
        this.answer = answer;
        this.weight = weight;
    }
    add(exam) {
        this.exams.push(exam);
    }
    grade(exam) {
        const correct = this.answer.get();
        const given = exam.get();
        const weights = this.weight.get();
        let score = 0;
        for (let i = 0; i < correct.length; i++) {
            if (correct[i] === given[i]) {
                score += weights[i];
            }
        }
        return score;
    }
    avg() {
        const total = this.exams.reduce((sum, exam) => sum + this.grade(exam), 0);
        return this.exams.length ? total / this.exams.length : 0;
    }
    min(count = 1) {
        const scores = this.getScores();
        return scores.sort((a, b) => a - b).slice(0, count);
    }
    max(count = 1) {
        const scores = this.getScores();
        return scores.sort((a, b) => b - a).slice(0, count);
    }
    lt(limit) {
        return this.getScores().filter(score => score < limit);
    }
    gt(limit) {
        return this.getScores().filter(score => score > limit);
    }
    getScores() {
        return this.exams.map(exam => this.grade(exam));
    }
}
exports.Exam = Exam;
