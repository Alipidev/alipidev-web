// Función para cargar el footer
function cargarComponente(archivo, idDestino, callback){
    fetch(archivo)
        .then(function(respuesta){
            return respuesta.text();
        })
        .then(function(html){
            document.getElementById(idDestino).innerHTML = html;

            // Ejecuta la función callback despues de insertar el componente
            if(callback) callback();
        });
}

cargarComponente('../components/footer.html','mi-footer');