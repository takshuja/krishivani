<template>
    <div class="loader-circle flex justify-center items-center">
    </div>
</template>


<style scoped>
.loader-circle {
    width: 1rem;
    height: 1rem;
    border: 2px solid red;
    border-radius: 50%;
    border-top-color: transparent;
    animation: loading-animation 1s linear infinite;
}



@keyframes loading-animation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);

    }
}
</style>