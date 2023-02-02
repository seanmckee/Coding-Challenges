function printerError(s) {
    // your code
  let alphabet = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"]
  let arr = s.split('')
  let count = 0
  console.log("arr: " + arr[0])
  for(let i = 0; i < arr.length; i++){
    if(alphabet.indexOf(arr[i]) !== -1){
      count = count + 1
//       console.log("counted")
      
    }
  }
//   console.log("count: " + count)
  return `${count}/${s.length}`
}
