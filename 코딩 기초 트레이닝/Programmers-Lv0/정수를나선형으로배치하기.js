// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Array(n).fill(0));
    }

    let value = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result[top][i] = value++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result[i][right] = value++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            result[bottom][i] = value++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            result[i][left] = value++;
        }
        left++;
    }

    return result;
}