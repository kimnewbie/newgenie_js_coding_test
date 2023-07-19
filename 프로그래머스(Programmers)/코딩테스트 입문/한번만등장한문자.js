// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    let charCount = {};

    // 각 문자의 등장 횟수 넣기
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount) // 	cf. { a: 3, b: 2, c: 3, d: 1 } 형태

    let uniqueChars = [];

    // 등장 횟수가 1인 문자를 uniqueChars 배열에 추가 
    for (let char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }

    uniqueChars.sort();

    return uniqueChars.join('');
}

function solution(s) {
    let arr = [];
    for (let char of s) if (s.indexOf(char) === s.lastIndexOf(char)) arr.push(char);
    return arr.sort().join('');
}

function solution(s) {
    const m = new Map();
    [...s].forEach(e => m.set(e, m.get(e) + 1 || 1));
    return [...m].filter(e => e[1] === 1).map(e => e[0]).sort().join("");
}