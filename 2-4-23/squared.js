function squareSum(numbers){
    let total = 0
    for(let i = 0; i < numbers.length; i++){
      total = total + numbers[i]**2
    }
    return total
  }