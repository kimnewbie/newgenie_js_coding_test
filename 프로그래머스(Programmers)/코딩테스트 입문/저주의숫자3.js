// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
    let i = 1; // loop문 첫 숫자
    let cnt = 0;

    while (cnt < n) {
        if (String(i).includes("3") || i % 3 === 0) { // 인 경우엔 i만 ++
            i++;
            continue;
        }
        i++;
        cnt++;
    }

    return i - 1;
}
// 최종적으로 cnt = 15

function solution(n) {
    let arr = [];
    let num = 0;
    while (arr.length !== n && ++num) {
        if (num % 3 !== 0 && !('' + num).includes('3')) {
            arr.push(num);
        }
    }
    return arr.pop();
}

function solution(n) {
    return [...Array(n * 3)]
        .map((_, i) => i + 1)
        .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

// ...Array(n * 3)는 마을에서 사용하는 숫자를 찾기 위해 만드는 충분한 범위