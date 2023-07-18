// https://school.programmers.co.kr/learn/courses/30/lessons/120890


function solution(array, n) {
    let closest = array[0];
    let diff = Math.abs(array[0] - n);

    for (let i = 1; i < array.length; i++) {
        const currentDiff = Math.abs(array[i] - n);
        if (currentDiff < diff) {
            closest = array[i];
            diff = currentDiff;
        } else if (currentDiff === diff && array[i] < closest) {
            closest = array[i];
        }
    }

    return closest;
}

function solution(array, n) {
    return array.reduce((acc, curr) =>
        Math.abs(acc - n) < Math.abs(curr - n) ? acc
            : Math.abs(acc - n) === Math.abs(curr - n) ?
                Math.min(acc, curr) : curr);
} 