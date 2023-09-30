<template><br><br>
    <main class="container">
        <div class="card border-0 shadow">
            <div class="card-body">
                <h2 class="subtitle">
                    Mis reservaciones activas
                </h2><br>
                <div v-if="reserva != null">
                    <div>
                        <h2 class="subtitle">
                            {{ reserva }}
                        </h2><br>
                    </div>
                </div>
                <div v-if="reserva == null">
                <form>
                        <!-- primera  -->
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Fecha Entrada</th>
                                        <th>Fecha Salida</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="dataPago, index in dataPagos" :key="dataPago.idPago">
                                    <tr>
                                        <td>{{index = index + 1}}</td>
                                        <td>{{formatFecha(dataPago.fechaEntrada)}}</td>
                                        <td>{{formatFecha(dataPago.fechaSalida)}}</td>
                                        <td>$ {{dataPago.total}}</td>
                                        <td><a class="btn btn-info"
                                            @click="showModal(dataPago.idPago)"><i class="fas fa-thin fa-eye" aria-hidden="true"></i></a></td>
                                    </tr>                                 
                                </tbody>
                            </table>
                    <!-- Fin de formulario -->
                </form>
                </div>

                <div v-for="dataPago, index in dataPagos" :key="dataPago.idPago">
                    <div v-bind:id="dataPago.idPago" class="modal" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h3 class="title">{{ index = index + 1 }}</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-4" action="#" method="POST">

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Fecha de entrada </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    formatFecha(dataPago.fechaEntrada)
                                            }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Fecha de salida </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    formatFecha(dataPago.fechaSalida)
                                            }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Total</label>
                                            <h6 class="subtitle is-6 has-text-centered">${{dataPago.total}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Nombre servicio</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarNombreServicio(dataPago.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de servicio</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarTipoServicio(dataPago.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Lugar</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarLugarServicio(dataPago.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Anfitrion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarAnfitrionServicio(dataPago.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Contactos</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarContactos(dataPago.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Cuando se reservó: </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    fechaReservo(dataPago.date_create)
                                            }}
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
                </div>

                <h2 class="subtitle">
                    Historial
                </h2><br>
                <div v-if="historial != null">
                    <div>
                        <h2 class="subtitle">
                            {{ historial }}
                        </h2><br>
                    </div>
                </div>
                <div v-if="historial == null">
                <form>
                        <!-- primera  -->
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Fecha Entrada</th>
                                        <th>Fecha Salida</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="dataHistorial, index in dataHistoriales" :key="dataHistorial.idPago">
                                    <tr>
                                        <td>{{index = index + 1}}</td>
                                        <td>{{formatFecha(dataHistorial.fechaEntrada)}}</td>
                                        <td>{{formatFecha(dataHistorial.fechaSalida)}}</td>
                                        <td>$ {{dataHistorial.total}}</td>
                                        <td><a class="btn btn-info"
                                            @click="showModal(dataHistorial.idPago)"><i class="fas fa-thin fa-eye" aria-hidden="true"></i></a></td>
                                    </tr>                                 
                                </tbody>
                            </table>
                    <!-- Fin de formulario -->
                </form>
                </div>
            </div>

            <div v-for="dataHistorial, index in dataHistoriales" :key="dataHistorial.idPago">
                    <div v-bind:id="dataHistorial.idPago" class="modal" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h3 class="title">{{ index = index + 1 }}</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-4" action="#" method="POST">

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Fecha de entrada </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    formatFecha(dataHistorial.fechaEntrada)
                                            }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Fecha de salida </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    formatFecha(dataHistorial.fechaSalida)
                                            }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Total</label>
                                            <h6 class="subtitle is-6 has-text-centered">${{dataHistorial.total}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Nombre servicio</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarNombreServicio(dataHistorial.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de servicio</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarTipoServicio(dataHistorial.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Lugar</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarLugarServicio(dataHistorial.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Anfitrion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarAnfitrionServicio(dataHistorial.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Contactos</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{mostrarContactos(dataHistorial.idServicio)}}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Cuando se reservó: </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    fechaReservo(dataHistorial.date_create)
                                            }}
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
                </div>
            <!-- /Fin de card Filtros -->
        </div><br><br><br><br><br><br><br><br><br><br><br><br> 
    </main>
    <!-- /container -->
</template>

<script>

import moment from 'moment';
import 'moment/locale/es';
import { ref } from '@vue/reactivity';

export default {
    name: 'MisReservasUser',
    data: () => ({
        dataPagos:null,
        dataServicios:null,
        dataTiposHospedajes:null,
        dataHistoriales: null,
        dataAnfitriones: null,
        dataUsuarios: null,
        dataMunicipios: null,
        dataDepartamentos: null,
        dataPaises:null,
        reserva: null,
        historial: null

    }),
    created() {

        let claves = Object.keys(localStorage)
        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.idUsuario = clave
        });

        axios({
                method: 'post',
                url: 'http://api_airbnb.test/misReservas',
                data: {
                    idUsuario: this.idUsuario
                }
            }).then(response => cargarDatos(response)).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })

            const cargarDatos = (result) => {
                this.dataPagos = result.data.misReservas
                this.dataServicios = result.data.servicios
                this.dataTiposHospedajes = result.data.tiposHospedajes
                this.dataHistoriales = result.data.historial
                this.dataAnfitriones = result.data.anfitriones
                this.dataUsuarios = result.data.usuarios
                this.dataMunicipios = result.data.municipios
                this.dataDepartamentos = result.data.departamentos
                this.dataPaises = result.data.paises
                if(result.data.misReservas == ''){
                    this.reserva = 'No hay datos en reservas'
                }else{
                    this.reserva = null
                }

                if(result.data.historial == ''){
                    this.historial = 'No hay datos en el historial'
                }else{
                    this.historial = null
                }
            }
    },

    methods: {
        showModal(id) {
            $("#" + id).modal('show');
        },
        mostrarTipoServicio: function (id){
            let tipoDeServicio
            this.dataServicios.forEach(servicio => {
                if(servicio.idServicio === id){
                    this.dataTiposHospedajes.forEach(tipoHospedaje =>{
                        if(tipoHospedaje.idTipoHospedaje === servicio.idTipoHospedaje){
                            tipoDeServicio =  tipoHospedaje.tipoHospedaje
                        }
                    })
                }
            })

            return tipoDeServicio
        },

        mostrarNombreServicio: function (id){
            let nombreServicio
            this.dataServicios.forEach(servicio => {
                if(servicio.idServicio === id){
                    nombreServicio = servicio.nombre
                }
            })

            return nombreServicio
        },

        mostrarLugarServicio: function (id){
            let municipio
            let departamento
            let pais
            this.dataServicios.forEach(servicio => {
                if(servicio.idServicio === id){
                    this.dataMunicipios.forEach(municipios => {
                        if(servicio.idMunicipio === municipios.idMunicipio){
                            municipio = municipios.municipio
                            this.dataDepartamentos.forEach(departamentos => {
                                if(municipios.idDepartamento === departamentos.idDepartamento){
                                    departamento = departamentos.departamento
                                    this.dataPaises.forEach(paises => {
                                        if(departamentos.idPais === paises.idPais){
                                            pais = paises.pais
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })

            return pais + ', departamento de ' +departamento+', del municipio de '+municipio
        },

        mostrarAnfitrionServicio: function (id){
            let anfitrion
            this.dataServicios.forEach(servicio => {
                if(servicio.idServicio === id){
                    this.dataAnfitriones.forEach(anfitriones => {
                        if(anfitriones.idAnfitrion === servicio.idAnfitrion){
                            this.dataUsuarios.forEach(usuarios => {
                                if(usuarios.idUsuario === anfitriones.idUsuario){
                                    anfitrion = usuarios.nombre +' '+usuarios.apellido 
                                }
                            })
                        }
                    })
                }
            })

            return anfitrion
        },

        mostrarContactos: function (id){
            let email
            let telefono
            this.dataServicios.forEach(servicio => {
                if(servicio.idServicio === id){
                    this.dataAnfitriones.forEach(anfitriones => {
                        if(anfitriones.idAnfitrion === servicio.idAnfitrion){
                            this.dataUsuarios.forEach(usuarios => {
                                if(usuarios.idUsuario === anfitriones.idUsuario){
                                    email = usuarios.email
                                    telefono = usuarios.numeroTelefono
                                }
                            })
                        }
                    })
                }
            })

            return 'Email: ' + email + ' y numero de telefono: ' + telefono
        },



        formatFecha: function(fecha){
            return fecha = moment(fecha).format('L')
        },

        fechaReservo: function(fecha){
            moment.locale('es')
            return fecha = moment(fecha).format('LLLL')
        }
    }
}

</script>