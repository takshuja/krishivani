<template>
    <nav class="hidden px-10 m-0 bg-black text-white lg:flex justify-between items-center">
        <div class="logo">
            <router-link to="/"><label class="logo-text text-white font-light text-3xl">K R I S H I V A N
                    I</label></router-link>
        </div>
        <div class="nav-links flex gap-10 items-center justify-between w-fit text-md">
            <router-link v-for="route in navroutes" :to="{ name: route.name }">
                {{ route.label }}
            </router-link>
            <!-- Search Input -->
            <div class="flex">
                <input type="search" placeholder=" &#x1F50D; Search article"
                    class=" search-input border rounded-md bg-transparent px-2 py-1 w-72">
                <!-- <i class="fa-duotone fa-solid fa-magnifying-glass absolute  top-10"></i> -->
            </div>

            <!-- Profile icon -->
            <div class="hover:cursor-pointer flex " v-if="isLoggedIn">
                <router-link :to="{ name: 'profile' }"><i title="profile"
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i></router-link>

                <span class="text-3xl px-4 pt-1 pl-8">
                    <i class="fa-solid fa-right-from-bracket" title="logout" @click="logout"></i>
                    <!-- <i class="fa-light fa-right-from-bracket"></i> -->
                </span>
            </div>
            <div v-else>
                <router-link :to="{ name: 'login' }">Login</router-link>
            </div>

        </div>
    </nav>
</template>

<script>
import { authStore } from '@/stores/authStore';
import { navRoutes } from '@/utils/routes';

export default {
    data() {
        return {
            isLoggedIn: false,
            store: authStore(),
            navroutes: navRoutes,
        }
    },
    async mounted() {
        if (this.store.user == null) await this.store.user;
    },


    computed: {
        isLoggedIn() {
            return this.store.isAuthenticated;
        }
    },

    methods: {
        async logout() {
            await this.store.logout();
            this.$router.push('/');
        }
    }
}

</script>


<style scoped>
.nav-links>li {
    list-style: none;
}
</style>