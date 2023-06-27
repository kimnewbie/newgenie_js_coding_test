// https://school.programmers.co.kr/learn/courses/30/lessons/181854

const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
        ? num + n
        : num
))
