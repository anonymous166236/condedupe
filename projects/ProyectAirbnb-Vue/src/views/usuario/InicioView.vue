<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
        <AlojamientoUser />
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
import AlojamientoUser from '@/components/usuario/AlojamientoUser.vue';


export default {
    name: 'AlojamientoView',
    components: {
        NavbarUser,
        VueFooter,
        AlojamientoUser,
        LoginView
    },
    data: () => ({
        local: ''
    }),
    created() {
        this.local = $cookies.get("token");
    },
}

</script>