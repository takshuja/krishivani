<template>
    <nav class="lg:hidden flex flex-col bg-black text-[#ddd]">
        <div class="justify-between items-center text-xl" :class="navExpanded">
            <label>K R I S H I V A N I</label>
            <span @click="toggleResponsiveNav"> <i class="fa-solid fa-bars"></i></span>
        </div>


        <div class="expanded-nav flex flex-col" :class="expandedNav">
            <div class="flex justify-between items-center text-xl">
                <label>K R I S H I V A N I</label>
                <span @click="toggleResponsiveNav"> <i class="fa-solid fa-xmark"></i></span>
            </div>
            <!-- List Items -->
            <div class="my-8">
                <ul class="text-start text-lg">
                    <li v-for="route in navroutes">
                        <router-link :to="{ name: route.name }">
                            {{ route.label }}
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Article Searchbar -->

            <div class="flex">
                <input type="search" placeholder=" &#x1F50D; Search article"
                    class=" search-input border rounded-md bg-transparent px-2 py-1 w-72">
            </div>

            <!-- Profile icon -->
            <div class="hover:cursor-pointer text-start my-8 flex items-center " v-if="isLoggedIn">
                <router-link :to="{ name: 'profile' }"><i title="profile"
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i></router-link>

                <span class="text-3xl px-4 pt-1 pl-8">
                    <i class="fa-solid fa-right-from-bracket" title="logout" @click="logout"></i>
                </span>
            </div>
            <div v-else class="text-left my-4 border w-fit px-3 py-1 rounded-lg">
                <router-link :to="{ name: 'login' }">Login</router-link>
            </div>


        </div>


    </nav>
</template>


<script setup lang="js">
// Imports
import { authStore } from '@/stores/authStore';
import { computed, onMounted, ref, watch } from 'vue';
import { navRoutes } from '@/utils/routes';
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router';

// Router and route
const route = useRoute();
const router = useRouter();

// constants and variables
const isLoggedIn = computed(() => store.isAuthenticated);
const store = authStore()
const navExpanded = ref('flex')
const expandedNav = ref('hidden')
const isExpanded = ref(false)
const navroutes = navRoutes


// function to toggle navbar visibility
function toggleResponsiveNav() {
    isExpanded.value = !isExpanded.value
    navExpanded.value = isExpanded.value ? "hidden" : "flex"
    expandedNav.value = !isExpanded.value ? "hidden" : "flex"
}


// function to handle logout
async function logout() {
    await store.logout()
    router.push("/")
}


// function to hide navbar on route change
watch(route, (to, from) => {
    if (isExpanded.value) {
        toggleResponsiveNav()
    }
})


onBeforeRouteUpdate(() => {
    isExpanded.value ? toggleResponsiveNav() : null
})


// fetch user data on mount
onMounted(async () => {
    if (isExpanded.value) toggleResponsiveNav()
    if (store.user == null) await store.getUser();
})

</script>