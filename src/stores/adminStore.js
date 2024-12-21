import { firebase_firestore } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { defineStore } from "pinia";

export const adminStore = defineStore('Admin Store', {
    state: () => ({
        activeTab: 'dashboard',
        users: [],
    }),


    actions: {
        setTab(tabName) {
            if (activeTab == tabName) return;
            this.activeTab = tabName;
        },

        async getUsers() {
            try {
                const usersQuery = query(
                    collection(firebase_firestore, 'users'),
                    orderBy('createdAt', 'desc')
                )
                const querySnapshot = await getDocs(usersQuery);
                this.users = querySnapshot.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                }));
            } catch (error) {
                console.error(error.message);
            }

        },


        searchUsers(value) {
            console.log(value)
            if (!this.users.length) return;
            return this.users.filter(user =>
                user.email.toLowerCase().includes(value)
            );
        }
    }
})