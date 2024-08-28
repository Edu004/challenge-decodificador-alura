
const textArea = document.querySelector(".text-area");
const saida = document.querySelector(".saida");
let tirarImagem = document.querySelector(".saida");

while(saida.value = ""){
    tirarImagem.style.backgroundImage = './assets/procurando.png';
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)//colocar o que eu escrever como resultado de criptografar
    saida.value = textoEncriptado
    textArea.value = ""
    tirarImagem.style.backgroundImage = 'none';
}


function encriptar(stringEncriptada){//parametro do texto que eu irei escrever para encriptografar
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){//i vai percorrer a matriz inteira
        if(stringEncriptada.includes(matrizCodigo[i][0])){//verificar vogais para serem encriptadas
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    saida.value = textoDesencriptado
    textArea.value = ""
}


function desencriptar(stringDesencriptada){//parametro do texto que eu irei escrever para encriptografar
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){//i vai percorrer a matriz inteira
        if(stringDesencriptada.includes(matrizCodigo[i][1])){//verificar chave encriptografada
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    let copyText = document.querySelector(".saida");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector(".btn-copiar").addEventListener("click", copy);







