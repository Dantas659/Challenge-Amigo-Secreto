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

function exibirListaDeAmigos(id, nomesDosAmigos) {
    let campo = document.getElementById(id);
    campo.innerHTML = nomesDosAmigos;
}  