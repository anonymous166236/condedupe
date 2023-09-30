<template><br><br><br><br>

    <div class="row">
        <div class="col-md-4 offset-md-4"><br><br>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true">Perfil</a>
                </li>
            </ul>

          

            <div v-for="dataUsuario in dataUsuarios" :key="dataUsuario.idUsuario" class="tab-content" id="myTabContent">
                <br>
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="form-row">
                        <div class="col-5 justify-content-center mx-auto">

                            <img class="img-thumbnail" v-bind:src="mostrarFoto(dataUsuario.foto)" alt="">

                        </div><br>

                        <div class="form-group row">
                            <div class="col-12">
                                <label for="nombres">
                                    <h5>Nombres</h5>
                                </label>
                                <input disabled type="text" class="form-control"
                                    v-bind:value="dataUsuario.nombre + ' ' + dataUsuario.apellido"><br>
                            </div>

                            <div class="col-6">
                                <label for="email">
                                    <h5>Email</h5>
                                </label>
                                <input disabled type="email" class="form-control" v-bind:value="dataUsuario.email"><br>
                            </div>

                            <div class="col-6">
                                <label for="telefono">
                                    <h5>Telefono</h5>
                                </label>
                                <input disabled type="text" class="form-control"
                                    v-bind:value="dataUsuario.numeroTelefono"><br>
                            </div>

                            <div class="col-6">
                                <label for="username">
                                    <h5>Username</h5>
                                </label>
                                <input disabled type="text" class="form-control" v-bind:value="dataUsuario.username">
                                <br><br>
                            </div>

                            <div class="col-6">
                                <label for="fecha de registro">
                                    <h5>Fecha de registro</h5>
                                </label>
                                <input disabled type="text" class="form-control" v-bind:value="fechaSeUnio(dataUsuario.date_create)">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>

</template>

<script>
import moment from 'moment';
import 'moment/locale/es';

export default {

    name: 'PerfilUser',

    data: () => ({
        idUsuario: '',
        dataUsuarios: null,
        dataAnfitriones: null,

    }),

    created() {

        let claves = Object.keys(localStorage)

        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.idUsuario = clave
        });

        axios.get('http://api_airbnb.test/usuarios/' + this.idUsuario).then(result => {
            this.dataUsuarios = result.data.usuario
            this.dataAnfitriones = result.data.anfitrion

        })
    },

    methods: {
        mostrarFoto: function (url) {
            return 'http://proyect_airbnb.test' + url
        },

        fechaSeUnio: function(fecha){
            moment.locale('es')
            return fecha = moment(fecha).format('LL')
        }

    }
};


</script>