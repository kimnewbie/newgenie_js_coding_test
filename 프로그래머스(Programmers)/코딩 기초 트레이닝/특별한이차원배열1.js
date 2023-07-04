function solution(n) {
    const arr = Array.from(Array(n), () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) arr[i][j] = 1
            else arr[i][j] = 0
        }
    }
    return arr;
}

function solution(n) {
    const arr = Array.from(Array(n), () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        if (i === i) arr[i][i] = 1
    }
    return arr;
}