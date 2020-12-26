<template>
  <div>
    <AppHeader v-on:openLoginModal="isLoginOpen = true" />
    <!-- <div class="w-full flex">
    <DCHeroes />
  </div> -->
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <LoginModal v-if="isLoginOpen" v-on:closeLogin="isLoginOpen = false" />
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
