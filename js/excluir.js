window.onload = async function carrega(){
    var resultado = await fetch("../php/getprodutos.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        var conteudo = 
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
                <button type="button" onclick="excluir(${dados[i].id})"> EXCLUIR PRODUTO </button>
            </div>
        </div>`
    
        document.getElementById('excluir').innerHTML += conteudo;
    }
}
    
async function excluir(id){
    var deletar = new FormData();
    deletar.append("id_produto", id);

    var promise = await fetch("../php/excluir.php", {
        method: "POST",
        body: deletar
    });

    var resultado = await promise.json();
    alert(resultado);

    location.reload();
}