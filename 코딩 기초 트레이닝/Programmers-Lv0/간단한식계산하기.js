// https://school.programmers.co.kr/learn/courses/30/lessons/181865
// eval() 함수는 절대 사용하지말라고 함

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return eval(Number(a) + op + Number(b))
}

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');

    switch (op) {
        case "+":
            return +a + +b;
        case "-":
            return +a - +b;
        case "*":
            return +a * +b;
    }
}
