<template>
    <!-- PopUp -->
    <div v-if="isPopupShown" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <!-- Heading -->
            <h2 class="text-lg font-bold text-gray-800 mb-4">Add New User</h2>

            <!-- Form -->
            <form @submit.prevent="addUser">
                <div class="mb-4">
                    <label for="firstname" class="block text-sm font-medium text-gray-700 mb-2">Firstname</label>
                    <input id="firstname" type="text" v-model="newUser.firstname"
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-emerald-600 focus:outline-none"
                        placeholder="Enter firstname" required />
                </div>
                <div class="mb-4">
                    <label for="lastname" class="block text-sm font-medium text-gray-700 mb-2">Lastname</label>
                    <input id="lastname" type="text" v-model="newUser.lastname"
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-emerald-600 focus:outline-none"
                        placeholder="Enter lastname" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input id="email" type="email" v-model="newUser.email"
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-emerald-600 focus:outline-none"
                        placeholder="Enter email" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input id="password" type="password" v-model="newUser.password"
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-emerald-600 focus:outline-none"
                        placeholder="Enter password" required />
                </div>

                <!-- Buttons -->
                <div class="flex justify-between items-center">
                    <button type="button" @click="closePopup"
                        class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Cancel
                    </button>
                    <button type="submit" class="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
                        Add User
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>


<script>
import { authStore } from '@/stores/authStore';

export default {
    props: ['popupShown'],
    setup() {
        const store = authStore();
        return { store };
    },
    data() {
        return {
            newUser: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async addUser() {
            try {
                await this.store.signUp(
                    this.newUser.firstname,
                    this.newUser.lastname,
                    this.newUser.email,
                    this.newUser.password,
                )
            } catch (e) {
                console.error(e.msg)
            }

            this.closePopup()
        },
        closePopup() {
            this.$emit('popupShown', false);
        }
    },

    computed: {
        isPopupShown() {
            return this.popupShown;
        }
    }
}

</script>