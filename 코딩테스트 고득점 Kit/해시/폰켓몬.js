// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    var max = nums.length / 2;
    var remove = [...new Set(nums)];
    return answer = remove.length >= max ? max : remove.length;
}