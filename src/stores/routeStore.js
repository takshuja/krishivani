import { defineStore } from "pinia";

export const useRouteStore = defineStore('route store', {
    state: () => {
        return {
            nextRoute: null,
        }
    },

    actions: {
        setNextRoute(route) {
            this.nextRoute = route
            console.log('Route Set')
        },

    }
});