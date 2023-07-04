// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
    // splice(시작할 인덱스, 잘라낼 길이, 추가할 요소);
    let str = my_string.split(''); // ['r', 'e', 'r', 'm', 'g', 'o', 'r', 'p', 's', 'a', 'm']
    queries.forEach(([a, b]) => {
        const reverseStr = str.slice(a, b + 1);
        str.splice(a, reverseStr.length, ...reverseStr.reverse());
    });
    return str.join('');
}