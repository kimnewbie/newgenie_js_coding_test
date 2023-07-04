// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function get_gcd(a, b) {
    return b === 0 ? a : get_gcd(b, a % b);
}

function solution(number1, denom1, number2, denom2) {
    let denom = denom1 * denom2;
    let number = number1 * denom2 + number2 * denom1;
    let gcd = get_gcd(number, denom);

    // 최대 공약수로 분자와 분모를 나누기
    number /= gcd;
    denom /= gcd;

    return [number, denom];
}