let fs = require('fs')

fs.readFile('NewText.txt','UTF8',function(error,data){
    if(error){throw error}
    console.log(data)
})