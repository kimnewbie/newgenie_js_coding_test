// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
    return [...myString].reduce((acc, curr, index) => {
        const curStr = myString.slice(index, pat.length + index);
        if (curStr.includes(pat)) return acc + 1;
        return acc;
    }, 0);
}