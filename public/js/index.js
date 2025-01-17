function traernombre(){
    fetch('/traernombre')
    .then(res => res.json())
    .then(data => {
        document.getElementById('nombre').innerHTML = data.nombre;
    });
}