// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    const number = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < number.length; i++) {
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}

const solution = numbers => {
    return (
        Number(['zero', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine']
            .reduce((acc, curr, index) => acc.replaceAll(curr, index), numbers))
    )
}