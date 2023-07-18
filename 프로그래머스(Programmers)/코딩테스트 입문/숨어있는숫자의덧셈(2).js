// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
    const regExp = /[^0-9]/g;
    const replaceStr = my_string.replace(regExp, ' ');
    const splitStr = replaceStr.split(' ')
    const joinStr = splitStr.filter(v => v !== '').join().split(',');
    return [...joinStr].reduce((acc, curr) => +acc + +curr, 0)
}

function solution(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}