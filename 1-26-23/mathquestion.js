function sqInRect(lng, wdth){
    //your code here
    let area = lng * wdth
    let arr = []
    
    if(lng === wdth) {
      return null
    }
    while (area > 0){
      if(lng < wdth){
        arr.push(lng)
        let l = lng**2
        area = area - l
        wdth = wdth - lng
      }
      if(lng > wdth){
        arr.push(wdth)
        let w = wdth**2
        area = area - w
        lng = lng -wdth
      }
      
      if(lng === wdth) {
        arr.push(lng)
        area=0
      }
    
    }
    return arr
    
    
  }