// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    const toArr = s.split(' ');
    var total = 0;
    for (let i = 0; i < toArr.length; i++) {
        if (toArr[i] === 'Z') {
            total -= +toArr[i - 1];
        } else {
            total += +toArr[i];
        }
    }
    return total;
}

function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if (target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}