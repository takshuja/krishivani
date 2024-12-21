<template>
    <div>
        <ul>
            <li class="my-2">
                <div class="grid grid-cols-7 text-start gap-x-20">
                    <span>Firstname</span>
                    <span>Email</span>
                    <span>Article</span>
                    <span>Article ID</span>
                    <span>Article Status</span>
                    <span>Article Remarks</span>
                    <span>Payment Status</span>
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
</template>


<script>
export default {
    props: {
        filteredUsers: {

            required: true,
        }
    }
}

</script>