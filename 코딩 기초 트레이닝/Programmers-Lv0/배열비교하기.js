// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
    const firLen = arr1.length;
    const secLen = arr2.length;
    const firSum = arr1.reduce((acc, curr) => acc + curr);
    const secSum = arr2.reduce((acc, curr) => acc + curr);
    return firLen > secLen ? 1 : firLen < secLen ? -1 :
        (firLen === secLen) && firSum > secSum ? 1 : (firLen === secLen) && firSum < secSum ? -1 : 0
}