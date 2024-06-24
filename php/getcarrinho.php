<?php

    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");

    $resultado = mysqli_query($con, "SELECT * FROM produtos JOIN carrinho ON produtos.id = carrinho.id_produto");

    $dados = array();
    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;

?>