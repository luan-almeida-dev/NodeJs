let fs = require('fs')

fs.writeFile('text.txt','Helo World', function(error){
    if(error){throw error}
    console.log("Arquivo criado com sucesso")
})