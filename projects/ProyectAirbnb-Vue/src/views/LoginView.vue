<template>
  <Navbar />
  <login />
  <VueFooter />
</template>

<script>
import Login from '@/components/Login.vue'
import Navbar from '@/components/Navbar.vue';
import VueFooter from '@/components/VueFooter.vue';

export default {
  name: 'LoginView',
  components: {
    Login,
    Navbar,
    VueFooter
  },
 
}
</script>
