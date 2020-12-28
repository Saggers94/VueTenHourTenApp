<template>
  <div>
    <section
      v-on:click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-gray-100 rounded shadow-md p-2 w-1/3">
          <div class="border p-3">
            <h1 class="text-2xl">
              <slot name="title"></slot>
            </h1>
            <main>
              <slot name="body"></slot>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("closeModal");
    };

    return { close };
  },
};
</script>

<style></style>
