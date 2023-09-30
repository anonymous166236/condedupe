<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
        <VerServicioUser />
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
import VerServicioUser from '@/components/usuario/VerServicioUser.vue';

export default {
    name: 'verServicioView',
    components: {
        NavbarUser,
        VueFooter,
        LoginView,
        VerServicioUser
    },
    data: () => ({
        local: ''
    }),
    created() {
        this.local = $cookies.get("token");
    },
}

</script>