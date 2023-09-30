<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
        <FiltroUser />
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
import FiltroUser from '@/components/usuario/FiltroUser.vue';

export default {
    name: 'FiltroView',
    components: {
        NavbarUser,
        VueFooter,
        LoginView,
        FiltroUser
    },
    data: () => ({
        local: ''
    }),
    created() {
        this.local = $cookies.get("token");
    },
   

}

</script>