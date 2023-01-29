function isValidWalk(walk) {
  
    let x = 0
    let y = 0
    
    if(walk.length !== 10){
      return false
    }
    
    if(walk.length === 0){
      return true
    }
    
    for(let i = 0; i < walk.length; i++){
      if(walk[i] === "n"){
        y = y + 1
      }else if(walk[i] === "s"){
        y = y - 1
      }else if(walk[i] === "e"){
        x = x + 1
      }else if(walk[i] === "w"){
        x = x - 1
      }else{
        return false
      }
    }
    
    if(x === 0 && y === 0){
      return true
    }else{
      return false
    }
    
  }
  
  // variables x and y for x/y axis
  // n/s affect y e/w affect x axix
  // check if array length is 10 if false return false