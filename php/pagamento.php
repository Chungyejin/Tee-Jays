<?php

    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");
    mysqli_query($con, "DELETE FROM carrinho WHERE(id_produto > 0)");

    $mensagem = "Compra realizada com sucesso!";
    $json = json_encode($mensagem);
    echo $json;

?>