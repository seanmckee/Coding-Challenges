function removeSmallest(numbers) {
  
    let smallest = numbers[0]
    let index
    
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < smallest){
        index = i
        smallest = numbers[i]
      }
    }
    let arr = [...numbers]
    arr.splice(index, 1)
    return arr;
  }