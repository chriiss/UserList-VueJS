<template>
    <div class="user-summary">
        <div>
            {{usr.username}}
            <div v-if="isInvit"><router-link class="routerLink" v-bind:to="/users/ + usr.username">Invitation accepted user summary</router-link></div>
            <div v-else>
                <button v-bind:class="{acceptInvit: isInvit}" v-on:click="acceptInvitation">accept invit</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'user-summary',
    props: ['usr'],
    methods: {
        acceptInvitation() {
            this.isInvit = !this.isInvit;
            this.$emit('accept');
        }
    },
    data() {
        return {
            isInvit: false,
        }
    }
}
</script>


<style scoped>

div :nth-child(1) {
    margin: 15px 0px 0px 0px;
    padding: 15px;
    background-color: #E6E6E6;
    text-align: center;
}

.routerLink{
    text-decoration: none;
    color: #039C1D;
    font-weight: bold;
    border: 1px solid #039C1D;
    -webkit-animation-name: clignote;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count:infinite;
 }

@-webkit-keyframes clignote {
    0%{box-shadow:0px 0px 10px #039C1D;}
    50%{box-shadow:0px 0px 0px #039C1D;}
    100%{box-shadow:0px 0px 10px #039C1D;}
}

.acceptInvit {
    display: none;
}

button {
    border: none;
    cursor: pointer;
    outline: none;
    background-color: #9F81F7 !important;
    color: #E6E6E6;
    font-weight: bold;
    box-shadow: 0 5px #999;
    width: 100%;
}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 2.5px #666;
  transform: translateY(4px);
}
</style>