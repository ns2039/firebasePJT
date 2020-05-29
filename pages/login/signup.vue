<template>
  <div class="container mt-5 text-center">
    <h1>SIGNUP</h1>
    <form>
      <div class="form-group">
        <!-- v-model="email"追加  -->
        <input v-model="email" type="text" class="form-control"  placeholder="Email address">
        <!--  v-model="password追加 -->
        <input v-model="password" type="text" class="form-control" placeholder="Password">
         <!-- アラート機能 -->
        <p class="errorMessage" v-if="valid" style="color:red">{{ validError }}</p>
      </div>
    </form>
    <!-- @click="signUp()"追加 -->
    <button @click="signUp()" class="btn btn-lg btn-primary btn-block">SIGINUP</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase"

export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      validError: "Please Check Email or Password",
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword('hogehoge@gmail.com', '1234567')
      .then(users => {
        // this.$store.commit("loginState", users.uid)
      }).catch(() => {
        this.valid = true
      })
    },
    toLogin() {
      this.$router.push("/login")
    }
  }
}
</script>