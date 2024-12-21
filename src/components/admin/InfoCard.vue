<template>
    <div class="info-card flex flex-col items-start py-8 px-4 rounded-lg w-1/3 gap-4">
        <span class="text-xl font-medium">
            {{ heading }}
        </span>

        <span class="text-[#AFA68B] text-4xl font-medium">{{ data }}</span>
    </div>
</template>


<style scoped>
.info-card {
    box-shadow: 2px 2px 10px 2px lightgray;
}
</style>

<script>

export default {
    props: [
        'heading',
        'data',
    ]
}

</script>