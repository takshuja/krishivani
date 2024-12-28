<template>
    <div class="flex">
        <Sidebar class="w-1/4" />
        <UserDashboard v-show="activeTab == 'dashboard'" />
        <UserDetails v-show="activeTab == 'details'" />
        <ManageArticles v-show="activeTab == 'articles'" />
    </div>
</template>


<script>
import ManageArticles from '@/components/admin/ManageArticles.vue';
import Sidebar from '@/components/admin/Sidebar.vue';
import UserDashboard from '@/components/admin/UserDashboard.vue';
import UserDetails from '@/components/admin/UserDetails.vue';
import { adminStore } from '@/stores/adminStore';

export default {

    setup() {
        const store = adminStore();
        return { store };
    },

    created() {
        this.activeTab = this.store.activeTab;
    },

    components: {
        Sidebar,
        UserDashboard,
        UserDetails,
        ManageArticles,
    },

    computed: {
        activeTab() {
            return this.store.activeTab;
        }
    },

}
</script>