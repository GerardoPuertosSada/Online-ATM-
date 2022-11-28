const formulario = document.getElementById('formulario')

let cuentas = [
    { nombre: "Mali", DbPassword: "123", saldo: 200 },
    { nombre: "Gera", DbPassword: "1234",  saldo: 290 },
    { nombre: "Maui", DbPassword: "12345",  saldo: 67 }
  ]

//funcion para hacer un array de nombres del array cuentas

function validar2 (userr, passwordd) {
    usuarioDentro = userr;
    //const name te da un array de los nombres del array cuentas
   const name = cuentas.map(function(cuenta){
    return cuenta.nombre
   })
    for (let i = 0; i < name.length; i++){
    if(userr === name[i]){
        if(passwordd === cuentas[i].DbPassword){
        return usuarioLogged()  
        }
    }
    }
   return alert("datos incorrectos")
    }


    formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let userDom = document.getElementById('user').value
    let passDom = document.getElementById('password').value
    validar2(userDom, passDom)
    })

    let usuarioDentro;
    
 

    





