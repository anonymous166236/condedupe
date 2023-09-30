<template >
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">

      <li>
        <router-link to="/">
          <a class="navbar-brand"><img src="../assets/img/logo.png" class="img-fluid" width="60px" height="60px" alt="" /></a>
        </router-link>
      </li>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-3">
           <li class="nav-item">
              <router-link style="color: white; font-weight: bold;"  id="btnExperiencias" class="dropdown-item" to="/alojamiento">Alojamientos</router-link>
          </li>
          <li class="nav-item">
            <router-link  style="color: white; font-weight: bold;" id="btnExperiencias" class="dropdown-item" to="#">Experiencias</router-link>
          </li>
        </ul>
        <div class="btn-group" role="group">
          <a id="btnGroupDrop1" type="button" class="btn write" data-bs-toggle="dropdown">
            <img src="../assets/img/linicio.png" class="img-fluid" alt="" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="">Registrarse</a>
            </li>
            <li>
              <a class="dropdown-item" target="_blank" href="http://proyect_airbnb.test/auth/registro-anfitrion">Hazte anfitrión</a>
            </li>
            <li>
              <router-link class="dropdown-item" to="/login">Inicar sesion</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  setup() { },
};
</script>

<style scoped>

#btnAlojamiento{
  color: white;
}


img {
  width: 60px;
  height: 50px;
}
</style>