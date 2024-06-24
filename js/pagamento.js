async function finalizar(){

  const response = await fetch("../php/pagamento.php");
  const finalizar = await response.json();
  console.log(finalizar);
}

function c(){
    if (document.getElementById("credito").value == "1"){
    document.getElementById("meses").setAttribute('style', 'visibility:visible');
    document.getElementById("senha").setAttribute('style', 'visibility:hidden');
    document.getElementById("qrcode").setAttribute('style', 'visibility:hidden');
    }
  else{
    document.getElementById("meses").setAttribute('style', 'visibility:hidden');
  }
}  

function d(){
    if (document.getElementById("debito").value == "2"){
    document.getElementById("senha").setAttribute('style', 'visibility:visible');
    document.getElementById("meses").setAttribute('style', 'visibility:hidden');
    document.getElementById("qrcode").setAttribute('style', 'visibility:hidden');
    }
  else{
    document.getElementById("senha").setAttribute('style', 'visibility:hidden');
    }
}  

function p(){
    if (document.getElementById("pix").value == "3"){
    document.getElementById("qrcode").setAttribute('style', 'visibility:visible');
    document.getElementById("senha").setAttribute('style', 'visibility:hidden');
    document.getElementById("meses").setAttribute('style', 'visibility:hidden');
    }
  else{
    document.getElementById("qrcode").setAttribute('style', 'visibility:hidden');
    }
}  