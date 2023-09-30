<template >
    <div class="container">
        <div class="row g-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div v-for="dataServicio in dataServicios" :key="dataServicio.idServicio">
                    <div class="card  border-0 shadow">
                       
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner rounded" style="width: 90%; margin: 0 auto">
                                <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen">
                                    <div v-if="dataServicio.idServicio === dataImagen.idServicio">
                                        <div class="carousel-item active">
                                            <img class="zoom mx-auto d-block card-img-top"
                                                v-bind:src="mostrarFoto(dataImagen.url)" alt="First slide">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="card-body">
                            <h2> {{ dataServicio.nombre }}</h2>

                            <div v-for="dataAnfitrion in dataAnfitriones" :key="dataAnfitrion.idAnfitrion">
                                <div v-for="dataUsuario in dataUsuarios" :key="dataUsuario.idUsuario">
                                    <h5 v-if="dataServicio.idAnfitrion === dataAnfitrion.idAnfitrion && dataAnfitrion.idUsuario === dataUsuario.idUsuario">@{{
                                dataUsuario.nombre+' ' +dataUsuario.apellido
                                }}</h5>
                                </div>
                            </div>


                            <div v-for="dataMunicipio in dataMunicipios" :key="dataMunicipio.idMunicipio">
                                <p v-if="dataServicio.idMunicipio === dataMunicipio.idMunicipio">Municipio: {{
                                        dataMunicipio.municipio
                                }}</p>
                            </div>
                            <p> Publicada: {{getDate(dataServicio.date_create) }}</p>

                            <div class="form-group">
                                <div class="row">

                                    <div class="col-md-6">
                                        <button class="btn btn-primary"
                                            @click.prevent="verServicio(dataServicio.idServicio)">Ver</button>
                                    </div>

                                    <div class="col-md-6">

                                        <button class="btn btn-info"
                                            @click="showModal(dataServicio.idServicio)">Preview</button>
                                    </div><br><br>

                                    <router-link class="btn btn-primary" to="/login">Reservar</router-link>
                                </div>
                            </div>

                           
                            
                        </div>
                    </div>
                    <!--Inicia el modal-->
                    <b-modal v-bind:id="dataServicio.idServicio" class="modal" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h3 class="title">{{ dataServicio.nombre }}</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-4" action="#" method="POST">
                                           
                                        
                                        <div id="carouselExampleIndicators" class="carousel slide"
                                            data-bs-ride="carousel">
                                            <div class="carousel-inner rounded" style="width: 90%; margin: 0 auto">
                                                <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen">
                                                    <div v-if="dataServicio.idServicio === dataImagen.idServicio">
                                                        <div class="carousel-item active">
                                                            <img class="mx-auto zoom"
                                                                v-bind:src="mostrarFoto(dataImagen.url)"
                                                                alt="First slide">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tarifa/Noche</label>
                                            <div v-for="dataTarifa in dataTarifas" :key="dataTarifa.idTarifa">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idTarifa === dataTarifa.idTarifa">${{dataTarifa.precio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de Hospedaje</label>
                                            <div v-for="dataTipoHospedaje in dataTipoHospedajes"
                                                :key="dataTipoHospedaje.idTipoHospedaje">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idTipoHospedaje === dataTipoHospedaje.idTipoHospedaje">
                                                    {{ dataTipoHospedaje.tipoHospedaje }}</h6>
                                            </div>
                                        </div>             

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Municipio</label>
                                            <div v-for="dataMunicipio in dataMunicipios"
                                                :key="dataMunicipio.idMunicipio">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idMunicipio === dataMunicipio.idMunicipio">
                                                    {{ dataMunicipio.municipio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Direccion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ dataServicio.direccion }}
                                            </h6>
                                        </div>                         

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada por</label>
                                            <div v-for="dataAnfitrion in dataAnfitriones"
                                                :key="dataAnfitrion.idAnfitrion">
                                                <div v-if="dataServicio.idAnfitrion === dataAnfitrion.idAnfitrion">
                                                    <div v-for="dataUsuario in dataUsuarios" :key="dataUsuario.idUsuario">
                                                <h6 v-if="dataUsuario.idUsuario === dataAnfitrion.idUsuario">
                                                <div></div>@{{
                                                dataUsuario.nombre+'.'+dataUsuario.apellido
                                                }}</h6>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{getDate(dataServicio.date_create)}}</h6>
                                        </div>
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" aria-label="Close"
                                        data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>

                        </div>
                    </b-modal>

                </div>
            </div>
        </div>

    </div><br><br><br>

</template>
  
<script>
import moment from 'moment';
import 'moment/locale/es';
export default {
    name: 'Alojamiento',
    data: () => ({
        dataServicios: null,
        dataAnfitriones: null,
        dataMunicipios: null,
        dataTarifas: null,
        dataTipoHospedajes: null,
        dataImagenes: null
    }),
    created() {

        axios.get('http://api_airbnb.test/servicios').then(result => {
            this.dataServicios = result.data.servicios
            this.dataAnfitriones = result.data.anfitriones
            this.dataMunicipios = result.data.municipios
            this.dataTarifas = result.data.tarifas
            this.dataTipoHospedajes = result.data.tipoHospedaje
            this.dataUsuarios = result.data.usuarios
            this.dataImagenes = result.data.imagenes

        })

    },
    methods: {
        showModal(id) {
            $("#" + id).modal('show');
        },

        verServicio(idServicio) {
            this.$router.push('/verServicio/' + idServicio)
        },

        getDate: function(fecha){
            moment.locale('es')
            return this.fechaFinal = moment(fecha).fromNow()
        },

        mostrarFoto: function (url) {
            return url
        },

    }
};


</script>

<style scoped>
.container {
    margin-top: 10vh;
}
.zoom:hover {
    transform: scale(1.5); 
    opacity:5;
}
.zoom {
    transition: transform .2s; 
}
</style>