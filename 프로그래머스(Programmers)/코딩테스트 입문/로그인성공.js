// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

function solution(id_pw, db) {
    var answer = 'fail';
    for (let i = 0; i < db.length; i++) {
        const [id, pw] = db[i];
        if (id_pw[0] === id) {
            if (id_pw[1] === pw) answer = 'login';
            else answer = "wrong pw";
        }
    }
    return answer;
}