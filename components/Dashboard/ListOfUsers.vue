<template>
  <v-list>

    <p class="pt-4 font-weight-bold black--text text-center"> لیست قائم مقام ها</p>

    <v-list-item v-for="user in Users" :key="user.id">

      <v-list-item-content class="py-3 text-center">

        <v-list-item-title class="pb-1">{{ user.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>

      </v-list-item-content>

    </v-list-item>

  </v-list>

</template>

<script>
import {computed, onMounted} from 'vue'

export default {
  setup() {
    onMounted(function () {
      this.$store.dispatch('getUsers')
    });

    const Users = computed(function () {
      return this.$store.getters['getUsers']
    });
    return {
      Users
    }
  },
}

</script>

<style scoped>

</style>
