<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl mb-5 font-bold">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          v-bind:value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-grey-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  //whenever we navigate to a different component, the current component would unmount itself and so
  //it would call beforeunmount and unmounted
  //Life cycle hooks
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  //whenever we switch to the another component the component on which we are in would call
  // beforeUnmount and unmounted
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  //whenever there will be an update inside the state then both of beforeUpdate and updated would call
  //themselves
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  // When we use mixins it merges the properties of the mixin with the components properties
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
    //if you define the same variable or function name as it is available in the mixins than
    //vue will override the mixin properties(variable or functions) and it would execute the ones
    //that we have provided inside the component file on which you are importing the mixins
    // debounce() {
    //   console.log("I am from markdown");
    // },
  },
};
</script>

<style></style>
