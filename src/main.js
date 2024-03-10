import './assets/main.css'
import * as bootstrap from 'bootstrap'
import './style/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD78loxNy3b2tfWnF9Bcsj0ks4FPiTDlEM",
  authDomain: "roll-initiative-a2bee.firebaseapp.com",
  projectId: "roll-initiative-a2bee",
  storageBucket: "roll-initiative-a2bee.appspot.com",
  messagingSenderId: "471396761723",
  appId: "1:471396761723:web:dee8c7bff3e3856d30e2de",
  measurementId: "G-G2SR9XCPL0"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Firebase auth
import { getAuth } from 'firebase/auth';
const auth = getAuth();

const app = createApp(App)

app.use(router)

app.mount('#app')
