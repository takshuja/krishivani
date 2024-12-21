<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="w-1/4 bg-gray-900 text-white flex flex-col justify-between">
            <div>
                <h1 class="text-xl font-bold p-4 text-center">
                    KRISHIVANI ADMIN DASHBOARD
                </h1>
                <h2 class="text-lg text-center mb-4">Admin Name</h2>
                <!-- Navigation Links -->
                <ul class="text-gray-300">
                    <li class="p-4 hover:bg-gray-700 cursor-pointer"
                        :class="{ 'bg-gray-700': activeTab === 'dashboard' }" @click="setActiveTab('dashboard')">
                        User Dashboard
                    </li>
                    <li class="p-4 hover:bg-gray-700 cursor-pointer" :class="{ 'bg-gray-700': activeTab === 'details' }"
                        @click="setActiveTab('details')">
                        User details
                    </li>
                    <li class="p-4 hover:bg-gray-700 cursor-pointer"
                        :class="{ 'bg-gray-700': activeTab === 'articles' }" @click="setActiveTab('articles')">
                        Manage Articles
                    </li>
                </ul>
            </div>
            <!-- Logout -->
            <button class="m-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
                Logout
            </button>
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6">
            <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>

            <!-- Cards -->
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white shadow-md p-6 rounded-lg">
                    <h3 class="text-gray-700">Total Users Registered</h3>
                    <p class="text-4xl font-bold text-gray-800">451</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded-lg">
                    <h3 class="text-gray-700">Total Articles Published</h3>
                    <p class="text-4xl font-bold text-gray-800">1056</p>
                </div>
            </div>

            <!-- Search and User Table -->
            <div class="bg-white shadow-md rounded-lg p-4">
                <div class="flex items-center mb-4">
                    <input type="text" v-model="searchQuery" placeholder="Search by Name or email address..."
                        class="flex-1 border border-gray-300 rounded-lg p-2" />
                    <button @click="search" class="ml-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                        Search
                    </button>
                    <button @click="addUser" class="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Add User
                    </button>
                </div>

                <!-- Table -->
                <table class="w-full table-fixed text-left">
                    <thead>
                        <tr class="text-gray-700">
                            <th class="py-2 w-1/4">Name</th>
                            <th class="py-2 w-1/4">E-mail</th>
                            <th class="py-2 w-1/4">Created</th>
                            <th class="py-2 w-1/4">Signed In</th>
                            <th class="py-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in filteredUsers" :key="index" class="border-t">
                            <td class="py-2">{{ user.name }}</td>
                            <td class="py-2">{{ user.email }}</td>
                            <td class="py-2">{{ user.created }}</td>
                            <td class="py-2">{{ user.signedIn }}</td>
                            <td class="py-2">
                                <button @click="deleteUser(index)" class="text-red-500 hover:text-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: "dashboard",
            searchQuery: "",
            users: [
                { name: "Example Name 1", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 2", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 3", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 4", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 5", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 6", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
                { name: "Example Name 7", email: "example@gmail.com", created: "30/11/2024", signedIn: "5/12/2024" },
            ],
        };
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) =>
                user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        search() {
            console.log("Search Query: ", this.searchQuery);
        },
        addUser() {
            alert("Add User button clicked!");
        },
        deleteUser(index) {
            this.users.splice(index, 1);
        },
    },
};
</script>

<style scoped>
table th,
table td {
    text-align: left;
    padding: 8px;
}
</style>