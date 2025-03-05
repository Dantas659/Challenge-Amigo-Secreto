let nomesDosAmigos= [];
let nomesDosAmigosSorteados= [];

function adicionarAmigo() {
    let nomesFornecidos = document.querySelector('input').value
    if(nomesFornecidos !== "") {
        nomesDosAmigos.push(nomesFornecidos);
        exibirTextoNaTela('p', '');
    } else{
        validarEntrada();
    }
    exibirListaDeAmigos('listaAmigos', nomesDosAmigos);
    limparCampo();
    atualizarListaDeAmigos();
}

function limparCampo() {
    nomesFornecidos = document.querySelector('input').value= '';
}

function validarEntrada() {
    let campo = document.querySelector('input').value;
    if(campo === "") {
        exibirTextoNaTela('p', '<span style="color: red">O campo não pode estar vazio!</span>');
        return false;
    } else {
        return true;
    }
}

function exibirListaDeAmigos(id, array) {
    let campo = document.getElementById(id);
    campo.innerHTML = array;
}  


function verificarLista() {
    if(nomesDosAmigos == '') {
        return false;
    } else {
        return true;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomesDosAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = nomesDosAmigos[i];
        lista.appendChild(item);
    }

}

function sortearAmigo(){
    if (nomesDosAmigos.length < 3) {
        exibirTextoNaTela('p', '<span style="color: red">Não há amigos suficientes para serem sorteados!</span>');
    } else{
            let indiceAleatorio = Math.floor(Math.random() * nomesDosAmigos.length);
            let amigoSorteado = nomesDosAmigos[indiceAleatorio];
            document.getElementById("resultado").innerHTML = `Seu amigo sorteado é: ${amigoSorteado}!`;

        if (nomesDosAmigosSorteados.includes(nomesDosAmigos)) {
            sortearAmigo();
        }
    }
}