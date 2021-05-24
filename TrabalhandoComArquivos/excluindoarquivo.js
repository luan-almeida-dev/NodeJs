let fs = require('fs')

fs.unlink('text.txt', function(error){
    if(error){throw error}
    console.log("Arquivo apagado com sucesso")
})