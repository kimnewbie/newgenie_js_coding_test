// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
    if (direction === 'right') {
        // 마지막 -> 0번째
        numbers.unshift(numbers.pop());
    } else {
        // 0번째 -> 마지막
        numbers.push(numbers.shift());
    }
    return numbers;
}