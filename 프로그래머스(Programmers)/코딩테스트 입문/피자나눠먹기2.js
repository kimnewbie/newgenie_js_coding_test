// https://school.programmers.co.kr/learn/courses/30/lessons/120815

const solution = (n) => {
    let slices = 6;

    while (true) {
        if (slices % n === 0) {
            break;
        }
        slices += 6;
    }

    return slices / 6;
}

function solution(n) {
    const slices = 6;

    // gcd 최대 공약수
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    // lcm 최소 공배수
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return lcm(n, slices) / 6
}