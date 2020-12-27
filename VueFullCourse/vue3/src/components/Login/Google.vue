<template>
  <section class="my-3 text-center">
    <button class="px-2 rounded border shadow" v-on:click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("closeLoginFromGoogle");
        });
      // .then((result) => {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   // var token = result.credential.accessToken;

      //   // The signed-in user info.
      //   // var user = result.user;
      //   // ...
      // })
      // .catch((error) => {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      //   // ...
      // });
    },
  },
};
</script>

<style></style>
