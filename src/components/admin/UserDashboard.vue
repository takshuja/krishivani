<template>




    <div class="px-4 py-12 text-[#767472] border w-full">

        <!-- Heading -->
        <h1 class="font-medium text-start text-2xl">
            Dashboard
        </h1>
        <div class="flex gap-10 items-center justify-start my-10">
            <InfoCard heading="Total Users Registered" :data="usersLength" />
            <InfoCard heading="Total Articles Published" data="1056" />
        </div>

        <div>
            <SearchBar :enableUpdate="true" />
        </div>
    </div>

</template>


<script setup lang="js">
import { computed, onMounted, ref } from 'vue';
import InfoCard from './InfoCard.vue';
import SearchBar from './SearchBar.vue';
import { adminStore } from '@/stores/adminStore';

const store = adminStore()

const isPopupShown = ref(true);


onMounted(async () => await store.getUsers());

const users = computed(() => store.users)
const usersLength = computed(() => store.users.length)

</script>


<style scoped>
.popup {
    backdrop-filter: blur(10px);
}
</style>