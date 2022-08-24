// 프로그래머서 lv1 문제
// 총 N마리의 폰켓몬중 n/2마리 가져가기
// 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 
// 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 
// 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

function solution(nums) {
    // nums 받아서 갯수 파악
    const numsLength = nums.length;
    
    // 배열안에 중복 제거
    const numsUniq = nums.filter((e, i) => {
        return nums.indexOf(e) === i
    }).length
    
    console.log(numsLength / 2 >= numsUniq ? numsUniq : numsLength / 2)
    return numsLength / 2 >= numsUniq ? numsUniq : numsLength / 2;
}

solution([3,1,2,3])