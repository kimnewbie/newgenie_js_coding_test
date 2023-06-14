// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
    let money = 0;
    order.forEach(o => o.includes("latte") ? money += 5000 : money += 4500)
    return money;
}