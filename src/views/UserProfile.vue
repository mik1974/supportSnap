<template>
  <Header />
  <UserProfile />
  <myFooter />
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import myFooter from '../components/FooterMain.vue'
import Header from '../components/headerMain.vue'
import UserProfile from '../components/UserProfile.vue'
</script>

<style scoped>
/* .contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
} */

/* .modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
</style>
