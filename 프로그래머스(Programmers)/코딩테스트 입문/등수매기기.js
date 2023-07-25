// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
    const avgs = score.map((val) => Math.round((val[0] + val[1]) / 2));
    var ranking = Array(avgs.length).fill(1);

    avgs.forEach((avg) => {
        ranking.forEach((_, i) => {
            if (avg > avgs[i]) {
                ranking[i]++;
            }
        })
    });
    return ranking;
}

function solution(score) {
    return score.map((el) => {
        return (
            score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
        );
    });
}

function solution(score) {
    let avg = score.map(v => (v[0] + v[1]) / 2);
    let sorted = avg.slice().sort((a, b) => b - a);
    return avg.map(v => sorted.indexOf(v) + 1);
}