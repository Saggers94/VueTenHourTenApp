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

    <button class="mx-2" v-on:click="$emit('openLoginModal')">Login</button>
    <button class="mx-2" v-on:click="logout()">Logout</button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      linkList: [
        { title: "DCHeroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
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
