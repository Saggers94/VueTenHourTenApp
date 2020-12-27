<template>
  <div>
    <!-- Whenever you provide props make sure that it is binded with v-bind -->
    <AppHeader
      v-bind:isLoggedIn="isLoggedIn"
      v-on:openLoginModal="isLoginOpen = true"
    />
    <!-- <div class="w-full flex">
    <DCHeroes />
  </div> -->
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <!-- You can teleport the whole component to any place inside the DOM with teleport,
        You can even use '#app'(id) or ".app"(class) anything you want to use. -->
    <teleport to="body">
      <LoginModal v-if="isLoginOpen" v-on:closeLogin="isLoginOpen = false" />
    </teleport>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import LoginModal from "./components/LoginModal";
// import DCHeroes from "./components/DCHeroes";
// import Calendar from "./components/Calendar";
import firebase from "./utilities/firebase";

export default {
  components: { AppHeader, AppFooter, LoginModal },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.isLoggedIn = true;
        this.authUser = user;
        // User is signed in.
      } else {
        // No user is signed in.
        console.log("No User");
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>

<style></style>
