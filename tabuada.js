function limpar()
{
  document.location.reload(true);
}

function multiplicar()
{
  var numeroEscolhido = parseInt(document.getElementById("numeroEscolhido").value);
  var resposta = document.getElementById('resposta');
  var tab ='';
  for( let cont = 1; cont <= 10; cont++)
  {
    tab += numeroEscolhido + " x " + cont + " = " + numeroEscolhido * cont + "<br>";
    resposta.innerHTML = tab;
  }

}



 


 
  


       


 
  




 






