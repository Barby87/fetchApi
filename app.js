//querySelector accede a cualquier parte de la etiqueta html, ya sea clase o id.
var contenido = document.querySelector('#contenido');

function traer() {
    //Dentro del fetch va la url que queremos ocupar
    fetch('https://randomuser.me/api/')
    .then(res => res.json()) // La primera promesa trae los datos y los transforma en texto (formato que se puede leer) 
    .then(data => { // La segunda promesa trae los datos ya transformados y los pinta en consola y en el navegador.
        console.log(data.results[0])
        //Creando contenido html con comillas especiales, a través de js
        contenido.innerHTML= `<img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Hello! My name is ${data.results[0].name.first}</p>
        <p>Cell: ${data.results[0].cell}</p>
        <p>e-mail: ${data.results[0].email}</p>`;
    })
}

