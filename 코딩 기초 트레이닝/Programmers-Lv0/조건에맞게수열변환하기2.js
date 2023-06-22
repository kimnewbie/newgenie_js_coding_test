// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr, cnt = 0) {
    while (!arr.every(x => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))) {
        arr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 === 1) return v * 2 + 1;
            return v;
        })
        cnt++;
    }
    return cnt;
}  