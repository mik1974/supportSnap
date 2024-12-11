<template>

<div v-if="isLoading" class="loader-overlay">
    <div class="spinner"></div>
  </div>
</template>
  


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const isLoading = computed(() => store.state.isLoading)
    return { isLoading }
  }
}
</script>

<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: rgba(255, 255, 255, 0.7); /* White overlay with 70% opacity */
  /* z-index: 1000; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999999999999999999999999999;
}

/* .spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
} */

.spinner {
  border: 7px solid rgba(0, 0, 0, 0.3); /* Light gray border */
  border-top: 7px solid black; /* Darker top border */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
