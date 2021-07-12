<template>
  <div class="container">
    <h1>ログインできてる</h1>
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
          this.$router.push('/signin')
        })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
html {
  font-size: 62.5%;
}

@media screen and (max-width: 896px){
  h1{
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

</style>
