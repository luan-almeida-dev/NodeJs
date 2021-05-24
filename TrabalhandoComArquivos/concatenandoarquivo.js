let fs = require('fs')

fs.appendFile('text.txt',' - Olá Mundo', function(error){
    if(error){throw error}
    console.log("Arquivo atualizado com sucesso")
})