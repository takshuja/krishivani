<template>
    <nav class="lg:hidden flex flex-col bg-black text-[#ddd]">
        <div class="justify-between items-center text-xl" :class="nav_expanded">
            <label>K R I S H I V A N I</label>
            <span @click="toggleResponsiveNav"> <i class="fa-solid fa-bars"></i></span>
        </div>


        <div class="expanded-nav flex flex-col" :class="expanded_nav">
            <div class="flex justify-between items-center text-xl">
                <label>K R I S H I V A N I</label>
                <span @click="toggleResponsiveNav"> <i class="fa-solid fa-xmark"></i></span>
            </div>
            <!-- List Items -->
            <div class="my-8">
                <ul class="text-start text-lg">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'upload' }">Upload Article</router-link></li>
                    <li><router-link :to="{ name: 'home' }">Publications</router-link></li>
                    <li><router-link :to="{ name: 'about' }">About</router-link></li>
                    <li><router-link :to="{ name: 'home' }">Contact</router-link></li>
                </ul>
            </div>

            <!-- Article Searchbar -->

            <div class="flex">
                <input type="search" placeholder=" &#x1F50D; Search article"
                    class=" search-input border rounded-md bg-transparent px-2 py-1 w-72">
                <!-- <i class="fa-duotone fa-solid fa-magnifying-glass absolute  top-10"></i> -->
            </div>

            <!-- Profile icon -->
            <!-- <div class="hover:cursor-pointer my-8 text-start">
                <router-link :to="{ name: 'profile' }"><i
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i><span
                        class="px-4 text-lg">Profile</span></router-link>
            </div> -->

            <!-- Profile icon -->
            <div class="hover:cursor-pointer text-start my-8 flex items-center " v-if="isLoggedIn">
                <router-link :to="{ name: 'profile' }"><i title="profile"
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i></router-link>

                <span class="text-3xl px-4 pt-1 pl-8">
                    <i class="fa-solid fa-right-from-bracket" title="logout" @click="logout"></i>
                    <!-- <i class="fa-light fa-right-from-bracket"></i> -->
                </span>
            </div>
            <div v-else class="text-left my-4 border w-fit px-3 py-1 rounded-lg">
                <router-link :to="{ name: 'login' }">Login</router-link>
            </div>


        </div>


    </nav>
</template>


<script>
import { authStore } from '@/stores/authStore';

export default {
    data() {
        return {
            isLoggedIn: false,
            store: authStore(),
            nav_expanded: "flex",
            expanded_nav: "hidden",
            isExpanded: false,
        }
    },
    async mounted() {
        if (this.store.user == null) await this.store.user;
        // this.isLoggedIn = this.store.isAuthenticated;
    },


    computed: {
        isLoggedIn() {
            return this.store.isAuthenticated;
        }
    },

    methods: {
        async logout() {
            await this.store.logout();
            // useRouter().clearRoutes();
            this.$router.push('/');
        },
        toggleResponsiveNav() {
            this.isExpanded = !this.isExpanded;
            this.nav_expanded = (this.isExpanded) ? "hidden" : "flex";
            this.expanded_nav = (!this.isExpanded) ? "hidden" : "flex";

        },

    },


    watch: {
        $route(to, from) {
            if (this.isExpanded) {
                this.toggleResponsiveNav();
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            console.log(vm.isExpanded)
        })
    },
    beforeRouteUpdate() {
        console.log('BEFORE ROUTE UPDATE')
        this.isExpanded ? this.toggleResponsiveNav() : null
    },
    mounted() {
        this.isExpanded ? this.toggleResponsiveNav() : null

    },

}

</script>
