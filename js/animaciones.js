$(() => {
 animacionTexto();
});

function animacionTexto(){
    const animacion = $(".texto");
    animacion.hide();
    animacion.fadeIn(3000)
}
