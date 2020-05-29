<template>
  <div class="container mt-5">
    <h1 class="text-center">LOGIN</h1>
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
    <!-- @click="mailLogin()"追加 -->
    <button @click="mailLogin()" class="btn btn-lg btn-primary btn-block">LOGIN</button>
    <!-- 新規登録ボタン -->
    <button @click="toSignup()" class="btn btn-lg btn-primary btn-block">SIGNIN</button>
  </div>
</template>


<script>
 // firebaseの読み込み
import firebase from "~/plugins/firebase"

// export先の設定
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      validError: 'Please Check Email or Password'
    }
  },
  mounted() {
    //ユーザー状態の管理に使用する
    firebase.auth().onAuthStateChanged(users => {
      if (users != null) {
        this.$store.commit("loginState", users.uid)
        this.$router.push("/projects")
      } else {
        console.log("Not signin")
      }
    })
  },
  methods: {
    // メール認証
    mailLogin() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(users => {
        this.$store.commit("loginState", users.id)
        this.$router.push("/projects")
      }).catch(()=> {
        console.log("error")
        this.valid = true
      })
    },
    toSignup() {
      this.$router.push("/login/signup")
    }
  }
}
</script>