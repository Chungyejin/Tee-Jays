window.onload = async function carrega(){
    var resultado = await fetch("../php/getcarrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();
    var preco_total = 0;

    for(var i = 0; i < dados.length; i++){
        var conteudo = 
        `<div class="compras">
            <img src="../img/${dados[i].id}.png">
            <h1>${dados[i].nome}</h1>
            <p> R$ ${dados[i].preco}</p>
        </div>`
        preco_total += Number(dados[i].preco);
    
        document.getElementById('carrinho').innerHTML += conteudo;
    }
    
    var valor_total = `<h5> VALOR TOTAL = R$ ${preco_total}</h5>`
    document.getElementById('carrinho').innerHTML += valor_total;

    var finalizar = 
    `<a href="pagamento.html"><button type="button" class="botao-finalizar"> FINALIZAR COMPRA </button></a>`
    document.getElementById('carrinho').innerHTML += finalizar;
}