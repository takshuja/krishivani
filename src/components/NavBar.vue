<script setup>

</script>

<template>
    <nav class="px-10 m-0 bg-black text-white flex justify-between">
        <div class="logo">
            <router-link to="/"><label class="logo-text">Article</label></router-link>
        </div>
        <div class="nav-links flex gap-4">
            <router-link to="about">About</router-link>
            <router-link to="">Contact</router-link>
            <router-link to="">Support</router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav-links>li {
    list-style: none;
}
</style>