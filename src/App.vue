<script setup>
import Loader from './components/Loader-spin.vue'

// import { onMounted } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()

// Fetch user data on app load
// onMounted(async () => {
//   if (!store.state.currentUser) {
//     await store.dispatch('fetchUser')
//   }
// })
</script>

<template>
  <Loader />
  <RouterView />
</template>

<style scoped>
</style>
