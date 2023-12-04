const { createApp } = Vue
    createApp({
    data() {
        return {
            productos:[],
           
            url:'https://mel01981.pythonanywhere.com/productos', 
            error:false,
            cargando:true,
            id:0,
            nombre:"",
            foto:"",
            descripcion:"",
            precio:0,
        }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
            })
            .catch(err => {
                console.error(err);
                this.error=true
            })
        },
        eliminar(producto) {
            const url = this.url+'/' + producto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.json()) 
                .then(res => {
                    location.reload();
                })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                foto:this.foto,
                descripcion: this.descripcion,
                precio: this.precio                
                
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                    })
                }
            },
        created() {
            this.fetchData(this.url)
            },
        }).mount('#app')
