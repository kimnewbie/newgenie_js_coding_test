// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
    var arr = [...numbers]
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < numbers.length; j++) {
            arr.push(numbers[j])
        }
    }
    const a = arr.filter((_, i) => i % 2 === 0);
    return a[k - 1]
}

function solution(numbers, k) {
    return numbers[((2 * (k - 1))) % numbers.length];
}