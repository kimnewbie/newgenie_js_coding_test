// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
    const arr = [];
    for (let i in my_string) {
        arr.push(my_string.slice(-i));
    }
    return arr.sort();
}