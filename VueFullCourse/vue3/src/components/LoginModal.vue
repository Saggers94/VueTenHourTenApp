<template>
  <div v-if="isLoginOpen">
    <!-- we can use $emit to raise the custom event to parent and than parent can manipulate
      the Dom object by changing the state, in this example we are doing that with the login-modal -->
    <section
      v-on:click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-gray-100 rounded shadow-md p-2 w-1/3">
          <div class="border p-3">
            <h1 class="text-2xl text-center">Login</h1>
            <Google v-on:closeLoginFromGoogle="close" />

            <p class="text-center mb-3">Or</p>
            <form class="p-3 my-3" v-on:submit.prevent="submit">
              <div class="my-4">
                <label>Email or Username</label>
                <input
                  ref="loginEmailRef"
                  v-model="email"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter email or username"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                  v-model="password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="enter password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="border rounded p-2 pl-4 pr-4 text-white shadow bg-blue-700"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>⧗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import Google from "../components/Login/Google";

export default {
  components: { Google },
  data() {
    return {
      email: "sagar@gmail.com",
      password: "password",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
  mounted() {
    // this.$refs.loginEmailRef.focus();
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
};
</script>

<style></style>
