<?php 
    $id = $_POST["id_produto"];

    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");

    $query = "INSERT INTO carrinho (id_produto) VALUES ('$id')";

    mysqli_query($con, $query);

    $mensagem = "Produto adicionado ao carrinho!";
    $json = json_encode($mensagem);
    echo $json;
    
?>