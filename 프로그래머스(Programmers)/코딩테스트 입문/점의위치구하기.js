// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
    const [x, y] = dot;
    const check = x * y > 0; // +x +y or -x -y
    return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

function solution(dot) {
    const [x, y] = dot;
    return x > 0 ? y > 0 ? 1 : 4 : y < 0 ? 3 : 2;
}