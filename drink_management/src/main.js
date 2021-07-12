// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.config.productionTip = false

// Initialize Firebase
if (!firebase.apps.length) {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyDP1ft5dk4QONLwlGieRogS1KdojPnbHMg',
    authDomain: 'drinkmanagement-85acc.firebaseapp.com',
    projectId: 'drinkmanagement-85acc',
    storageBucket: 'drinkmanagement-85acc.appspot.com',
    messagingSenderId: '440809334666',
    appId: '1:440809334666:web:78889edcd3a8326f300a73'
  }
  firebase.initializeApp(firebaseConfig)
}

export default firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
