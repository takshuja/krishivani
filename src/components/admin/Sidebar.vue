<template>
    <div class="flex justify-between h-screen bg-gray-100 px-8 py-12">




        <!-- Sidebar -->
        <div class="w-full bg-[#111828] text-wtite text-center rounded-3xl flex flex-col justify-between">

            <div>
                <!-- Dashboard Text -->
                <h1 class="text-md font-medium p-4 text-center text-[#AFA68B]">
                    KRISHIVANI ADMIN DASHBOARD
                </h1>
                <!-- Admin Name -->
                <h2 class="text-[#ddd]">
                    Admin Name
                </h2>

                <!-- Navigation Links -->
                <ul class="text-[#838999] text-start font-medium">
                    <li class="p-4 hover:bg-gray-600 cursor-pointer"
                        :class="{ 'bg-gray-700 border-l-4 border-l-white': activeTab == 'dashboard' }"
                        @click="setActiveTab('dashboard')">
                        User Dashboard
                    </li>
                    <li class="p-4 hover:bg-gray-600 cursor-pointer"
                        :class="{ 'bg-gray-700 border-l-4 border-l-white': activeTab == 'details' }"
                        @click="setActiveTab('details')">
                        User Details</li>
                    <li class="p-4 hover:bg-gray-600 cursor-pointer"
                        :class="{ 'bg-gray-700 border-l-4 border-l-white': activeTab == 'articles' }"
                        @click="setActiveTab('articles')">
                        Manage Articles
                    </li>
                </ul>
            </div>
            <!-- Logout -->
            <button class=" mb-5 bg-[#4076B5] hover:bg-blue-500 text-white font-semibold py-2 rounded w-full">
                Logout
            </button>


        </div>

    </div>
</template>


<script>
import { adminStore } from '@/stores/adminStore';


export default {

    setup() {
        const store = adminStore();
        return { store };
    },

    data() {
        return {
            activeTab: this.store.activeTab,
        }
    },

    computed: {
        getActiveTab() {
            return this.store.activeTab;
        }
    },
    methods: {
        setActiveTab(tabName) {
            if (tabName == this.activeTab) return;
            this.activeTab = tabName;
            this.store.activeTab = this.activeTab;
        }
    }
}


</script>