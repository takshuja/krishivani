import { defineStore } from "pinia";

export const useUploadStore = defineStore('Upload File Store', {
    state: () => ({
        discipline: null,
        file: null,
        fileUrl: null,
        fileProgress: 0,
    }),

    actions: {
        setDiscipline(discipline) {
            this.discipline = discipline;
        },
    }
})