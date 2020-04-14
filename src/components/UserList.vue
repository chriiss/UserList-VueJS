<template>
  <div class="user-list">
    <h1>User List</h1>
    <ul>
      <li v-for="user in data" :key="user.id">
        <user-summary v-bind:usr="user" v-on:accept="registerUser(user)"></user-summary>
      </li>
    </ul>
  </div>
</template>

<script>
import UserSummary from './UserSummary.vue';
export default {
  name: 'user-list',
  components: {
    'user-summary': UserSummary
  },
  props: ['data', 'usersComing'],
  methods: {
    registerUser(user) {
      this.usersComing.push(user);
    }
  }, 
  data() {
    return {
      usersWhoWillcome: []
    }
  },
}
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding: 0px;
}
ul li {
  list-style: none;
}
</style>
