import { Weight } from './Weight';
import { Answer } from './Answer';

export class Exam {
  private weight: Weight;
  private answer: Answer;
  private exams: Answer[] = [];

  constructor(answer: Answer, weight: Weight) {
    this.answer = answer;
    this.weight = weight;
  }

  add(exam: Answer): void {
    this.exams.push(exam);
  }

  private grade(exam: Answer): number {
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

  avg(): number {
    const total = this.exams.reduce((sum, exam) => sum + this.grade(exam), 0);
    return this.exams.length ? total / this.exams.length : 0;
  }

  min(count: number = 1): number[] {
    const scores = this.getScores();
    return scores.sort((a, b) => a - b).slice(0, count);
  }

  max(count: number = 1): number[] {
    const scores = this.getScores();
    return scores.sort((a, b) => b - a).slice(0, count);
  }

  lt(limit: number): number[] {
    return this.getScores().filter(score => score < limit);
  }

  gt(limit: number): number[] {
    return this.getScores().filter(score => score > limit);
  }

  private getScores(): number[] {
    return this.exams.map(exam => this.grade(exam));
  }
}