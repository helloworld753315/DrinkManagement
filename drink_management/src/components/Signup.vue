<template>
  <div class="signup">
    <h2>サインアップ</h2>
    <input type="text" placeholder="Mail" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp" class="btn btn-info" >Register</button>
    <p>サインインはこちらから
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('アカウントを作成: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }

}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
