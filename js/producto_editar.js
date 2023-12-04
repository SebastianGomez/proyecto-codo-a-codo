console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            foto: "",
            descripcion: "",
            precio: 0,
            url: 'https://mel01981.pythonanywhere.com/productos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id,
                        this.nombre = data.nombre,
                        this.foto = data.foto,
                        this.descripcion = data.descripcion,
                        this.precio = data.precio
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                foto: this.foto,
                descripcion: this.descripcion,
                precio: this.precio,
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
