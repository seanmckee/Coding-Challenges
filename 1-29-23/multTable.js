multiplicationTable = function(size) {
    // insert code here
    let table = []
    let first = []
    
    function addArray(arr1, arr2) {
      let arr = []
      for(let i = 0; i < arr1.length; i++){
        arr[i] = arr1[i] + arr2[i]
      }
      return arr
    }
    
    for(let i = 0; i < size; i++){
      first[i] = i+1
    }
    
    table[0] = first
    
    for(let i = 1; i < size; i++){
      table[i] = addArray(table[i-1], first)
      
    }
    return table
    
  }
  
  // size = the length of the for loop AND length of each sub array AND the lenght of the array
  // create first sub array. count to the length
  // to get next sub array just add the first sub array to the current
  