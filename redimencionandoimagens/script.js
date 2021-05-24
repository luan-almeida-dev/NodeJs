const sharp = require('sharp') //inportando o Pacote Npm

let path = process.argv[2]; // irar pegar o endereço na linha de comando
let width = Number(process.argv[3]); // receber Number pq sera o tamanho do arquivo

function resize(path, width) {

    sharp(path). //chamando o Pacote(sharp) e dando o endereço
    // o endereço (path) irar receber na linha de comando
    // conforme a variavel esta ascima

    resize({
        width: width
    }). // RESIZE é um método do sharp que vai redimecionar a imagem pelo tamando que for passado
    // O argumento é a largura que sera passado pela variavel

    toFile('./temp/output_resize.jpg',
        // Será aonde deverá armazenar esse arquivo e deve passar 2 argumentos
        // 1° o endereço que vai salvar
        (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("imagem redimencionada com sucesso")
            }
        } // 2° argumento é um Calback de Erro
    )
}

resize(path,width)