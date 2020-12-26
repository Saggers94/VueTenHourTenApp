<template>
  <div class="absolute flex flex-wrap w-full relative">
    <div
      class="absolute w-full"
      v-for="(color, index) in sliders"
      v-bind:key="index"
    >
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          v-bind:class="color"
          style="height: 350px;"
        ></div>
      </transition>
    </div>
    <div class=" w-full" style="height:340px;">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          v-bind:key="slider"
          v-bind:class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 m-2 rounded-full bg-black cursor-pointer shadow-md"
          v-on:click="makeActive(index)"
        ></div>
      </div>
    </div>
    <!-- <div class="flex w-full">
      <div class="m-auto mt-2">
        <transition name="fade">
          <h1 v-if="isTitleShowing" class="text-3xl">Slider Carousel</h1>
        </transition>
        <button
          v-on:click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-600"],
      interval: "",
      isTitleShowing: true,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
      console.log("I am changing the current slide", this.currentSlide);
      //   if (this.currentSlide == 2) {
      //     this.currentSlide = 0;
      //   } else {
      //     this.currentSlide++;
      //   }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>
