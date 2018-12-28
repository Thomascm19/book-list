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
            <td><a href="#" class="btn btn-danger">X</a></td>
        `;

        lista.appendChild(row);
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

    //Instanciar libro
    const libro = new Libro(titulo, autor, id);

    //console.log(libro)

    //Añadir el libro a la lista
    UI.agregarLibroLista(libro);
});