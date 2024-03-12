<template>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
</template>
  
<script>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router' // import router

  
  const router = useRouter() // get a reference to our vue router

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        await signInWithEmailAndPassword(getAuth(), this.email, this.password) // need .value because ref()
      .then((user) => {
        console.log('Successfully logged in!');
        router.push('/') // redirect to the feed
        console.log(user.user)
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
      }
    },
  }
</script>
  