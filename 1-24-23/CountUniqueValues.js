// Coding Challenge
// 11/24/23
// Counts unique values in array using 2 pointers in O(n)

const countUniqueValues = (arr) => {
    let i = 0
    let j = 1
  
    while(j < arr.length) {
      if(arr[i] == arr[j]){
          j++
      }else{
          i++
          arr[i] = arr[j]
          j++
      }
    }
    
    return i+1
  }
  