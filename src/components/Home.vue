<template>
  <div id="home">
    <div>
      <router-view v-bind:data="users" v-bind:users-coming="usersWhoWillcome"></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
   data() {
    return {
      usersUrl: 'http://jsonplaceholder.typicode.com/users',
      users: [],
      usersWhoWillcome: []
    }
  },

  created() {
    axios.get(this.usersUrl).then((response) => {
      this.users = response.data;
    })
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>

