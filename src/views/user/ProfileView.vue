<template>
    <div class="flex flex-col px-4 md:px-10">

        <!-- Heading -->
        <div class="flex flex-wrap gap-4 md:gap-10 py-4">
            <!-- Name and email -->
            <div class="grid grid-rows-2 text-start">
                <div class="name text-2xl md:text-3xl text-red-700 font-extrabold">
                    {{ userDetails == null ? 'Loading...' : userDetails.firstname + ' ' + userDetails.lastname }}
                </div>
                <div class="mail font-bold text-md md:text-lg">
                    {{ userDetails == null ? 'Loading...' : userDetails.email }}
                </div>
            </div>

            <!-- Vertical line -->
            <div class="border-l border-black hidden md:block"></div>

            <!-- Articles status -->
            <div class="text-start text-sm md:text-base">
                <div>Articles uploaded: {{ user_details.articles.status.uploaded }}</div>
                <div>Articles under review: {{ user_details.articles.status.review }}</div>
                <div>Articles published: {{ user_details.articles.status.published }}</div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="border-b w-full border-gray-400 my-4">

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border rounded-xl w-full text-left">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="px-4 py-2">Recent Articles</th>
                        <th class="px-4 py-2">Article ID</th>
                        <th class="px-4 py-2">Article Status</th>
                        <th class="px-4 py-2">Payment Status</th>
                        <th class="px-4 py-2">Remarks</th>
                        <th class="px-4 py-2">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in user_details.articles.articles" :key="article.id" class="even:bg-gray-100">
                        <td class="px-4 py-2">{{ article.name }}</td>
                        <td class="px-4 py-2">{{ article.id }}</td>
                        <td class="px-4 py-2">{{ article.status.toUpperCase() }}</td>
                        <td class="px-4 py-2">{{ article.payment_status }}</td>
                        <td class="px-4 py-2">{{ article.remarks ?? '-' }}</td>
                        <td class="px-4 py-2">
                            <a :href="article.url" target="_blank" class="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Note -->
        <div class="border-2 border-rose-950 my-8 text-red-800 text-lg text-start p-4">
            <b>Note*</b>: If you've recently uploaded an article or made any payments, it will be reflected in your
            profile within 24 hours.
        </div>
    </div>
</template>


<script>
import { authStore } from '@/stores/authStore';

export default {
    setup() {
        const store = authStore();
        return { store };
    },
    data() {
        return {
            user_details: {
                articles: {
                    status: {
                        uploaded: 5,
                        review: 3,
                        published: 2,
                    },
                    articles: [
                        {
                            name: 'Example Article 1',
                            id: 'G-221-34',
                            status: 'review',
                            payment_status: 'Pending',
                            remarks: null,
                            url: 'https://example.com',
                        },
                        {
                            name: 'Example Article 2',
                            id: 'G-221-56',
                            status: 'accepted',
                            payment_status: 'Successful',
                            remarks: null,
                            url: 'https://example.com',
                        },
                        {
                            name: 'Example Article 3',
                            id: 'G-221-34',
                            status: 'rejected',
                            payment_status: 'Successful',
                            remarks: 'Plagiarism exceeds 20%',
                            url: 'https://example.com',
                        },
                        {
                            name: 'Example Article 4',
                            id: 'G-221-39',
                            status: 'rejected',
                            payment_status: 'Pending',
                            remarks: '-',
                            url: 'https://example.com',
                        },
                        {
                            name: 'Example Article 5',
                            id: 'G-224-102',
                            status: 'accepted',
                            payment_status: 'Successful',
                            remarks: 'Plagiarism exceeds 20%',
                            url: 'https://example.com',
                        },
                    ],
                },
            },
            user: null,
            userData: {},
        };
    },
    methods: {
        printUser() {
            console.log(this.user);
        },
    },
    async mounted() {
        if (this.store.user == null) await this.store.getAuthStatus();
        if (this.store.userData == null) await this.store.getUser(this.store.user.email);
        this.user = this.store.user;
        this.userData = this.store.userData;
    },

    computed: {
        currentUser() {
            return this.store.user;
        },
        userDetails() {
            return this.userData;
        }
    }
};
</script>


<style scoped>
th {
    background-color: #f2f2f2;
    font-weight: bold;
}
</style>
