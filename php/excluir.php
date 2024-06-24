<?php
    $id = $_POST["id_produto"];

    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");

    $query = "DELETE FROM produtos WHERE (id = '$id')";
    mysqli_query($con, $query);

    $img = "../img/" . $id . ".png";
    unlink($img);

    $mensagem = "Produto deletado!";
    $json = json_encode($mensagem);
    echo $json;
?>