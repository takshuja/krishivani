<template>
    <div class="my-auto">
        <form @submit.prevent="console.log('Button pressed')" class="px-5 flex flex-col lg:w-1/3 md:mx-auto">
            <!-- Login Page Title -->
            <div class="login-heading text-start font-poppins font-large text-xl my-8 lg:text-2xl">
                Log in to your account
            </div>

            <!-- Google O-Auth Button -->
            <div class="login-btn w-full">
                <button
                    class=" w-full border border-gray-700 rounded-3xl text-center flex flex-row justify-center items-center gap-4 text-sm py-2  lg:text-lg">
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
                    <input type="email" name="email" class="border-2 border-l-gray-300 rounded-md p-2 h-10">
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
                    <input :type="inputType" name="password" class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                    <div class="mt-4">
                        <span class="forgot-password">Forgot password?</span>
                    </div>
                </div>
            </div>


            <!-- Login Button -->
            <div class="login-btn mt-8">
                <button type="submit"
                    class="border bg-[#bbb] text-white border-gray-300 w-full rounded-full py-2 text-xl">Login</button>
            </div>

            <hr class="w-full border-t-2 border-gray-300 mt-10">


            <div class="mt-8">
                <label>Don't have an account?</label>
            </div>

            <!-- Signup Button -->
            <div class="signup-btn mt-4">
                <button type="submit" @click="$router.push('/auth/signup')" class=" border-2 bg-white text-black border-black w-full rounded-full py-2 text-xl
                    font-medium">Sign
                    up</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const passwordClassName = ref("fa-solid fa-eye")
const hideToggleText = ref('Show')
const inputType = ref('password');
function togglePassword() {
    if (passwordClassName.value == "fa-solid fa-eye-slash") {
        hideToggleText.value = "Show"
        passwordClassName.value = "fa-solid fa-eye";
        inputType.value = "text"
    } else {
        passwordClassName.value = "fa-solid fa-eye-slash"
        hideToggleText.value = "Hide"
        inputType.value = "password"
    }
}

</script>

<style>
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
</style>