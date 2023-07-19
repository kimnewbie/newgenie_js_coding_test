// https://school.programmers.co.kr/learn/courses/30/lessons/120837 

function solution(hp) {
    const 장군개미 = parseInt(hp / 5) // 4   
    const 병정개미 = parseInt((hp % 5) / 3) // 1 
    const 일개미 = parseInt(((hp % 5) % 3) / 1)

    return 장군개미 + 병정개미 + 일개미
}