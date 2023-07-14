// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
    const arr = my_string.split(' ');
    while (arr.length > 1) {
        arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    }
    return arr[0];
}

function solution(my_string) {
    const arr = [];
    var sign = 1; // 기본값은 양수

    for (let val of my_string.split(' ')) {
        if (val === '+') sign = 1;
        else if (val === '-') sign = -1;
        else arr.push(val * sign);
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
}