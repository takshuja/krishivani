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
            <SearchBar :enableUpdate="true"  />
        </div>
    </div>




</template>


<style scoped>
.popup {
    backdrop-filter: blur(10px);
}
</style>


<script>
import InfoCard from './InfoCard.vue';
import SearchBar from './SearchBar.vue';
import { adminStore } from '@/stores/adminStore';
export default {
    data() {
        return {
            popupShown: true,
        }
    },
    setup() {
        const store = adminStore();
        return { store };
    },
    components: {
        InfoCard,
        SearchBar,
    },
    async created() {
        await this.store.getUsers();
    },
    computed: {
        users() {
            return this.store.users;
        },
        usersLength() {
            return this.store.users.length;
        }
    },

}
</script>
