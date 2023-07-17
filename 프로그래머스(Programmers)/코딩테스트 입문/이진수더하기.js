// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
    var dec1 = parseInt(bin1, 2);
    var dec2 = parseInt(bin2, 2);
    return (dec1 + dec2).toString(2);
}