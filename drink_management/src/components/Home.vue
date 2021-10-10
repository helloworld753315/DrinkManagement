<template>
  <div class="container">
    <router-link to="/signin" class="auth"
      ><button class="button" @click="signOut">
        サインアウト
      </button></router-link>
    <h1>ログインできてる</h1>
    <a href="#" class="btn-circle-flat">Drink</a>
  </div>
</template>

<script>
import firebase from 'firebase'
// const db = firebase.firestore()

export default {
  name: 'Top',
  data () {
    return {
      user_id: firebase.auth().currentUser.uid,
      name: firebase.auth().currentUser.email,
      newToDo: '',
      todo_items: []
    }
  },
  methods: {
    signOut: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
    }
  }
  /*
  created:{

  }
  */
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
html {
  font-size: 62.5%;
}

@media screen and (max-width: 896px) {
  h1 {
    font-size: 1rem;
  }
}

h1,
h2 {
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

.btn-circle-flat {
  display: inline-block;
  text-decoration: none;
  background: #ffffff;
  color: rgb(50, 50, 50);
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: 0.4s;
}

.btn-circle-flat:hover {
  background: #fff8de;
}
</style>
