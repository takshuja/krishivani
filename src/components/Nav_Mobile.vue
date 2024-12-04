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
                    <li><router-link :to="{ name: 'home' }">Upload Article</router-link></li>
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
            <div class="hover:cursor-pointer my-8 text-start">
                <router-link :to="{ name: 'profile' }"><i
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i><span
                        class="px-4 text-lg">Profile</span></router-link>
            </div>


        </div>


    </nav>
</template>




<script setup>
import { ref } from 'vue';
import router from '@/router';

const nav_expanded = ref("flex");
const expanded_nav = ref("hidden");
const isExpanded = ref(false);


function toggleResponsiveNav() {
    // if (isExpanded.value) {
    //     nav_expanded.value = "hidden"
    // } else {

    // }

    isExpanded.value = !isExpanded.value

    nav_expanded.value = (isExpanded.value) ? "hidden" : "flex";
    expanded_nav.value = (!isExpanded.value) ? "hidden" : "flex";
    console.log(nav_expanded.value)

}


router.beforeEach(() => {
    toggleResponsiveNav()
})





</script>