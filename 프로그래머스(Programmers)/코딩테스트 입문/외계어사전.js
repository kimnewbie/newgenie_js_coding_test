// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
    return dic.some(s => spell.sort().toString() === [...s].sort().toString()) ? 1 : 2;
}

function solution(spell, dic) {
    return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
} 