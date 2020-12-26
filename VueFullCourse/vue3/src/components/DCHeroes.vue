<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center">DC Heroes {{ heroesCount }}</h1>
    <!-- <h2>{{ fullName }}</h2>
  <h2>{{ fname }} {{ lname }}</h2>
  <p>Random Computed: {{ randC }}</p>
  <p>Random Computed: {{ randC }}</p>
  <p>Random Computed: {{ randC }}</p>
  <p>Random Method: {{ randM() }}</p>
  <p>Random Method: {{ randM() }}</p>
  <p>Random Method: {{ randM() }}</p> -->
    <!-- We can't use javascript for loop inside data binding(interpolation or mustache or {{}}) so 
  we have to use v-for there  -->
    <ul class="mt-10">
      <!-- <li v-for="(value, key, index) in dcheroes" :key="index"> -->
      <!-- <b>Key:</b> {{ key }} &nbsp;&nbsp; <b>Value:</b>{{ value }} -->
      <!-- </li> -->
      <li
        class="flex justify-between text-2xl"
        v-for="(hero, index) in dcheroes"
        v-bind:key="hero.name"
      >
        <div>
          {{ hero.name }}

          <!-- <p><input type="text" /></p> -->
        </div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <!-- You can use 'v-bind or :' to bind the data-->
    <!-- Dynamic Attribute creation and also binding with '[attribute]' and than defining the attribute 
  inside the data function that represents a state in vue -->
    <!-- <input :[attribute]="newHero" /> -->

    <!-- v-model.trim will get rid of all of the whitespaces from the input values and than save it 
  into the state. There is also v-model.number that converts the string values in the  number  -->
    <!-- <input v-model.trim="newHero" /> -->

    <!-- v-model.lazy will update the state of teh vue only when we are not focused on the field -->
    <!-- <textarea v-model.lazy="newHero"></textarea> -->
    <!-- <button v-bind:disabled="isDisabled">Add Hero</button> -->

    <!-- <button v-on:click="newHero = 'Wonder Woman'">Add Hero</button> -->
    <!-- <button @click="newHero = 'Wonder Woman'">Add Hero</button> -->

    <form class="mt-10 border rounded" @submit.prevent="addHero">
      <input v-model="newHero" placeholder="Type Hero Name" />
      <button
        class="w-auto ml-6 p-2 mb-3 border rounded bg-gradient-to-r from-blue-700 to-purple-800 text-black"
        type="submit"
      >
        Add Hero
      </button>
    </form>
    <!-- <button @click="setFullName()">Set Full Name</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dcheroes: {
      //   SuperMan: "SuperMan",
      //   Aquaman: "Aquaman",
      //   Batman: "Batman",
      //   Flash: "Flash",
      //   SuperGirl: "SuperGirl",
      //   Arrow: "Arrow",
      // },
      //   fname: "sagar",
      //   lname: "parmar",
      //   attribute: "value",
      //   isDisabled: true,
      newHero: "",
      dcheroes: [
        { name: "SuperMan" },
        { name: "Batman" },
        { name: "Flash" },
        { name: "SuperGirl" },
        { name: "Arrow" },
      ],
      // This computing of heroescount
      // will never work as dcheroes would only be defined after evaluating all of the
      //variable. So we would need to use ComputedProperties
      // heroesCount: this.dcheroes.length,
    };
  },
  // Remember methods cannot use arrow function because we won't be able to access 'this' and without
  // 'this' we won't be able to access the variables that we have inside the data function of vue
  // Methods will execute every time and they are not stored in a cache so that every random value
  // would have different number every time
  methods: {
    addHero() {
      console.log("here");
      if (this.newHero !== "") {
        // unshift add the value to the beginning
        console.log(this.newHero);
        this.dcheroes.unshift({ name: this.newHero });
        console.log(this.dcheroes);
        this.newHero = "";
      }
    },
    remove(index) {
      console.log("here");
      this.dcheroes = this.dcheroes.filter((hero, i) => {
        return i != index;
      });
    },
    randM() {
      return Math.random();
    },
    //when we use this method as fullName is the computed property. What will happen is, this would search
    //for set function of the fullName where its defined and if we have defined the set function there
    //than that set function would get call otherwise it won't do anything.
    setFullName() {
      this.fullName = "Simran Sachdev";
    },
  },
  // Computed properties are stored in a cache so they won't change but if any dependency(state) would
  //change only than this property would change
  computed: {
    heroesCount() {
      return this.dcheroes.length + " Heroes";
    },
    fullName: {
      get() {
        return `Full Name is ${this.fname} ${this.lname}`;
      },
      set(fullName) {
        const values = fullName.split(" ");
        this.fname = values[0];
        this.lname = values[1];
      },
    },
    randC() {
      return this.dcheroes.length + Math.random();
    },
  },
};
</script>

<style></style>
