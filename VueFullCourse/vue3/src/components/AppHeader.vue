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
  </nav>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        { title: "DCHeroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
};
</script>

<style></style>
