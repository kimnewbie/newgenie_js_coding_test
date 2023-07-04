// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
    const arr = [...control];
    let answer = n;

    for (let i of arr) {
        switch (i) {
            case 'w': answer = answer + 1; break;
            case 's': answer = answer - 1; break;
            case 'd': answer = answer + 10; break;
            case "a": answer = answer - 10; break;
        }
    }
    return answer;
}