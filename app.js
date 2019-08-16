//querySelector accede a cualquier parte de la etiqueta html, ya sea clase o id.
var contenido = document.querySelector('#contenido');

function traer() {
    //Dentro del fetch va la url que queremos ocupar
    fetch('texto.txt')
    .then(data => data.text()) // La primera promeza trae los datos y los transforma en texto (formato que se puede leer) 
    .then(data =>{ // La segunda promesa trae los datos ya transformados y los pinta en consola y en el navegador.
        console.log(data);
        //Creando contenido html con comillas especiales, a través de js
        contenido.innerHTML= `${data}`;
    })

   
}