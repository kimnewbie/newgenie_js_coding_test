// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
    return rank.map((_, i) => i)
        .filter((v) => attendance[v])
        .sort((a, b) => rank[a] - rank[b])
        .slice(0, 3)
        .reduce((acc, cur) => acc * 100 + cur, 0)
}