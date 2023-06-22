// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
    const totalSum = num_list.reduce((acc, curr) => acc * curr, 1);
    const totalSquares = num_list.reduce((acc, curr) => acc + curr, 0);
    return totalSum < totalSquares ** 2 ? 1 : 0;
}