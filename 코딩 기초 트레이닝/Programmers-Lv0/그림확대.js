// https://school.programmers.co.kr/learn/courses/30/lessons/181836 

function solution(picture, k) {
    const newPicture = [];

    for (let i = 0; i < picture.length; i++) {
        const originalRow = picture[i];

        // 가로로 k배 확장
        let newRow = '';
        for (let j = 0; j < originalRow.length; j++) {
            newRow += originalRow[j].repeat(k);
        }

        // 세로로 k배 확장
        for (let j = 0; j < k; j++) {
            newPicture.push(newRow);
        }
    }

    return newPicture;
}


function solution(picture, k) {
    var newPicture = [];

    picture.forEach((line) => {
        const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

        for (let i = 0; i < k; i++) newPicture.push(expanded);
    });

    return newPicture;
}