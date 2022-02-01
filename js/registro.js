const btnRegistro = $("#btnRegistro")
btnRegistro[0].onclick = (e) => {
  e.preventDefault()
  const nombre = $("#nombre")[0].value;
  const apellido = $("#apellido")[0].value;
  const email = $("#email")[0].value;
  const dni = $("#dni")[0].value;
  const contraseña = $("#contraseña")[0].value;

  const cuenta = new Usuario("","","","");
  cuenta.registrar(nombre,apellido,email,dni,contraseña);

}


btnRegistro[0].onmouseover = () =>{
  btnRegistro[0].style.backgroundColor="white";
  btnRegistro[0].style.color="red";
}


btnRegistro[0].onmouseout = () =>{
  btnRegistro[0].style.backgroundColor="red";
  btnRegistro[0].style.color="white";
}


