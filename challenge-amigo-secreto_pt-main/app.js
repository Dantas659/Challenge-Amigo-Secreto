let nomesDosAmigos= [];

function adicionarAmigo() {
    var nomesFornecidos = document.querySelector('input').value
    if(nomesFornecidos !== "") {
        nomesDosAmigos.push(nomesFornecidos);
    } else{
        validarEntrada();
    }
    exibirListaDeAmigos('listaAmigos', nomesDosAmigos);
    limparCampo();
    atualizarListaDeAmigos();
}

function limparCampo() {
    nomesFornecidos = document.querySelector('input');
    nomesFornecidos.value = '';
}

function validarEntrada() {
    let campo = document.querySelector('input').value;
    if(campo === "") {
        alert('O campo não pode estar vazio!');
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

function sortearAmigo() {
    
}
