// https://school.programmers.co.kr/learn/courses/30/lessons/120878

// Greatest Common Divisor 최대 공약수
const getGcd = (denominator, numerator) => {
    if (numerator === 0) return denominator;
    return getGcd(numerator, denominator % numerator)
}

// 소인수 분해
const getPrimeFactorization = (num) => {
    const factors = [];
    let i = 2;

    while (num >= 2) {
        if (num % i === 0) {
            factors.push(i);
            num /= i;
        } else {
            i++;
        }
    }
    return factors;
}

function solution(a, b) {
    const gcd = getGcd(a, b);
    const reduced = b / gcd;
    return getPrimeFactorization(reduced).every(val => [2, 5].includes(val)) ? 1 : 2;
}