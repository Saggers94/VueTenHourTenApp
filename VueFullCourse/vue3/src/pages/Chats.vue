<template>
  <section>
    <div
      v-for="chat in state.chats"
      v-bind:key="chat"
      class="w-full "
      v-bind:class="chat.userId == userId ? 'text-right' : ''"
    >
      {{ chat.message }}
    </div>
    <input
      class="border shadow mt-2"
      v-model="state.message"
      v-on:keydown.enter="addMessage"
    />
  </section>
</template>

<script>
import { onMounted, reactive, computed } from "vue";
import { chatsRef } from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    //ref is created for just one singular data
    // const chats = ref({});

    //state is created for collection of data
    const state = reactive({
      chats: [],
      message: "",
    });

    const store = useStore();
    const userId = computed(() => {
      console.log(store.state.authUser.uid);
      return store.state.authUser.uid;
    });

    onMounted(async () => {
      //   const data = await chatsRef.once("value");
      //   state.chats = data.val();

      chatsRef.on("child_added", (snapshot) => {
        // state.chats = snapshot.val();
        // state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
        // console.log(snapshot.key);
      });
    });
    console.log(userId);
    const addMessage = () => {
      //   console.log(userId);
      const newChat = chatsRef.push();

      newChat.set({ userId: store.state.authUser.uid, message: state.message });
      state.message = "";
    };

    return {
      state,
      addMessage,
      userId,
    };
  },
};
</script>

<style></style>
