var form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fdn = document.getElementById("fdn").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            date: fdn,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("Solicitud exitosa: ", data)
        }).catch(error => console.error("Error: ", error));

});