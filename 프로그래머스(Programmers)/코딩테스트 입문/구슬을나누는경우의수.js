// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 겹치는 for문이 3개라 팩토리얼 함수를 만들어줄 것
const calc = (number) => {
    var result = 1;
    for(let i = 1; i<=number; i++){
        result *= i
    }
    return result;
}

function solution(balls, share) { 
    return Math.round(calc(balls) / (calc(balls - share) * calc(share)));
} 