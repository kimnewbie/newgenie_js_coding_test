//

function solution(arr, flag) {
    return arr.reduce(
        (acc, curr, i) => (flag[i] ? [...acc, ...new Array(curr * 2).fill(curr)] : acc.slice(0, -curr)),
        [],
    );
}

function solution(arr, flag) {
    let X = [];
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            const element = arr[i];
            for (let j = 0; j < element * 2; j++) {
                X.push(element);
            }
        } else {
            const numToRemove = arr[i];
            X = X.slice(0, X.length - numToRemove);
        }
    }
    return X;
}