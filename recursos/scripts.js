

        
        
 /* Se encarga de darle una etiqueta 'a' envuelta en una 'strong' a los apellidos de pilotos. 
 La etiqueta anchor a su vez enlaza con la página del piloto.*/


function ponEtiquetas(listaPilotos){

    var parrafos = document.getElementsByClassName("parrafo");

    for(var i = 0; i < parrafos.length; i++){          //Se itera sobre todos los párrafos del documento

        for(var j = 0; j < listaPilotos.length; j++){  //Itera sobre todos los nombres y envuelve las coincidencias con dos etiquetas.
                                                       
            var nombrePiloto = listaPilotos[j];        

            var regex = new RegExp(nombrePiloto, "gi");

            var etiqueta = "<strong><a href='../pilotos/"+nombrePiloto.toLowerCase()+"/piloto.html'>"+nombrePiloto+"</a></strong>";

            parrafos[i].innerHTML = parrafos[i].innerHTML.replace(regex, etiqueta);

        }
    }
}


/* Función encargada de generar la noticia aleatoria */


function noticiaAleatoria(){

    var directorio = window.location.origin; //ruta absoluta de la página

    var directorioNoticias = directorio + "/noticias/noticia"; //ruta donde se encuentran las noticias

    var n = Math.round(Math.random() * (7 - 1)) + 1; //genera un número aleatorio del 1 al 7

    var urlNoticia = directorioNoticias + n + ".html"; //crea la ruta absoluta de la noticia que se va a cargar

    window.open(urlNoticia, "_self"); //abre la noticiia en la pestaña en la que se encuentre
}



/* Colorea las filas de la clasificación de manera salteada*/


function coloreaFilas(){

    var filas = document.getElementsByTagName("tr");

    for(var i = 0; i < filas.length; i++){ //Itera sobre todas las filas de la tabla
        
        if(i % 2 != 0){ //Colorea los índices impares, lo cual en la tabla resulta en que se coloreen las filas pares. (fila 1 -> i = 0, fila 2 -> i = 1 etc.)

            filas[i].style.backgroundColor = "#E9E9E9";

        }
    }
}

/* Redirige a la página del piloto cuando se escribe su apellido y se pulsa enter */

function buscaPiloto(event){

    if(event.keyCode === 13){

        var pilotos = ["hamilton", "bottas", "verstappen", "perez", "norris", "ricciardo", "leclerc", "sainz", "alonso", "ocon",
        "vettel", "stroll", "gasly", "tsunoda", "raikkonen", "giovinazzi", "russell", "latifi", "schumacher", "mazepin"];

        var textoInput = document.getElementById("busqueda").value.trim().toLowerCase();

        if(pilotos.includes(textoInput)){

            window.open("pilotos/"+textoInput+"/piloto.html", "_self");
            
        }
    }
}
