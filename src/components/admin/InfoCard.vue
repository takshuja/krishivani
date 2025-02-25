<template>
    <div class="info-card flex flex-col items-start py-8 px-4 rounded-lg w-1/3 gap-4">
        <span class="text-xl font-medium">
            {{ props.heading }}
        </span>

        <span class="text-[#AFA68B] text-4xl font-medium">{{ props.data }}</span>
    </div>
</template>


<style scoped>
.info-card {
    box-shadow: 2px 2px 10px 2px lightgray;
}
</style>

<script setup lang="js">
const props = defineProps({
    heading: String,
    data: String
})

</script>