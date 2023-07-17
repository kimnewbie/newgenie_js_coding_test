// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) { // i = 1, j = 13, k = 1
    let answer = '';
    for (i; i <= j; i++) {
        answer += i;
    }

    return answer.split(k).length - 1;
}

function solution(i, j, k) {
    var cnt = 0;
    for (let v = i; v <= j; v++) {
        var answer = v.toString().split('');
        for (let c = 0; c < answer.length; c++) {
            if (answer[c].includes(k.toString())) cnt++
        }
    }
    return cnt;
}