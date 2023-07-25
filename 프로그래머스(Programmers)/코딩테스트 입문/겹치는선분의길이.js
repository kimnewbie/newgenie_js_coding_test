// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
    // 시작점과 끝점의 최솟값과 최댓값
    let minStart = Math.min(...lines.map(line => line[0]));
    let maxEnd = Math.max(...lines.map(line => line[1]));

    let overlapLength = 0; // 겹치는 부분의 길이를 저장할 변수

    // 최솟값과 최댓값 사이의 범위에서 각 선분들의 겹치는 부분 찾기
    for (let i = minStart; i < maxEnd; i++) {
        let count = 0; // 해당 위치에서 겹치는 선분의 수를 세는 변수
        for (let line of lines) {
            if (i >= line[0] && i < line[1]) {
                count++;
            }
        }
        if (count >= 2) {
            overlapLength++;
        }
    }

    return overlapLength;
}

function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for (; a < b; a++) line[a + 100]++;
    });

    return line.reduce((a, c) => c > 1 ? a + 1 : a, 0)
}