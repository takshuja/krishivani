<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {{ selectedOption }}
                <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="py-1">

                    <MenuItem v-slot="{ active }" @click="setOption(discipline)" v-for="discipline in disciplines"
                        :key="discipline">
                    <span href="#"
                        :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        {{ discipline }}
                    </span>
                    </MenuItem>

                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="js">
import { reactive } from 'vue';
import { useUploadStore } from '@/stores/uploadStore'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const store = useUploadStore()

var selectedOption = reactive('Choose Discipline');
const disciplines = [
    // "Choose Discipline",
    "Agronomy",
    "Agricultural Economics",
    "Agricultural Extension",
    "Agricultural Engineering",
    "Agricultural Entomology",
    "Agricultural Microbiology",
    "Agricultural Nanotechnology",
    "Genetics and Plant Breeding",
    "Seed Science and Technology",
    "Plant Pathology",
    "Soil Science and Agricultural Chemistry",
    "Horticulture",
    "Environmental Sciences",
    "Forestry",
    "Sericulture",
    "Others"
];


function setOption(discipline) {
    selectedOption = discipline;
    store.setDiscipline(discipline);
}
</script>