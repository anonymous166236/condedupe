<template >
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">

      <li>
        <a href="" class="navbar-brand"><img src="../../assets/img/logo.png" class="img-fluid" width="60px"
            height="60px" alt="" /></a>
      </li>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-3">
          <li class="nav-item">
            <router-link style="color: white; font-weight: bold;" class="dropdown-item" to="/alojamientoUser">
              Alojamientos</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: white; font-weight: bold;" to="/filtroUser" class="dropdown-item">Filtros
            </router-link>
          </li>

          <li class="nav-item">
            <router-link style="color: white; font-weight: bold;" to="/MisReservas" class="dropdown-item">Mis Reservas
            </router-link>
          </li>

        </ul>
        <div class="btn-group" role="group">
          <a id="btnGroupDrop1" type="button" class="btn write" data-bs-toggle="dropdown">
            <img src="../../assets/img/linicio.png" class="img-fluid" alt="" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
   
              <router-link  id="btnPerfil" to="/perfil" class="dropdown-item">Perfil </router-link>
          
            </li>
            <li>
              <router-link @click.prevent="eliminar" class="dropdown-item" to="/">Cerrar sesion</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {

  name: 'NavbarUser',

  data: () => ({
    local: '',
   
  }),
  methods: {
    eliminar: function () {

      let claves = Object.keys(localStorage)

      claves.forEach(clave => {
        localStorage.removeItem(clave);
        $cookies.remove("token");
        this.local = clave
      });


    },


  }

};
</script>

<style scoped>
#btnAlojamiento {
  color: white;
}


img {
  width: 60px;
  height: 50px;
}
</style>