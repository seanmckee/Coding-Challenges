function toCamelCase(str){
    let camel = str.split('')
    let first = true
    for(let i = 0; i < camel.length; i++){
        if(camel[i] === "-" || camel[i] === "_"){
            
            camel[i+1]=camel[i+1].toUpperCase()
            console.log("char: "+camel[i+1])
            camel.splice(i,1)
        }
    }
    camel = camel.join("")
    return camel
}