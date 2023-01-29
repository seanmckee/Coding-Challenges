function count (string) {  
    // The function code should be here
     let obj = {}
     let arr = string.split('')
     
     for(let i = 0; i < arr.length; i++){
       if(arr[i] in obj){
         obj[arr[i]] = obj[arr[i]] + 1
       }else{
         obj[arr[i]] = 1
       }
     }
     return obj;
  }