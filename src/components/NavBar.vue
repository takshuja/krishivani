<template>
    <nav class="hidden px-10 m-0 bg-black text-white lg:flex justify-between items-center">
        <div class="logo">
            <router-link to="/"><label class="logo-text text-white font-light text-3xl">K R I S H I V A N
                    I</label></router-link>
        </div>
        <div class="nav-links flex gap-10 items-center justify-between w-1/2 text-md">
            <router-link to="/">Home</router-link>
            <router-link to="/">Upload Article</router-link>
            <router-link to="/">Publications</router-link>
            <router-link to="about">About</router-link>
            <!-- Search Input -->
            <div class="flex">
                <input type="search" placeholder=" &#x1F50D; Search article"
                    class=" search-input border rounded-md bg-transparent px-2 py-1 w-72">
                <!-- <i class="fa-duotone fa-solid fa-magnifying-glass absolute  top-10"></i> -->
            </div>

            <!-- Profile icon -->
            <div class="hover:cursor-pointer">
                <router-link :to="{ name: 'profile' }"><i
                        class="fa-solid fa-user text-xl border-2 border-white px-2 pt-1 rounded-md"></i></router-link>
            </div>

        </div>
    </nav>
</template>

<script setup>

</script>


<style scoped>
.nav-links>li {
    list-style: none;
}
</style>