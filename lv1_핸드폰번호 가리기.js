// phone_number 주어졌을때 뒤에서 4자리 번호를 제외한 나머지 번호를 * 표시

function solution(phone_number) {
    return new Array(phone_number.length-4)
                .fill("*")
                .join("") + phone_number
                .slice(phone_number.length - 4);
}

solution(01033334444)
