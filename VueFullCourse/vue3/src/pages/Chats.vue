<template>
  <section>
    <div
      v-for="chat in state.chats"
      v-bind:key="chat"
      class="w-full "
      v-bind:class="chat.userId == state.userId ? 'text-right' : ''"
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
import { onMounted, reactive } from "vue";
import firebase, { chatsRef } from "../utilities/firebase";
export default {
  setup() {
    //ref is created for just one singular data
    // const chats = ref({});

    //state is created for collection of data
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });

    onMounted(async () => {
      //   const data = await chatsRef.once("value");
      //   state.chats = data.val();

      chatsRef.on("child_added", (snapshot) => {
        // state.chats = snapshot.val();
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
        console.log(snapshot.key);
      });
    });

    const addMessage = () => {
      const newChat = chatsRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    };

    return {
      state,
      addMessage,
    };
  },
};
</script>

<style></style>
