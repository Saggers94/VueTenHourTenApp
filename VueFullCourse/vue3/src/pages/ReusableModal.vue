<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl mb-3">Reusable Modal</h1>
      <Modal v-if="isModal1Open" v-on:closeModal="isModal1Open = false">
        <template v-slot:title>Modal 1</template>
        <template v-slot:body>
          <p>Hello body slot of Modal 1</p>
        </template>
      </Modal>
      <button
        class="border text-gray-600 rounded shadow p-2 bg-blue-300"
        v-on:click="isModal1Open = true"
      >
        Open Modal-1
      </button>

      <Modal v-if="isModal2Open" v-on:closeModal="isModal2Open = false">
        <template v-slot:title>Modal 2</template>
        <template v-slot:body>This is the content of Modal2</template>
      </Modal>
      <button
        class="border text-gray-600 rounded shadow ml-2 p-2 bg-blue-300"
        v-on:click="isModal2Open = true"
      >
        Open Modal-2
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return {
      isModal1Open,
      isModal2Open,
    };
  },
};
</script>

<style></style>
