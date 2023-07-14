// https://school.programmers.co.kr/learn/courses/30/lessons/120907


function solution(quiz) {
    return quiz.map(t => {
        const [calc, result] = t.split(' = '); // 식과 답을 나눔
        const sign = calc.includes('+') ? 1 : -1 // + 면 1, - 면 -1을 리턴
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

function solution(quiz) {
    const arr = [];
    var answer = 0;
    for (let i = 0; i < quiz.length; i++) {
        const s = quiz[i].split(' ');
        if (s[1] === '-') answer = +s[0] - +s[2];
        else answer = +s[0] + +s[2];
        arr.push(answer === +s[4] ? 'O' : 'X')
    }
    return arr;
} 