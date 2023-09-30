<template>

    <main class="container">

        <div class="card  border-0 shadow">
            <div class="card-body">
                <h2 class="subtitle">
                    Filtros de Hospedajes
                </h2><br>

                <form>
                    <!-- primera fila -->
                    <div class="form-group">
                        <div class="row">

                            <!-- primera  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Desde: ${{ precioInicio }}</label>
                                <div class="slider-wrapper">
                                    <input type="range" min="0" max="300" v-model="precioInicio" step="1">
                                </div>
                            </div>

                            <!-- Segunda  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Hasta ${{ precioFinal }}</label>
                                <div class="slider-wrapper">

                                    <input type="range" v-bind:min="precioInicio" max="5000" v-model="precioFinal"
                                        step="1">
                                </div>
                            </div>

                            <!-- tercera  -->
                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Anfitriones:</h4>
                                    <select class="form-select" v-model="idAnfitrion" id="idAnfitrion">
                                        <option value="all" selected>Todos</option>
                                        <option v-for="dataAnfitrion in dataAnfitrionesSelect"
                                            :key="dataAnfitrion.idAnfitrion" :value="dataAnfitrion.idAnfitrion">
                                            {{ mostrarAnfitrionSelect(dataAnfitrion.idUsuario) }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- tercera  -->
                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Categorias:</h4>
                                    <select class="form-select" v-model="idTipoHospedaje" id="idTipoHospedaje">
                                        <option value="all">Todas</option>
                                        <option v-for="dataTipoHospedaje in dataTipoHospedajesSelect"
                                            :key="dataTipoHospedaje.idTipoHospedaje"
                                            :value="dataTipoHospedaje.idTipoHospedaje">
                                            {{ dataTipoHospedaje.tipoHospedaje }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- Cuarta  -->
                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Paises:</h4>
                                    <select @change="paisOnChange()" class="form-select" name="idPais" v-model="idPais" id="idPais">
                                        <option value="all" selected>Todos</option>
                                        <option v-for="paises in dataPaises" :key="paises.idPais" v-bind:value="paises.idPais">{{paises.pais}}
                                        </option>
                                    </select><br>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Departamentos:</h4>
                                    <select @change="departamentoOnChange()" class="form-select" name="idDepartamento" v-model="idDepartamento" id="idDepartamento">
                                        <option value="all">Todos</option>
                                        <option v-for="departamentos in dataDepartamentos" :key="departamentos.idDepartamento" v-bind:value="departamentos.idDepartamento">{{departamentos.departamento}}
                                        </option>
                                    </select><br>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Municipios:</h4>
                                    <select class="form-select" v-model="idMunicipio" id="idMunicipio">
                                        <option value="all">Todos</option>
                                        <option v-for="dataMunicipio in dataMunicipiosSelect" :key="dataMunicipio.idMunicipio"
                                            :value="dataMunicipio.idMunicipio">
                                            {{ dataMunicipio.municipio }}
                                        </option>
                                    </select><br>
                                </div>
                            </div>

                            <!-- Boton de filtrar -->
                            <div class="text-center mt-6">
                                <div class="control">
                                    <button v-if="precioInicio != null && precioFinal != null && idAnfitrion != null && idTipoHospedaje != null && idMunicipio != null" 
                                        @click.prevent="enviarData" class="btn btn-primary">Filtrar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- Fin de formulario -->
                </form>
            </div>
        </div>

        <div v-if="respuesta != null">
            <div>
                <h2 class="subtitle">
                    {{ respuesta }}
                </h2><br>
            </div>
        </div>

        <div>
            <div v-if="respuesta == null" class="row row-cols-1 row-cols-md-4 g-4">
                <div v-for="dataServicio in dataServicios" :key="dataServicio.idServicio">
                    <div class="card border-0 shadow">

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
                            <h2> {{ dataServicio.nombre }} </h2>

                            <div>
                                <h5>@{{
                                        mostrarAnfitrion(dataServicio.idAnfitrion)
                                }}</h5>
                            </div>


                            <div>
                                <p>Municipio: {{
                                        mostrarMunicipio(dataServicio.idMunicipio)
                                }}</p>
                            </div>
                            <p> Publicada: {{ getDate(dataServicio.date_create) }}</p>

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

                                    <button class="btn btn-success"
                                        @click.prevent="reservar(dataServicio.idServicio)">Reservar</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!--Inicia el modal-->
                    <div v-bind:id="dataServicio.idServicio" class="modal" tabindex="-1" role="dialog"
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
                                            <div>
                                                <h6 class="subtitle is-6 has-text-centered">
                                                    ${{ mostrarTarifa(dataServicio.idTarifa) }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de Hospedaje</label>
                                            <div>
                                                <h6 class="subtitle is-6 has-text-centered">
                                                    {{ mostrarTipoHospedaje(dataServicio.idTipoHospedaje) }}</h6>
                                            </div>
                                        </div>


                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Municipio</label>
                                            <div>
                                                <h6 class="subtitle is-6 has-text-centered">
                                                    {{ mostrarMunicipio(dataServicio.idMunicipio) }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Direccion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ dataServicio.direccion }}
                                            </h6>
                                        </div>

                                    

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada por</label>
                                            <div>
                                                <h6>@{{
                                                        mostrarAnfitrion(dataServicio.idAnfitrion)
                                                }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ getDate(dataServicio.date_create) }}
                                            </h6>
                                        </div>
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" aria-label="Close"
                                        data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <!-- /Fin de card Filtros -->

            </div>
            <br><br><br><br>
        </div>

    </main>

    <!-- /container -->

</template>
  
<script>
import moment from 'moment';
import 'moment/locale/es';
import { ref } from '@vue/reactivity';

export default {
    name: 'FiltroUser',

    data() {
        //const idUsuario = ref('')
        const precioInicio = ref('')
        const precioFinal = ref('')
        const idAnfitrion = ref('')
        const idMunicipio = ref('')
        const fechaSalida = ref('')
        const idTipoHospedaje = ref('')
        const idPais = ref('')
        const idDepartamento = ref('')

        return {
            precioInicio: precioInicio.value,
            precioFinal: precioFinal.value,
            idAnfitrion: idAnfitrion.value,
            idMunicipio: idMunicipio.value,
            idTipoHospedaje: idTipoHospedaje.value,
            idPais: idPais.value,
            idDepartamento: idDepartamento.value,
        }
    },

    data: () => ({
        dataAnfitrionesSelect: null,
        dataMunicipiosSelect: null,
        dataTipoHospedajesSelect: null,
        dataServicios: null,
        dataAnfitriones: null,
        dataMunicipios: null,
        dataTarifas: null,
        dataTipoHospedajes: null,
        dataUsuarios: null,
        dataImagenes: null,
        respuesta: null,
        idUsuario: null,
        dataPaises: null,
        dataDepartamentos:null,
    }),
    created() {
        let claves = Object.keys(localStorage)
        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.idUsuario = clave
        });

        axios({
                method: 'post',
                url: 'http://api_airbnb.test/filtro',
                data: {
                    idUsuario: this.idUsuario
                }
            }).then(response => cargarDatos(response)).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })

            const cargarDatos = (result) => {
                this.dataAnfitrionesSelect = result.data.anfitriones
                this.dataTipoHospedajesSelect = result.data.tipoHospedaje
                this.dataUsuarios = result.data.usuarios
                this.dataPaises = result.data.paises
            }

    },

    methods: {

        showModal(id) {
            $("#" + id).modal('show');
        },

        reservar(idServicio) {
            this.$router.push('/reservar/' + idServicio)
        },

        verServicio(idServicio) {
            this.$router.push('/verServicio/' + idServicio)
        },

        mostrarFoto: function (url) {
            return url
        },
        getDate: function (fecha) {
            moment.locale('es')
            return this.fechaFinall = moment(fecha).fromNow()
        },

        mostrarAnfitrionSelect: function(idUsuario){
            let anfitrion
            this.dataUsuarios.forEach(usuarios => {  
                if(usuarios.idUsuario == idUsuario){
                    anfitrion = usuarios.nombre +' ' + usuarios.apellido
                }
            })
            return anfitrion 
        },

        mostrarAnfitrion: function(idAnfitrion){
            let anfitrion
            this.dataAnfitriones.forEach(anfitriones => {
                if(anfitriones.idAnfitrion == idAnfitrion){
                    this.dataUsuarios.forEach(usuarios => {
                        if(usuarios.idUsuario == anfitriones.idUsuario){
                            anfitrion = usuarios.nombre +' ' + usuarios.apellido
                        }
                    })
                }
            })
            return anfitrion
        },

        mostrarMunicipio: function(idMunicipio){
            let municipio
            this.dataMunicipios.forEach(municipios => {
                if(municipios.idMunicipio == idMunicipio){
                    municipio = municipios.municipio
                }
            })
            return municipio
        },

        mostrarTarifa: function(idTarifa){
            let tarifa 
            this.dataTarifas.forEach(tarifas => {
                if(tarifas.idTarifa == idTarifa){
                    tarifa = tarifas.precio
                }
            })
            return tarifa
        },

        mostrarTipoHospedaje: function(idTipoHospedaje){
            let tipoHospedaje
            this.dataTipoHospedajes.forEach(tiposHospedajes => {
                if(tiposHospedajes.idTipoHospedaje == idTipoHospedaje){
                    tipoHospedaje = tiposHospedajes.tipoHospedaje
                }
            })
            return tipoHospedaje
        },

        enviarData: function () {
            axios({
                method: 'post',
                url: 'http://api_airbnb.test/filtros',
                data: {
                    precioInicio: this.precioInicio,
                    precioFinal: this.precioFinal,
                    idAnfitrion: this.idAnfitrion,
                    idMunicipio: this.idMunicipio,
                    idTipoHospedaje: this.idTipoHospedaje,
                    nombre: '',
                    idUsuario: this.idUsuario,

                }
            }).then(response => getData(response)).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })

            const getData = (result) => {
                console.log(result)
                if (result.data.servicios == null) {
                    this.respuesta = 'No se encontraron resultados.'
                }
                else {
                    this.dataServicios = result.data.servicios
                    this.dataAnfitriones = result.data.anfitriones
                    this.dataMunicipios = result.data.municipios
                    this.dataTarifas = result.data.tarifas
                    this.dataTipoHospedajes = result.data.tipoHospedaje
                    this.dataUsuarios = result.data.usuarios
                    this.dataImagenes = result.data.imagenes
                    this.respuesta = null;
                }

            }
        },

        paisOnChange: function(){
            if(this.idPais == 'all'){
                this.dataDepartamentos = null
                this.dataMunicipiosSelect = null
            }else{
                axios.get('http://api_airbnb.test/departamentos/'+this.idPais,{
                }).then(response => cargarDepartamentos(response)).catch(function (error) {
                    swal("¡Error!", "Ingresa los datos correctamente", "error");
                })

                const cargarDepartamentos = (result) => {
                    this.dataDepartamentos = result.data.departamentos
                }
            }
        },

        departamentoOnChange: function(){
            if(this.idDepartamento == 'all'){
                this.dataMunicipiosSelect = null
            }else{
                axios.get('http://api_airbnb.test/municipios/'+this.idDepartamento,{
                }).then(response => cargarMunicipios(response)).catch(function (error) {
                    swal("¡Error!", "Ingresa los datos correctamente", "error");
                })

                const cargarMunicipios = (result) => {
                    this.dataMunicipiosSelect = result.data.municipios
                }
            }
        }

    },

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