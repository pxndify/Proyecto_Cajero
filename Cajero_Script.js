
var cuenta = [ "P1", "P2", "P3"];

var pass = ["1234", "2345", "3456"];

var dinero = [200, 290, 67];


function Regresar(){
location ="CajeroAuto.html";
}

function Consultar1(){
  swal( "CONSULTA","SU SALDO ACTUAL ES: $" + dinero[0], "info");
}

function Consultar2(){
  swal( "CONSULTA","SU SALDO ACTUAL ES: $" + dinero[1]),"info";
  }

  function Consultar3(){
    swal( "CONSULTA","SU SALDO ACTUAL ES: $" + dinero[2],"info");
    }

 

 function Depositar1(){

  if(Verificador){

    var Deposito = parseInt(document.getElementById("cantidades_input").value)

    // Validación

    if (dinero[0] + Deposito > 990) {

      swal("Operación NO DISPONIBLE","El Saldo Total No Puede Superar $990", "error")}

      else{ dinero[0] = dinero[0] + Deposito;

        swal("Información de DEPÓSITO", " Usted A DEPOSITADO: $" + Deposito + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[0], "success");

      }
      return dinero[0];
    }
  }

  function Depositar2(){

    if(Verificador){
  
      var Deposito = parseInt(document.getElementById("cantidades_input").value)
  
      // Validación
  
      if (dinero[1] + Deposito > 990) {
  
        swal("Operación NO DISPONIBLE","El Saldo Total No Puede Superar $990", "error")}
  
        else{ dinero[1] = dinero[1] + Deposito;
  
          swal("Información de DEPÓSITO", " Usted A DEPOSITADO: $" + Deposito + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[1], "success");
  
        }
        return dinero[1];
      }
    }

    function Depositar3(){

      if(Verificador){
    
        var Deposito = parseInt(document.getElementById("cantidades_input").value)
    
        // Validación
    
        if (dinero[2] + Deposito > 990) {
    
          swal("Operación NO DISPONIBLE","El Saldo Total No Puede Superar $990", "error")}
    
          else{ dinero[2] = dinero[2] + Deposito;
    
            swal("Información de DEPÓSITO", " Usted A DEPOSITADO: $" + Deposito + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[2], "success");
    
          }
          return dinero[2];
        }
      }

  function Retirar1(){

    if(Verificador){
  
      var Retiro = parseInt(document.getElementById("cantidades_input").value)
  
      // Validación
  
      if (dinero[0] - Retiro < 10) {
  
        swal("Operación NO DISPONIBLE", "El Saldo Total NO Puede Ser Menor $10", "error")}
  
        else{ dinero[0] = dinero[0] - Retiro;
  
          swal("Información de RETIRO", " Usted A RETIRADO: $" + Retiro + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[0], "success");
  
        }
        return dinero[0];
      }
    }

    function Retirar2(){

      if(Verificador){
    
        var Retiro = parseInt(document.getElementById("cantidades_input").value)
    
        // Validación
    
        if (dinero[1] - Retiro < 10) {
    
          swal("Operación NO DISPONIBLE", "El Saldo Total NO Puede Ser Menor $10", "error")}
    
          else{ dinero[1] = dinero[1] - Retiro;
    
            swal("Información de RETIRO", " Usted A RETIRADO: $" + Retiro + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[1], "success");
    
          }
          return dinero[1];
        }
      }

      function Retirar3(){

        if(Verificador){
      
          var Retiro = parseInt(document.getElementById("cantidades_input").value)
      
          // Validación
      
          if (dinero[2] - Retiro < 10) {
      
            swal("Operación NO DISPONIBLE", "El Saldo Total NO Puede Ser Menor $10", "error")}
      
            else{ dinero[2] = dinero[2] - Retiro;
      
              swal("Información de RETIRO", " Usted A RETIRADO: $" + Retiro + "\n" + "\n" + " Su Nuevo Saldo Es: $" + dinero[2], "success");
      
            }
            return dinero[2];
          }
        }


  

function Verificador(){

const input_user = document.getElementById("user");
const input_pass = document.getElementById("password");

  let user1 = input_user.value;
  let pass1 = input_pass.value;


if(user1&&pass1){
  if (user1 == cuenta[0]){
     if(pass1 == pass[0]){
      location = "P1.html";
      alert("BIENVENIDO P1!")} 
      else {  alert("Usuario y/o Contraseña INCORRECTA, Intente Otra Vez")}
  } else {  
    if (user1 == cuenta[1]){
       if(pass1 == pass[1]){
        location = "P2.html";
        alert("BIENVENIDO P2!")} 
       else {  alert("Usuario y/o Contraseña INCORRECTA, Intente Otra Vez")}}
        else{
          if (user1 == cuenta[2]){
          if(pass1 == pass[2]){
            location = "P3.html";
            alert("BIENVENIDO P3!")} 
           else {  alert("Usuario y/o Contraseña INCORRECTA, Intente Otra Vez")}}
}}} else{ alert("Rellene Usuario y Contraseña")}}

