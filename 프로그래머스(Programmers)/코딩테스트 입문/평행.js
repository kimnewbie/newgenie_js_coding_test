// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
    if (getInclination(dots[0], dots[1]) === getInclination(dots[2], dots[3]))
        return 1;
    if (getInclination(dots[0], dots[2]) === getInclination(dots[1], dots[3]))
        return 1;
    if (getInclination(dots[0], dots[3]) === getInclination(dots[1], dots[2]))
        return 1;
    return 0;
}

function getInclination([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1);
}


// 기울기 구하기
const getInclination = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);
const compare = (x1, y1, x2, y2) => getInclination(x1, y1) === getInclination(x2, y2);
const solution = ([x1, y1, x2, y2]) => (compare(x1, y1, x2, y2) || compare(x1, x2, y1, y2) || compare(x1, y2, y1, x2)) * 1