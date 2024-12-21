import { defineStore } from "pinia";
import { firebase_auth, firebase_firestore } from '@/firebase'
import { getDoc, doc, setDoc } from "firebase/firestore";
import { browserLocalPersistence, createUserWithEmailAndPassword, GoogleAuthProvider, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { deleteUser } from "firebase/auth";


export const authStore = defineStore('authStore', {
    state: () => ({
        user: null,
        authStatus: null,
        authMessage: null,
        isAuthenticated: false,
        userData: null,
    }),

    actions: {

        async getAuthStatus() {
            return new Promise((resolve) => {
                firebase_auth.onAuthStateChanged((user) => {
                    if (user) {
                        this.user = user
                        this.isAuthenticated = true;
                    } else {
                        this.user = null;
                        this.isAuthenticated = false;
                    }
                    resolve(user);
                })
            })
        },

        async signUp(firstname, lastname, email, password) {
            await createUserWithEmailAndPassword(firebase_auth, email, password)
                .then(async (userCred) => {
                    this.user = userCred.user;
                    await this.createUser(firstname, lastname, email);
                    setPersistence(firebase_auth, browserLocalPersistence)
                    this.authStatus = true
                    this.isAuthenticated = true;
                    this.authMessage = 'Login Succeded'
                })

        },


        async signUpWithGoogle() {
            const googleAuthProvider = GoogleAuthProvider()

        },
        async logInWithEmail(email, password) {
            await signInWithEmailAndPassword(firebase_auth, email, password)
                .then((userCred) => {
                    this.user = userCred.user;
                    setPersistence(firebase_auth, browserLocalPersistence)
                    this.authStatus = true
                    this.isAuthenticated = true;
                    this.authMessage = 'Login Succeded'
                })
        },


        async createUser(firstname, lastname, email) {

            const collectionName = "users";
            const docId = this.user.email;
            const uid = this.user.uid;
            const data = {
                uid: uid,
                firstname: firstname,
                lastname: lastname,
                email: docId,
                createdAt: new Date(),
            };



            try {

                const docRef = doc(firebase_firestore, collectionName, docId);

                // Check if the doc. exists on the backend
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log(`Document with ID: ${docId} already exists.`)
                } else {
                    // create the doc
                    await setDoc(docRef, data);
                }

                console.log('Document written with ID: ', docRef.id);
            } catch (e) {
                console.errir('Error adding document: ', e);
            }
        },




        async getUser(email) {
            const collectionName = 'users';
            try {
                const docRef = doc(firebase_firestore, collectionName, email);

                // fetch the doc
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    this.userData = docSnap.data();
                } else {
                    console.log('No Document Found!')
                    this.userData = null;
                }
            } catch (e) {
                console.error('Error getting document: ', e.msg);
            }
        },


        async logout() {
            try {
                await firebase_auth.signOut();
                this.user = null;
                this.userData = null;
                this.authStatus = false;
            } catch (err) {
                console.error('ERROR signing out: ', err.msg);
            }
        },


        async deleteUser(uid) {
            try {

                console.log(user);
                // await deleteUser(user);
            } catch (err) {
                console.error(err.msg)
            }
        }

    },
})