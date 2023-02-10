function formatDuration (seconds) {
    if(seconds === 0){
      return "now"
    }
    
    let years = 0
    let days = 0
    let hours = 0
    let minutes = 0
    let theSeconds = 0
    
    if(seconds >= 31536000) {
      years = Math.trunc(seconds/31536000)
      seconds = seconds%31536000
    }
    if(seconds >= 86400) {
      days = Math.trunc(seconds/86400)
      seconds = seconds%86400
    }
     if(seconds >= 3600) {
      hours = Math.trunc(seconds/3600)
      seconds = seconds%3600
    }
    if(seconds >= 60) {
      minutes = Math.trunc(seconds/60)
      seconds = seconds%60
    }
    if(seconds >= 0) {
      theSeconds = seconds
    }
  
    console.log("seconds: " + theSeconds)
    let times = [
      {type: "year", value: years}, 
      {type: "day", value: days}, 
      {type: "hour", value: hours}, 
      {type: "minute", value: minutes}, 
      {type: "second", value: theSeconds}]
  
      console.log(times)
    
    for(let i = 0; i < times.length; i++){
  //     console.log(times[i].type + " value: " + times[i].value)
      if(times[i].value === 0){
        times.splice(i, 1)
        i--
      } 
    }
    
    console.log(times)
    let readable = ""
    if(times.length === 1 ){
      if(times[0].value > 1){
        return times[0].value + " " + times[0].type + "s"
      }else{
        return times[0].value + " " + times[0].type
      }
      
    }
      
    if(times[0].value > 1) {
        readable = readable + times[0].value + " " + times[0].type + "s"
      }else{
        readable = readable + times[0].value + " " + times[0].type
      }
  
  
    
    for(let i = 1; i < times.length-1; i++){
      if(times[i].value > 1) {
        readable = readable + ", " + times[i].value + " " + times[i].type + "s"
      }else{
        readable = readable + ", " + times[i].value + " " + times[i].type
      }
    }
  
  
    if(times[times.length-1].value > 1) {
        readable = readable + " and " + times[times.length-1].value + " " + times[times.length-1].type + "s"
      }else{
        readable = readable + " and " + times[times.length-1].value + " " + times[times.length-1].type
      }
    
    
    return readable
    
    
    // make an array of objects where it is labled then loop trhough and create string
  }