// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
    const n = board.length; // 2차원 배열 board의 크기
    const directions = [ // 위, 아래, 좌, 우, 대각선
        [-1, 1], [0, 1], [1, 1],
        [-1, 0], [1, 0],
        [-1, -1], [0, -1], [1, -1]
    ];

    let safeCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                continue; // 다음 칸을 확인
            }

            let danger = false;

            for (const [dx, dy] of directions) {
                const nx = dx + i; // 행 인덱스 더하기
                const ny = dy + j; // 열 인덱스 더하기

                // 보드 범위에 있는지
                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    if (board[nx][ny] === 1) {
                        danger = true; // 하나라도 위험하면
                        break;
                    }
                }
            }

            if (!danger) {
                safeCount++;
            }
        }
    }

    return safeCount;
}

function solution(board) {
    let outside = [ // 현재 위치인 [0, 0] 제외 
        [-1, 1], [0, 1], [1, 1],
        [-1, 0], [1, 0],
        [-1, -1], [0, -1], [1, -1]
    ];

    let safeCount = 0;

    board.forEach((row, index, itsArr) => row.forEach((it, rowIndex) => {
        if (it === 1) return false; // 지뢰(1)인 경우
        return outside.some(([ox, oy]) =>
            !!itsArr[ox + index]?.[oy + rowIndex]
        ) // !! : undefined면 false 반환
            ? false : safeCount++;
    }));

    return safeCount;
}

// some()을 사용한 이유는, some()은 콜백 함수가 하나라도 true를 반환하는 경우에만 true를 반환하고 반복을 종료하기 때문에, 주변에 지뢰가 하나라도 있으면 false를 반환하여 해당 칸을 건너뛰도록 구현할 수 있다.

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])