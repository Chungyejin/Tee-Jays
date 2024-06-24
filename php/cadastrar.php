<?php
    $nome = $_POST["nome"];
    $preco = $_POST["preco"];
    $imagem = $_FILES["imagem"];
    
    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");

    $query = "INSERT INTO produtos (nome, preco) VALUES ('$nome', '$preco')";
    mysqli_query($con, $query);

    $id = mysqli_insert_id($con);
    $imagem_produto = "../img/" . $id . ".png";
    move_uploaded_file($imagem["tmp_name"], $imagem_produto);

    $mensagem = "Produto cadastrado!";
    $json = json_encode($mensagem);
    echo $json;
?>