//This is a debounce mixin and mixin are the properties that we can reuse through out our project
//and it functions just like a normal vue with data,methods,computed but these functions are solely
//dependent on the variables that we provide as an arguments
const debounce = {
  data() {
    return {
      timeout: "",
    };
  },
  methods: {
    debounce(func, wait = 1000) {
      console.log("I am from mixins");
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
  },
};

export default debounce;
