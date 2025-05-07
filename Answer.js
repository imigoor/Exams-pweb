"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
class Answer {
    constructor(name, responses) {
        this.name = name;
        this.responses = responses;
    }
    get() {
        return this.responses;
    }
}
exports.Answer = Answer;
