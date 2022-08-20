// 자연수로 이루어진 배열 numbers가 입력으로 주어집니다. 
// 배열에서 과반수를 차지하는 숫자를 찾아 반환하도록 함수 solution을 완성해 주세요.
// 만약 과반수를 차지하는 숫자가 없으면 -1을 반환해 주세요. 
// 과반수를 차지하는 원소는 전체 n개의 원소 중 n/2개를 초과하는 원소를 말합니다.

function solution(numbers) {
    let result = 0;
    let count = 0;

    for (number of numbers) {
        if(result === 0) {
            result = number;
            count++;
        } else{
            result === number ? count++ : count--;
        }
    }
    return numbers.length / 2 >= numbers.filter(n => n === result).length ? -1 : result;
}

solution([6, 1, 6, 4, 7, 6, 6, 7])
