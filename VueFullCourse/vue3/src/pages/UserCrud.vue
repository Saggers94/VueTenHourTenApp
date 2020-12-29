<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">FirstName</th>
              <th class="px-4 py-2 border">LastName</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" v-bind:key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  class="rounded-full"
                  width="50"
                  v-bind:src="user.avatar"
                  v-bind:alt="user.first_name"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between pb-40 pt-3">
          <button
            class="px-3 py-2 border rounded hover:shadow"
            v-on:click="prev"
            v-bind:disabled="state.users.page == 1"
            v-bind:class="state.users.page == 1 ? 'text-gray-400' : ''"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded hover:shadow"
            v-on:click="next"
            v-bind:disabled="state.users.page == state.users.total_pages"
            :class="
              state.users.page == state.users.total_pages
                ? 'text-gray-400'
                : 'shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
export default {
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      console.log(`${process.env.VUE_APP_API_URL}`);
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    const next = async () => {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    };

    const prev = async () => {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    };

    return {
      state,
      next,
      prev,
    };
  },
};
</script>

<style></style>
