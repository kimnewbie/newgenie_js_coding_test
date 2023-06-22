// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;

    num_list.map((v, index) => {
        (index % 2) ? evenSum += v : oddSum += v;
    });

    return evenSum > oddSum ? evenSum : oddSum;
}

function mySolution(num_list) {
    const len = num_list.length;
    let evenSum = 0; // 0, 2, 4
    let oddSum = 0;  // 1, 3, 5  

    for (let i = 0; i < len; i += 2) {
        evenSum += num_list[i];
    }
    for (let i = 1; i < len; i += 2) {
        oddSum += num_list[i];
    }
    return evenSum > oddSum ? evenSum : oddSum;
}