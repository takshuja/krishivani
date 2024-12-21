<template>
    <div>

        <CreateUserPopup :popupShown="popupShown" @popupShown="handlePopupVisibility" />

        <div class="flex gap-4 ">
            <input type="text" v-model="searchQuery" placeholder="Search by Name or email address..."
                class="bg-[#EAEAEA] py-3 px-8 w-4/5 text-lg rounded-xl">
            <button class="bg-[#0758D0] text-white px-8 rounded-xl text-md" v-if="enableUpdate" :popupShown="popupShown"
                @click="popupShown = !popupShown">
                Add User
            </button>
        </div>
        <UsersList :searchQuery="searchQuery" :page="page" />
    </div>
</template>

<script>
import CreateUserPopup from './CreateUserPopup.vue';
import UsersList from './UsersList.vue';

export default {

    created() {
        console.table({
            page: this.page,
        })
    },

    props: {
        enableUpdate: {
            type: Boolean,
            default: false,
        },
        page: {
            type: String,
            default: 'dashboard'
        }
    },
    components: {
        UsersList,
        CreateUserPopup,
    },
    data() {
        return {
            searchQuery: '',
            popupShown: false,
            newUser: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            },
        };
    },
    methods: {
        addUser() {
            console.log('New User Data:', this.newUser);

            // Handle user addition logic here (e.g., API call or updating store)

            // Reset the form and close popup
            this.newUser = { firstname: '', lastname: '', email: '', password: '' };
            this.popupShown = false;
        },
        handlePopupVisibility(value) {
            this.popupShown = value;
        }
    },
};
</script>
