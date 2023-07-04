// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    return num_list.reduce((acc, curr) => num_list.length <= 10 ? acc * curr : acc + curr);
}