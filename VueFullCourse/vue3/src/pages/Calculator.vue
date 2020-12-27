<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-8 w-45 h-18 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class=" grid grid-cols-4 gap-1">
        <button
          v-on:click="pressed('2')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          2
        </button>
        <button
          v-on:click="pressed('1')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          1
        </button>
        <button
          v-on:click="pressed('3')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          3
        </button>
        <button
          v-on:click="pressed('+')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          +
        </button>
        <button
          v-on:click="pressed('4')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          4
        </button>
        <button
          v-on:click="pressed('5')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          5
        </button>
        <button
          v-on:click="pressed('6')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          6
        </button>
        <button
          v-on:click="pressed('-')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          -
        </button>
        <button
          v-on:click="pressed('7')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          7
        </button>
        <button
          v-on:click="pressed('8')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          8
        </button>
        <button
          v-on:click="pressed('9')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          9
        </button>
        <button
          v-on:click="pressed('*')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          *
        </button>
        <button
          v-on:click="pressed('0')"
          class="p-2 h-10 border rounded shadow"
        >
          0
        </button>
        <button
          v-on:click="pressed('c')"
          class="p-2 h-10 border rounded shadow"
        >
          C
        </button>
        <button
          v-on:click="pressed('=')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          =
        </button>
        <button
          v-on:click="pressed('/')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    // const calculation = ref("");
    const operations = ["+", "-", "*", "/"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=") {
        calculate();
      } else if (value === "c") {
        clear();
      } else if (operations.includes(value)) {
        applyOperation(value);
      } else {
        appendNumber(value);
      }

      //   prevNum.value = "";
    }

    function applyOperation(value) {
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    function calculate() {
      if (selectedOperation.value == "*") multiply();
      else if (selectedOperation.value == "/") devide();
      else if (selectedOperation.value == "+") sum();
      else if (selectedOperation.value == "-") substract();

      prevNum.value = "";
      selectedOperation.value = "";
    }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }

    function devide() {
      currentNum.value = prevNum.value / currentNum.value;
    }

    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    function substract() {
      currentNum.value = prevNum.value - currentNum.value;
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function clear() {
      currentNum.value = "";
    }

    onMounted(() => {
      window.addEventListener("keydown", (e) => {
        console.log(e.key);
      });
    });

    return {
      currentNum,
      prevNum,
      selectedOperation,
      pressed,
      appendNumber,
      applyOperation,
      calculate,
      clear,
      multiply,
      devide,
      sum,
      substract,
    };
  },
};
</script>

<style></style>
