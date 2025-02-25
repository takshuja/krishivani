<template>
    <div>
        <ul v-if="page == 'dashboard'">

            <li class="my-2">
                <div class="grid grid-cols-5 text-start gap-x-20">
                    <span>Firstname</span>
                    <span>Lastname</span>
                    <span>Email</span>
                    <span>Created At</span>
                    <span>Edit</span>
                </div>
            </li>
            <li class="my-4">
                <hr class="border-t border-black">
            </li>
            <li v-for="user in filteredUsers" :key="user.id" class="my-1 even:bg-green-50 odd:bg-red-50">
                <div class="grid grid-cols-5 text-start text-xl py-2 my-2 px-1 gap-x-20">
                    <span class="truncate" :title="user.firstname">{{ user.firstname }}</span>
                    <span class="truncate" :title="user.lastname">{{ user.lastname }}</span>
                    <span class="truncate" :title="user.email">{{ user.email }}</span>
                    <span class="truncate">{{ formatTimestamp(user.createdAt) }}</span>
                    <span><u class="text-red-500 hover:cursor-pointer" @click="deleteUser">Delete</u></span>
                </div>
            </li>
        </ul>

        <div v-else-if="page == 'details'">

            <ul>
                <li class="my-2">
                    <div class="grid grid-cols-5 text-start gap-x-20">
                        <span>Firstname</span>
                        <span>Email</span>
                        <span>Uploaded</span>
                        <span>Under Review</span>
                        <span>Published</span>
                    </div>
                </li>
                <li class="my-4">
                    <hr class="border-t border-black">
                </li>
                <li v-for="user in filteredUsers" :key="user.id" class="my-1 even:bg-green-50 odd:bg-red-50">
                    <div class="grid grid-cols-5 text-start text-xl py-2 my-2 px-1 gap-x-20">
                        <span class="truncate" :title="user.firstname">{{ user.firstname }}</span>
                        <span class="truncate" :title="user.email">{{ user.email }}</span>
                        <span class="truncate" :title="user.email">{{ user.uploaded ?? 0 }}</span>
                        <span class="truncate" :title="user.email">{{ user.review ?? 0 }}</span>
                        <span class="truncate" :title="user.email">{{ user.published ?? 0 }}</span>
                        <!-- <span class="truncate" :title="user.lastname">{{ user.lastname }}</span> -->
                    </div>
                </li>
            </ul>

        </div>

        <div v-else>
            <ArticleStatus :filteredUsers="filteredUsers" />
        </div>

        <!-- <div>
            {{ page }}
        </div> -->
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { adminStore as useAdminStore } from '@/stores/adminStore'; // Assuming Pinia
import { authStore as useAuthStore } from '@/stores/authStore';
import ArticleStatus from '@/components/admin/ArticleStatus.vue';

const props = defineProps({
    searchQuery: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        default: 'details',
    },
});

const store = useAdminStore();
const authStore = useAuthStore();

// ✅ Computed property
const filteredUsers = computed(() =>
    store.users.filter(
        (user) =>
            user.firstname.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
);

// ✅ Function for formatting timestamps
const formatTimestamp = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return 'Invalid Date';
    const date = timestamp.toDate();
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
};

// ✅ Async function placeholder for deleting a user
const deleteUser = async () => {
    // TODO: Implement it on the server side and then make a fetch request
};

</script>