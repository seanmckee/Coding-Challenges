function digitize(n) {
    //code here
    let arr = n.toString().split('')
    for(let i = 0; i < arr.length; i++){
      arr[i] = parseInt(arr[i])
    }
    return arr.reverse()
  }