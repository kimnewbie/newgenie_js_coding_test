// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
    const arr = [];

    for (let i = 0; i < num_list.length; i += size) {
        arr.push(num_list.slice(i, i + size));
    }

    return arr;
}