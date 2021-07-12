<template>
  <div class="signin">
    <h2>サインイン</h2>
    <input type="text" placeholder="Mail" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn" class="button" >サインイン</button>
    <p>アカウントを持っていませんか？
      <router-link to="/signup">こちらから作成できます</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('ログインしました')
          this.$router.push('/home')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: #b53434;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

.signin button{
  margin: 10px auto;
}
input {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
}
</style>
