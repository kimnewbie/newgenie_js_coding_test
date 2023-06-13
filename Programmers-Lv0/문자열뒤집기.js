// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
    let answer = '';

    const firstPart = my_string.slice(0, s);
    const middlePart = my_string.slice(s, e + 1);
    const lastPart = my_string.slice(e + 1);

    const arr = middlePart.split("");
    const reverseArr = arr.reverse();
    const arrToString = reverseArr.join("");

    answer = firstPart + arrToString + lastPart
    return answer
}
