<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center">Vue Calendar</h1>
    <section class="mx-4 my-3 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
      <!-- <h2>{{ daysInMonth(currentYear, currentMonth) }}</h2> -->
    </section>
    <section class="flex mt-3">
      <p
        class="text-center "
        style="width: 14.18%"
        v-for="day in days"
        v-bind:key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap my-2">
      <p
        class="w-1/6 text-center"
        style="width: 14.18%"
        v-for="num in startDay()"
        v-bind:key="num"
      ></p>
      <p
        class="w-1/6 text-center"
        style="width: 14.18%"
        v-for="num in daysInMonth()"
        v-bind:key="num"
        v-bind:class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button
        class="border rounded px-2 py-1 bg-black text-white"
        v-on:click="prev"
      >
        Prev
      </button>
      <button
        class="border rounded px-2 py-1 bg-black text-white"
        v-on:click="next"
      >
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentDate: new Date().getUTCDate() - 1,
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate
        ? "text-yellow-600 font-bold"
        : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style></style>
