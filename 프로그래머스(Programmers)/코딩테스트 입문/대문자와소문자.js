// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
    return [...my_string]
        .map((char) => char === char.toLowerCase() ?
            char.toUpperCase()
            : char.toLowerCase()
        )
        .join('');
}