// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
    const index = myString.lastIndexOf(pat[pat.length - 1]);
    return myString.slice(0, index + 1)
}