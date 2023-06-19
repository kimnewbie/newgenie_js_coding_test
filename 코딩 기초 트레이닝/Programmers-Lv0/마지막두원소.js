// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
    const [end, beforeEnd] = [...num_list].reverse();
    return [...num_list, end > beforeEnd ? (end - beforeEnd) : end * 2];
}