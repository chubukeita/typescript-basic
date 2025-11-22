"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getResultMessage = (name, score) => {
    if (score >= 60) {
        return `${name}さんは合格です。`;
    }
    else {
        return `${name}さんは不合格です。`;
    }
};
const studentA = {
    name: "侍太郎",
    score: 70,
};
let resultMessage = getResultMessage(studentA.name, studentA.score);
console.log(resultMessage);
