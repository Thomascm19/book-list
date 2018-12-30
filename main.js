//Clase libro
class Libro {
    constructor(titulo, autor, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.id = id;
    }
}

//Manejador de la clase
class UI {
    static desplegarLibro() {
        const LibrosGuardados = [{
                titulo: 'Libro Uno',
                autor: 'Thomas1',
                id: '123'
            },
            {
                titulo: 'Libro Dos',
                autor: 'Thomas2',
                id: '321'
            }
        ];
        const libros = LibrosGuardados;

        libros.forEach((libro) => UI.agregarLibroLista(libro));
    }

    static agregarLibroLista(libro) {

        const lista = document.querySelector('#lista-libro')

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.id}</td>
            <td><a href="#" class="btn btn-danger btn-sm borrar">X</a></td>`;

        lista.appendChild(row);

    }
    //Metodo borrar la fila del libro.
    static borrarCampo(borr) {
        if (borr.classList.contains('borrar')) {
            borr.parentElement.parentElement.remove()
        }
    }

    //Alerta de validacion 
    static mostrarAlerta(mensaje, className){

        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));
        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        //Insertar el div antes de la etiqueta form
        container.insertBefore(div, form);
        //Desaparecer en 3 segundos
        setTimeout(()=> document.querySelector('.alert').remove(),3000);
        
    }

    //Metodo limpiar campos del form
    static limpliarCampos() {
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#id').value = '';
    }


}


//Desplegar libro en el DOM 
document.addEventListener('DOMContentLoaded', UI.desplegarLibro);

//Evento Agregar libro

document.querySelector('#libro-form').addEventListener('submit', (e) => {
    // prevent submit
    e.preventDefault();


    //Obtener datos del formulario
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const id = document.querySelector('#id').value;

    //Validacion del form
    if (titulo === '' || autor === '' || id === '') {

       UI.mostrarAlerta('Complete los campos','danger');
       
    } else {

        //Instanciar libro
        const libro = new Libro(titulo, autor, id);

        //console.log(libro)

        //Añadir el libro a la lista
        UI.agregarLibroLista(libro);

        //Limpiar campos

        UI.limpliarCampos();
    }
});


//document.querySelector('#lista-libro').addEventListener('click', (e) => {
 //   console.log(e.target);
//});