<template>
    <div class="my-auto">
        <div
            class="lg:grid lg:grid-cols-2 px-5 lg:w-1/2 md:mx-auto lg:border-[0.15rem] lg:py-20 lg:px-10 lg:rounded-3xl">
            <form @submit.prevent="signUpWithEmailAndPassword" class=" flex flex-col ">
                <!-- Sign up Page Title -->
                <div class="login-heading text-start font-poppins font-large text-xl my-4 lg:text-3xl">
                    Create an account
                </div>

                <div class="text-start">
                    <label>Already have an account? <u @click="$router.push('/login')" class="hover:cursor-pointer">Log
                            in</u></label>
                </div>



                <!-- Name Fields -->
                <div class="name-fields grid grid-cols-2 gap-6 mt-6">
                    <div class="text-start flex flex-col gap-1 text-lg text-[#999]">
                        <label for="first-name">
                            First name
                        </label>
                        <input type="text" v-model="firstname" name="first-name"
                            class="border-2 py-1 border-gray-300 rounded-md p-2">
                    </div>
                    <div class="text-start flex flex-col gap-1 text-lg text-[#999]">
                        <label for="last-name">
                            Last name
                        </label>
                        <input type="text" v-model="lastname" name="last-name"
                            class="border-2 py-1 border-gray-300 rounded-md p-2">
                    </div>
                </div>


                <!-- Input Fields -->
                <div class="input-fields flex flex-col gap-3 mt-3">
                    <div class="input-field flex flex-col text-start">
                        <label for="email">Email address</label>
                        <input type="email" v-model="email" name="email"
                            class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                    </div>

                    <div class="input-field flex flex-col text-start gap-3">

                        <div class="flex flex-col">
                            <label for="password">
                                Password
                            </label>
                            <input :type="inputType" name="password" v-model="password"
                                class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                        </div>

                        <div class="flex flex-col">
                            <label for="confirm-pw">Confirm Password</label>
                            <input :type="inputType" name="confirm-pw" v-model="confirmPw"
                                class="border-2 border-l-gray-300 rounded-md p-2 h-10">

                            <!-- Error Message -->
                            <div v-if="authMessage" class="error-message text-red-500 text-sm mt-2">
                                {{ authMessage }}
                            </div>
                        </div>
                        <div class="mt-4">
                            <span class="text-[#999]">Use 8 or more characters with a mix of letters, numbers and
                                symbols</span>
                        </div>
                    </div>
                </div>


                <!-- Show Pw -->
                <div class="toggle-show-pw text-start mt-3 flex flex-row justify-start items-center">
                    <input type="checkbox" id="toggle-pw" name="toggle-pw" class="accent-black w-4 h-4"
                        :checked="isChecked" @change="togglePassword">
                    <label for="toggle-pw" class="px-2">Show Password</label>
                </div>


                <!-- Signup Button -->
                <div class="submit-btn mt-8 flex flex-row justify-between items-center">
                    <button type="submit" :disabled="signupDisabled"
                        :class="(signupDisabled) ? '' : 'hover:bg-black hover:text-white'"
                        class="border bg-[#bbb] text-white border-gray-300 w-3/5 rounded-full py-2 text-md">
                        <label v-if="!signupDisabled">Create account</label>
                        <div class="justify-center items-center" :class="signupDisabled ? 'flex' : 'hidden'">
                            <LoaderCircle />
                        </div>
                    </button>
                </div>
            </form>

            <div class="m-auto hidden lg:block">
                <img src="../../../public/assets/Illustration.svg" alt="">
            </div>

        </div>
    </div>
</template>



<script>
import { authStore } from '@/stores/authStore';
import { useRouteStore } from '@/stores/routeStore';
import { checkPassword } from '@/utils';


export default {
    setup() {
        const store = authStore();
        return { store }
    },
    data() {
        return {

            isChecked: false,
            inputType: 'password',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPw: '',
            authMessage: '',
            user: null,
            signupDisabled: false,
        }
    },

    methods: {



        async signUpWithEmailAndPassword() {
            const checkPw = checkPassword(this.password, this.confirmPw);
            if (!checkPw.is_valid) {
                console.error(checkPw.msg);
                return;
            }
            try {
                this.signupDisabled = true;
                await this.store.signUp(this.firstname, this.lastname, this.email, this.password)
                if (this.store.user) {
                    this.user = this.store.user;
                    this.$router.push(useRouteStore().nextRoute || '/');
                }

            } catch (error) {
                this.signupDisabled = false;
                switch (error.code) {
                    case "auth/email-already-in-use":
                        this.authMessage = "The email address is already in use by another account.";
                        break;
                    case "auth/invalid-email":
                        this.authMessage = "The email address is badly formatted.";
                        break;
                    case "auth/operation-not-allowed":
                        this.authMessage = "Email/password accounts are not enabled. Enable them in the Firebase Console.";
                        break;
                    case "auth/weak-password":
                        this.authMessage = "The password must be at least 6 characters long.";
                        break;
                    case "auth/network-request-failed":
                        this.authMessage = "A network error occurred. Please check your internet connection.";
                        break;
                    case "auth/internal-error":
                        this.authMessage = "An internal error occurred. Try again later.";
                        break;
                    case "auth/too-many-requests":
                        this.authMessage = "Too many attempts. Please try again later.";
                        break;
                    default:
                        this.authMessage = `An unknown error occurred: ${error.message}`;
                }

            }
        },
        togglePassword() {
            this.isChecked = !this.isChecked
            this.inputType = this.isChecked ? "text" : "password"
        }
    }

}

</script>

<style>
* {
    font-family: poppins;
    user-select: none;
    -moz-user-select: none;
}

.input-field label {
    color: #999;
}

.forgot-password {
    color: black;
    text-decoration: underline;
}
</style>