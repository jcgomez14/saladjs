
const btnPago = $("#btnPago")
btnPago[0].onclick = (e) => {
  e.preventDefault()
  const nombre = $("#nombre")[0].value;
  const apellido = $("#apellido")[0].value;
  const dni = $("#dni")[0].value;
  const tarjeta = $("#tarjeta")[0].value;
  const direccion = $("#direccion")[0].value;

  const pedido = new Pago("","","","","");
  pedido.registrarPago(nombre,apellido,dni,tarjeta,direccion);

}


btnPago[0].onmouseover = () =>{
    btnPago[0].style.backgroundColor="white";
    btnPago[0].style.color="red";
}


btnPago[0].onmouseout = () =>{
    btnPago[0].style.backgroundColor="red";
    btnPago[0].style.color="white";
}


