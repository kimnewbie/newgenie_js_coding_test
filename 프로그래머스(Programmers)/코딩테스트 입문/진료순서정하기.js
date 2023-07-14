// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map(v => sorted.indexOf(v) + 1);
}

function solution(emergency) {
    const len = emergency.length;
    const order = Array(len).fill(1);

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (emergency[i] < emergency[j]) order[i] = order[i] + 1;
            else order[j] = order[j] + 1;
        }
    }
    return order;
}