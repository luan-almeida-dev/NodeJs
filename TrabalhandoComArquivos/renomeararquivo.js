let fs = require('fs')

fs.rename('text.txt','NewText.txt', function(error){
    if(error){throw error}
    console.log("Arquivo renomeado com sucesso")
})