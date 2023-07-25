// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
    const [left, right, up, down] = [
        -parseInt(board[0] / 2),
        parseInt(board[0] / 2),
        parseInt(board[1] / 2),
        -parseInt(board[1] / 2)
    ];

    let x = 0;
    let y = 0;

    keyinput.map((direction) => {
        switch (direction) {
            case 'left':
                x = Math.max(x - 1, left);
                break;
            case 'right':
                x = Math.min(x + 1, right);
                break;
            case 'up':
                y = Math.min(y + 1, up);
                break;
            case 'down':
                y = Math.max(y - 1, down);
                break;
            default:
                break;
        }
    });

    return [x, y];
}