let saldoUsuario;


// FUNCION DE USUARIO LOGUEADO
function usuarioLogged() {
  const loginBtn2 = document.getElementById("loginBtn2");
  loginBtn2.addEventListener('click', (evento2) => {
    evento2.preventDefault()
    let welcomePg = document.getElementById("welcomePg")
    welcomePg.classList.remove('unhide')
    let formulario = document.getElementById("formulario")
    formulario.classList.remove('unhide')
    let menu = document.getElementById("menu")
    menu.classList.add("unhide")
    let registerBtn = document.getElementById("registerBtn")
    registerBtn.classList.add("hide")
  })
}

//FUNCIONES DE BOTONES

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', (evento) => {
  evento.preventDefault()
  let welcomePg = document.getElementById("welcomePg")
  welcomePg.classList.add('unhide')
  let introFakebank = document.getElementById("introFakebank")
  introFakebank.classList.add("hide")
  let formulario = document.getElementById("formulario")
  formulario.classList.add("unhide")
})


let registerBtn = document.getElementById("registerBtn")
registerBtn.addEventListener("click", (evento) => {
  evento.preventDefault()
  let introFakebank = document.getElementById("introFakebank")
  introFakebank.classList.add("hide")
  let menu = document.getElementById("menu")
  menu.classList.remove("unhide")
  let register = document.getElementById("registerPg")
  register.classList.add("unhide")

})

let registerBtn2 = document.getElementById("registerBtn")
registerBtn2.addEventListener("click", (evento) => {
  evento.preventDefault()
  let welcomePg = document.getElementById("welcomePg")
  welcomePg.classList.remove('unhide')
})

const depositarBtn = document.getElementById("depositarBtn");
depositarBtn.addEventListener("click", (evento3) => {
  evento3.preventDefault()
  saldoAlDia(usuarioDentro,1)
  let depositar = document.getElementById("depositar")
  let menu = document.getElementById("menu")
  menu.classList.remove('unhide')
  depositar.classList.add("unhide")
})



let retirarBtn = document.getElementById("retirarBtn")
retirarBtn.addEventListener("click", (evento4) => {
  evento4.preventDefault()
  saldoAlDia(usuarioDentro,2)
  let retirar = document.getElementById("retirar")
  let menu = document.getElementById("menu")
  menu.classList.remove("unhide")
  retirar.classList.add("unhide")
})


let consultarBtn = document.getElementById("consultarBtn")
consultarBtn.addEventListener("click", (evento5) => {
  evento5.preventDefault()
  saldoAlDia(usuarioDentro,3)
  let consultar = document.getElementById("consultar")
  let menu = document.getElementById("menu")
  menu.classList.remove("unhide")
  consultar.classList.add("unhide")
})


let regresarBtnDep = document.getElementById("regresarBtnDep")
regresarBtnDep.addEventListener("click", (evento) => {
  evento.preventDefault()
  let menu = document.getElementById("menu")
  menu.classList.add("unhide")
  let depositar = document.getElementById("depositar")
  depositar.classList.remove("unhide")
})




let regresarBtnRet = document.getElementById("regresarBtnRet")
regresarBtnRet.addEventListener("click", (evento) => {
  evento.preventDefault()
  let menu = document.getElementById("menu")
  menu.classList.add("unhide")
  let retirar = document.getElementById("retirar")
  retirar.classList.remove("unhide")
})

let regresarBtnCons = document.getElementById("regresarBtnCons")
regresarBtnCons.addEventListener("click", (evento) => {
  evento.preventDefault()
  let menu = document.getElementById("menu")
  menu.classList.add("unhide")
  let consultar = document.getElementById("consultar")
  consultar.classList.remove("unhide")
})

let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", (evento) => {
  location.reload()
})

const homeBtn = document.getElementById("Home")
homeBtn.addEventListener("click", (evento) => {
  location.reload()
})

//FUNCION DE SALDO AL DIA


function saldoAlDia(user, numId) {
  let usBalance = document.getElementById("usBalance" + numId)
  console.log(user)
  console.log(usBalance)
  const name = cuentas.map(function (cuenta) {
    return [cuenta.nombre, cuenta.saldo]
  })
  for (let i = 0; i < name.length; i++) {
    if (user === name[i][0]) {
      saldoUsuario = name[i][1]
    }
  }
  usBalance.innerHTML = saldoUsuario
  return usBalance.innerHTML = saldoUsuario 
}


//EVENTOS PARA SUMA Y RESTA DE SALDO


let cincuentaDep = document.getElementById("50d")
cincuentaDep.addEventListener("click", (evento) => {
  evento.preventDefault()
  suma(50)
  })

let cienDep = document.getElementById("100d")
cienDep.addEventListener("click", (evento) => {
  evento.preventDefault()
  suma(100)
})

let quinientosDep = document.getElementById("500d")
quinientosDep.addEventListener("click", (evento) => {
  evento.preventDefault()
  suma(500)
})

let cincuentaRes = document.getElementById("50r")
  cincuentaRes.addEventListener("click", (evento) => {
    evento.preventDefault()
    resta(50)
  })

let cienRes = document.getElementById("100r")
cienRes.addEventListener("click", (evento) => {
  evento.preventDefault()
  resta(100)
})

let quinientosRes = document.getElementById("500r")
quinientosRes.addEventListener("click", (evento) => {
  evento.preventDefault()
  resta(500)

})


//FUNCIONES PARA SUMA Y RESTA DE SALDO

function suma (cantidad){
  let suma2 = saldoUsuario + cantidad
  if(suma2 > 990){
    return alert("no se puede tener mas de $990 en la cuenta")
  }
  saldoUsuario = suma2
  usBalance1.innerHTML = saldoUsuario
  usBalance2.innerHTML = saldoUsuario
  usBalance3.innerHTML = saldoUsuario
  return saldoUsuario
  
}

function resta (cantidad){
  let resta2 = saldoUsuario - cantidad
  if(resta2 < 10){
    return alert("no se puede tener menos de $10 en la cuenta")
  }
  saldoUsuario = resta2
  usBalance1.innerHTML = saldoUsuario
  usBalance2.innerHTML = saldoUsuario
  usBalance3.innerHTML = saldoUsuario
  return saldoUsuario
}

let usBalance1 = document.getElementById("usBalance1")
let usBalance2 = document.getElementById("usBalance2")
let usBalance3 = document.getElementById("usBalance3")
usBalance1.innerHTML = saldoUsuario
usBalance2.innerHTML = saldoUsuario
usBalance3.innerHTML = saldoUsuario

//dudas nuevas para montse:

//no se guarda mi saldoUsuario en global, me salgo de depositar y se quita 
//no se actualiza en el div en el innerHTML de usbalance yo 
//creo que es porque no esta ahora en usBalance1,2,3 
