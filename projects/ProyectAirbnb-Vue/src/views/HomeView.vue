<template>

  <div v-if="$route.params.id = local">
    <InicioView />
  </div>

  <div v-else>
    <Navbar />
    <MainApp />
    <VueApp />
  </div>

</template>

<script>
// @ is an alias to /src

import MainApp from '@/components/MainApp.vue';
import Navbar from '@/components/Navbar.vue';
import VueApp from '@/components/VueFooter.vue';
import InicioView from './usuario/InicioView.vue';

export default {
  name: 'HomeView',
  components: {
    MainApp,
    Navbar,
    VueApp,
    InicioView
  },
  data: () => ({
    local: ''
  }),
  created() {
    let claves = Object.keys(localStorage)

    claves.forEach(clave => {
      localStorage.getItem(clave)
      this.local = clave
    });
  },
}
</script>
