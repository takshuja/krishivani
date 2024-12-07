<template>
    <div class="my-auto">
        <form @submit.prevent="logInWithEmail" class="px-5 flex flex-col lg:w-1/3 md:mx-auto">

            <!-- Login Page Title -->
            <div class="login-heading text-start font-poppins font-large text-xl my-8 lg:text-2xl">
                Log in to your account
            </div>

            <!-- Google O-Auth Button -->
            <div class="login-btn w-full">
                <button
                    class="w-full border border-gray-700 rounded-3xl text-center flex flex-row justify-center items-center gap-4 text-sm py-2 lg:text-lg">
                    <img width="20" src="../../../public/assets/google.png" />
                    Continue with Google
                </button>
            </div>

            <!-- Divider Block -->
            <div class="divider-block flex flex-row my-4 justify-center items-center">
                <hr class="w-1/2 border-t-2 border-gray-300">
                <span class="px-6 text">OR</span>
                <hr class="w-1/2 border-t-2 border-gray-300">
            </div>

            <!-- Input Fields -->
            <div class="input-fields flex flex-col gap-7">
                <div class="input-field flex flex-col text-start">
                    <label for="email">Email address</label>
                    <input type="email" v-model="email" name="email"
                        class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                </div>

                <div class="input-field flex flex-col text-start">
                    <label for="password">
                        <div class="flex flex-row justify-between">
                            Your password
                            <div @click="togglePassword" class="flex flex-row gap-2 justify-center items-center">
                                <i :class="passwordClassName"></i>
                                <label>{{ hideToggleText }}</label>
                            </div>
                        </div>
                    </label>
                    <input :type="inputType" v-model="password" name="password"
                        class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                    <!-- Error Message -->
                    <div v-if="authMessage" class="error-message text-red-500 text-sm mt-2">
                        {{ authMessage }}
                    </div>
                    <div class="mt-4">
                        <span class="forgot-password">Forgot password?</span>
                    </div>
                </div>

            </div>

            <!-- Login Button -->
            <div class="login-btn mt-8">
                <button type="submit" :disabled="loginDisabled"
                    :class="(loginDisabled) ? '' : ' hover:bg-black hover:text-white'"
                    class="border bg-[#bbb] text-white border-gray-300 w-full rounded-full py-2 text-xl">
                    <label v-if="!loginDisabled">Login</label>
                    <div class="justify-center items-center" :class="loginDisabled ? 'flex' : 'hidden'">
                        <LoaderCircle />
                    </div>
                </button>
            </div>

            <hr class="w-full border-t-2 border-gray-300 mt-10">

            <div class="mt-8">
                <label>Don't have an account?</label>
            </div>

            <!-- Signup Button -->
            <div class="signup-btn mt-4">
                <button type="submit" @click="$router.push('/signup')"
                    class="border-2 bg-white text-black border-black w-full rounded-full py-2 text-xl font-medium">
                    Sign up
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { authStore } from '@/stores/authStore';
import { useRouteStore } from '@/stores/routeStore';

export default {
    setup() {
        const store = authStore();
        return { store }
    },
    data() {
        return {
            passwordClassName: "fa-solid fa-eye",
            hideToggleText: "Show",
            inputType: "password",
            email: '',
            password: '',
            loginDisabled: false,
            authMessage: '',
        };
    },
    methods: {
        togglePassword() {
            if (this.passwordClassName === "fa-solid fa-eye-slash") {
                this.hideToggleText = "Show";
                this.passwordClassName = "fa-solid fa-eye";
                this.inputType = "text";
            } else {
                this.hideToggleText = "Hide";
                this.passwordClassName = "fa-solid fa-eye-slash";
                this.inputType = "password";
            }
        },

        validateInput(email, password) {
            const errors = {};

            // Email validation
            if (!email) {
                errors.email = "Email is required.";
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    errors.email = "Invalid email address.";
                }
            }

            // Password validation
            if (!password) {
                errors.password = "Password is required.";
            } else if (password.length < 6) {
                errors.password = "Password must be at least 6 characters long.";
            }

            return errors;
        }
        ,

        async logInWithEmail() {
            const validationErrors = this.validateInput(this.email, this.password);

            if (Object.keys(validationErrors).length > 0) {
                this.authMessage = validationErrors.email || validationErrors.password;
                return;
            }

            try {
                this.loginDisabled = true;
                this.authMessage = '';

                // try logging in the user
                await this.store.logInWithEmail(this.email, this.password);
                if (this.store.user) {
                    this.$router.push(useRouteStore().nextRoute || '/');
                }
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        this.authMessage = 'Invalid email format. Please check you email.';
                        break;
                    case 'auth/invalid-password':
                        this.authMessage = 'Incorrect password. Please try again.';
                        break;
                    case 'auth/user-not-found':
                        this.authMessage = 'No account found with this email.';
                        break;
                    case 'auth/invalid-credential':
                        this.authMessage = 'Invalid credentials. Please try again.';
                        break;
                    default:
                        this.authMessage = 'An unexpected error occurred. Please try again.';
                }
            } finally {
                this.loginDisabled = false;
            }
        }
    },
};
</script>

<style scoped>
* {
    font-family: poppins;
}

.input-field label {
    color: #999;
}

.forgot-password {
    color: black;
    text-decoration: underline;
}

.error-message {
    font-size: 0.875rem;
    /* Optional: Adjust size */
    color: #ff5252;
    /* Error message color */
}
</style>
