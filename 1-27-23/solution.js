function solution(number) {
    let current = number - 1
    let total = 0
    if(number <=0) return 0

    while(current > 2) {
        if(current%3 === 0){
            total= total + current
        }else if (current%5 === 0) {
            total = total + current
        }else{
            
        }
        current--
    }
    return total
}