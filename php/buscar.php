<?php 
    $chave = $_POST["chave"];

    $con = mysqli_connect("localhost:3306", "root", "pucpr", "tee_jays");

    $resultado = mysqli_query($con, "SELECT * FROM produtos WHERE nome LIKE \"%$chave%\" ");

    $dados = array();
    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;
?>