<template>
    <div class="my-auto">
        <div
            class="lg:grid lg:grid-cols-2 px-5 lg:w-1/2 md:mx-auto lg:border-[0.15rem] lg:py-20 lg:px-10 lg:rounded-3xl">
            <form @submit.prevent="console.log('Button pressed')" class=" flex flex-col ">
                <!-- Sign up Page Title -->
                <div class="login-heading text-start font-poppins font-large text-xl my-4 lg:text-3xl">
                    Create an account
                </div>

                <div class="text-start">
                    <label>Already have an account? <u @click="$router.push('/auth/login')"
                            class="hover:cursor-pointer">Log
                            in</u></label>
                </div>



                <!-- Name Fields -->
                <div class="name-fields grid grid-cols-2 gap-6 mt-6">
                    <div class="text-start flex flex-col gap-1 text-lg text-[#999]">
                        <label for="first-name">
                            First name
                        </label>
                        <input type="text" name="first-name" class="border-2 py-1 border-gray-300 rounded-md p-2">
                    </div>
                    <div class="text-start flex flex-col gap-1 text-lg text-[#999]">
                        <label for="last-name">
                            Last name
                        </label>
                        <input type="text" name="last-name" class="border-2 py-1 border-gray-300 rounded-md p-2">
                    </div>
                </div>


                <!-- Input Fields -->
                <div class="input-fields flex flex-col gap-3 mt-3">
                    <div class="input-field flex flex-col text-start">
                        <label for="email">Email address</label>
                        <input type="email" name="email" class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                    </div>

                    <div class="input-field flex flex-col text-start gap-3">

                        <div class="flex flex-col">
                            <label for="password">
                                Password
                            </label>
                            <input :type="inputType" name="password"
                                class="border-2 border-l-gray-300 rounded-md p-2 h-10">
                        </div>

                        <div class="flex flex-col">
                            <label for="confirm-pw">Confirm Password</label>
                            <input :type="inputType" name="confirm-pw"
                                class="border-2 border-l-gray-300 rounded-md p-2 h-10">
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


                <!-- Login Button -->
                <div class="submit-btn mt-8 flex flex-row justify-between items-center">
                    <div><u @click="$router.push('/auth/login')" class="hover:cursor-pointer">log in
                            instead</u></div>
                    <button type="submit"
                        class="border bg-[#bbb] text-white border-gray-300 w-3/5 rounded-full py-2 text-md">Create an
                        account</button>
                </div>


            </form>

            <div class="m-auto hidden lg:block">
                <img src="../../../public/assets/Illustration.svg" alt="">
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


// const passwordClassName = ref("fa-solid fa-eye")
const isChecked = ref(false);
const hideToggleText = ref('Show')
const inputType = ref('password');
function togglePassword() {
    isChecked.value = !isChecked.value

    inputType.value = isChecked.value ? "text" : "password";
    // if (isChecked.value) {
    //     isChecked.value = !isChecked.value;
    //     inputType.value = "text"
    // } else {
    //     isChecked = "fa-solid fa-eye-slash"
    //     hideToggleText.value = "Hide"
    //     inputType.value = "password"
    // }
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