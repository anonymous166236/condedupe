<template>
  <Navbar />
  <Alojamiento />
  <VueFooter />
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import VueFooter from '@/components/VueFooter.vue';
import Alojamiento from '@/components/Alojamiento.vue';

export default {
  name: 'AlojamientoView',
  components: {
    Navbar,
    VueFooter,
    Alojamiento
}
}
</script>