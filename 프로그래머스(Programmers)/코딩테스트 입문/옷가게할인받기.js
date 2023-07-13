// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
    return price >= 500000 ? Math.floor(price * 0.80)
        : price >= 300000 ? Math.floor(price * 0.90)
            : price >= 100000 ? Math.floor(price * 0.95)
                : price
}