// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}

function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}