<template>
  <div class="container mt-5 text-center">
    <h1>AFTER LOGIN</h1>
    <!-- @click="logOut()"追加 -->
    <button @click="logOut()" class="btn btn-lg btn-primary btn-block">LOGOUT</button>
    <button @click="toTop()" class="btn btn-lg btn-primary btn-block">TOP PAGE</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase"

export default {
  methods: {
    logOut() {
      firebase.auth().signOut()
      .then(() => {
        this.$store.commit("logoutState")
        this.$router.push("/")
      })
    },
    toTop() {
      this.$router.push("/")
    }
  }
}
</script>