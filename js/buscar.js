function acionar_busca(){
    chave = document.getElementById('busca').value;
    buscar(chave);
}

async function buscar(chave){
    var busca = new FormData();
    busca.append("chave", chave);

    var resultado = await fetch("../php/buscar.php", {
        method: "POST",
        body: busca
    });

    var dados = await resultado.json();

    document.getElementById('msg').innerHTML = `RESULTADO DA BUSCA`;

    var conteudo = [];
    for(var i = 0; i < dados.length; i++){
        conteudo += 
        `<div class="card">
            <div class="card-img">
                <img src="../img/${dados[i].id}.png" class="prodimg">
            </div>
            <div class="card-texto">
                <br><br>
                <h1>${dados[i].nome}</h1> 
            </div>
            <div class="card-texto">
                <br><br>
                <p> R$ ${dados[i].preco} </p>
            </div>
            <div class="card-carrinho">
                <button type="button" onclick="comprarbusca(${dados[i].id})"> ADICIONAR COMPRA </button>
            </div>
        </div>`
    }
    document.getElementById('resultado_busca').innerHTML = conteudo;
}

async function comprarbusca(id){
    var compra = new FormData();
    compra.append("id_produto", id);

    var promise = await fetch("../php/comprar.php", {
        method: "POST",
        body: compra
    });

    var resultado = await promise.json();
    alert(resultado);
    
}