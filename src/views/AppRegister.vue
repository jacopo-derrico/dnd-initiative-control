<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
</template>
  
<script>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router' // import router
  import { auth } from '../main.js'

  // const router = useRouter() // get a reference to our vue router

  export default {
    data() {
      return {
        email: '',
        password: '',
        router: useRouter()
      }
    },
    methods: {
      async register() {
       await createUserWithEmailAndPassword(getAuth(), this.email, this.password) // need .value because ref()
      .then((user) => {
        console.log('Successfully registered!');
        console.log(user.user);
        this.router.push('/') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
      }
    },
  }
</script>
  