<template>
    <div class="user-details">
        <h2>Hi welcome {{this.$route.params.id}}</h2>
        <p><router-link class="routerLink" to="/users">Back to user list</router-link></p>
    </div>
</template>

<script>

export default {
  name: 'user-details',
  props: ['usr'],
}
</script>

<style>
.routerLink {
  color: #DF0101;
  text-decoration: none;
  font-weight: bold;
}
</style>