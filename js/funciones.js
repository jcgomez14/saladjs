$(() => {
	obtenerProductos();
    printCarrito(carrito);
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let misProductos;

function obtenerProductos() {
    
	$.get("./productos2.json", (respuesta, estado) => {
        misProductos = respuesta.productos ;
        mostrarProductos(misProductos);
	});

}

function mostrarProductos(array){
    array.forEach((prod) => {
        if (prod.img2 === "") {
            $("#shop").append(
                `<div class="productosMain">
                       <div class="productos">
                        <img src="${prod.img1}" width="30%">
                        </div>
                        <h2 class="titulo">
                        ${prod.nombre}
                        </h2>
                        <h3 class="informacion">
                        ${prod.talle} -  $${prod.precio}
                        </h3>
                        <a href="#modalAviso" rel="modal:open"> <button class="btn" id="${prod.id}" onclick="addCarrito(event)"> AÑADIR AL CARRITO
                    </button></a>
                </div>
                `
            )
        }
        else {
            $("#shop").append(  
            ` <div class="productosMain">
                    <div class="productos">
                    <img src="${prod.img1}" width="30%">
                    <img src="${prod.img2}" width="30%">
                    </div>
               	
                    <h2 class="titulo">
                        ${prod.nombre}
                    </h2>
                        <h3 class="informacion">
                        ${prod.talle} - $${prod.precio}
                        </h3>
                
                        <a href="#modalAviso" rel="modal:open"><button class="btnCompra" id="${prod.id}" onclick="addCarrito(event)"> AÑADIR AL CARRITO
                </button></a>
            </div>
           `
            )
        }
    });
}

function addCarrito(e){
    let id = Number(e.target.id)
    let productoSeleccionado = misProductos.find((p) => p.id === id)
    carrito.push(productoSeleccionado)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    printCarrito(carrito); 
}

function printCarrito(array){
    $("#carrito").empty();
    let total = 0;
    array.forEach(prod =>{
        total = total + prod.precio;
        $("#carrito").append(
            `
        <tr>
            <td class="tituloCarrito">${prod.nombre}</td>
            <td class="informacionCarrito">$${prod.precio}</th> 
            <td class=""><button id="${prod.id}" class="btnDelete" onclick="deleteCarrito(event)"> ELIMINAR </button></th> 
        </tr>
            `
        );
    });
        $("#carrito").append(`
        <td><h3 class="tituloCarrito">$${total.toFixed(2)} </h3></th>
        <td> <a href="/pago.html"> <button id="" class="btnPagar">PAGAR</button> </a> </th>
        `
        );

        if(total === 0){
             $(".btnPagar").hide();
         } 
         else {
             $(".btnPagar").show();
         }
}

function deleteCarrito(e){
    let id = Number(e.target.id);
	let indexProducto = carrito.findIndex((p) => p.id === id);
	carrito.splice(indexProducto, 1);
	printCarrito(carrito);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	
}
