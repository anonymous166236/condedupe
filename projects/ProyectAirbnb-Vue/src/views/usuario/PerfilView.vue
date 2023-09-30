<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
       <perfil-user />
        <VueFooter />
    </div>

    <div v-else>
        <LoginView />
    </div>

</template>

<script>
import NavbarUser from '@/components/usuario/NavbarUser.vue';
import VueFooter from '@/components/VueFooter.vue';
import LoginView from '../LoginView.vue';
import PerfilUser from '@/components/usuario/PerfilUser.vue';


export default {
    name: 'AlojamientoView',
    components: {
        NavbarUser,
        VueFooter,
        LoginView,
        PerfilUser,
    },
    data: () => ({
        local: ''
    }),
    created() {
        this.local = $cookies.get("token");
    },
}

</script>