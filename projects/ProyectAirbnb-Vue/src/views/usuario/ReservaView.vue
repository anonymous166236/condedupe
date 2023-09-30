<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
        <ReservaUser />
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
import ReservaUser from '@/components/usuario/ReservaUser.vue';

export default {
    name: 'ReservaView',
    components: {
    NavbarUser,
    VueFooter,
    LoginView,
    ReservaUser
},
    data: () => ({
        local: ''
    }),
    created() {
        this.local = $cookies.get("token");
    },
}

</script>