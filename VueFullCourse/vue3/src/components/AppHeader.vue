<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white p-3 text-2xl mb-5"
  >
    <router-link
      v-for="link in linkList"
      v-bind:key="link.title"
      class="mx-2"
      v-bind:to="link.to"
      >{{ link.title }}</router-link
    >

    <button
      v-if="!isLoggedIn"
      class="mx-2"
      v-on:click="$emit('openLoginModal')"
    >
      Login
    </button>
    <button v-if="isLoggedIn" class="mx-2" v-on:click="logout()">
      Logout
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  // If you want to stricttype variable in the props than you need to use object instead of an array
  //And only than you would be able to define the datatype of the prop that is called as propType
  //you can even provide default value of the dattype with the object again
  // props: { isLoggedIn: { type: Boolean, required: true, default: false } },
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      linkList: [
        { title: "DCHeroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reusable-modal" },
        { title: "Chat", to: "/chat" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
