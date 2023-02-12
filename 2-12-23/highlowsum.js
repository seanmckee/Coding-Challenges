function sumArray(array) {
    if(array === undefined || array === NaN || array === null || array.length === 0 || array.length === 1){
      return 0
    }
    
    let highest = array[0]
    let lowest = array[0]
    let sum = 0
    
    for(let i = 0; i<array.length; i++){
      if(array[i] > highest){
        highest = array[i]
      }
      if(array[i] < lowest){
        lowest = array[i]
      }
    }
    
    for(let i = 0; i < array.length; i++){
      sum = sum + array[i]
    }
    
    return sum - (highest+lowest)
  }