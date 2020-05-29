<template>
  <div class="container mt-5 text-center">
    <h1>TOP PAGE</h1>
      <button @click="toLogin()" class="btn btn-lg btn-primary btn-block">LOGIN</button>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push("/login")
    }
  }
}
</script>