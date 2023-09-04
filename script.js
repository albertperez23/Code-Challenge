document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registro-form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        const data = {
            nombre,
            apellido,
            fechaNacimiento
        };

        // Realizar la solicitud HTTP POST
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Registro exitoso. Consulta la consola para ver la respuesta del servidor.');
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            alert('Ocurrió un error al enviar la solicitud.');
        });
    });
});