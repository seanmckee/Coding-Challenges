function towerBuilder(nFloors) {
    let tower = []
    let width = (nFloors*2) - 1
    let start = (width-1)/2
    let end = (width-1)/2
    
    if(nFloors === 1) return ["*"]
    
    if(nFloors === 0) return []
    
    for(let i = 0; i < nFloors; i++){
      let temp = ""
       for(let j = 0; j < width; j++){
         if(j < start || j > end){
           temp = temp + " "
         }else{
           temp = temp + "*"
         }
         
       }
      start = start - 1
      end = end + 1
  
      tower.push(temp)
  
    }
    return tower
  }