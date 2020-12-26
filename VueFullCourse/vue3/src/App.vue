<template>
  <AppHeader />
  <!-- <div class="w-full flex">
    <DCHeroes />
  </div> -->
  <div class="w-full flex">
    <Calendar />
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
// import DCHeroes from "./components/DCHeroes";
import Calendar from "./components/Calendar";

export default {
  components: { AppHeader, AppFooter, Calendar },
};
</script>

<style></style>
