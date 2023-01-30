function findNb(m) {
    // your code
  
    let vol = 0
    let i = 1
    while (vol < m){
      vol = vol + i**3
      i++
    }
    if(vol !== m){
      return -1
    }else{
      return i-1
    }
}