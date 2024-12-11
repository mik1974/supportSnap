<template>
  <!-- Header Start -->
  <header>
    <!-- container start -->
    <div class="container">
      <!-- navigation bar -->
      <nav class="navbar navbar-expand-lg">
        <!-- <router-link to="/"> -->
        <!-- <a class="navbar-brand" href="/">
          <img src="/images/logo01.png" alt="Logo" />
        </a> -->
        <router-link class="navbar-brand" :to="{ name: 'home' }"
          ><img src="/images/logo01.png" alt="Logo"
        /></router-link>
        <!-- </router-link> -->

        <!-- <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > -->
        <!-- <span class="navbar-toggler-icon"> -->
        <!-- <i class="icofont-navigation-menu ico_menu"></i> -->
        <!-- <span class="toggle-wrap">
              <span class="toggle-bar"></span>
            </span>
          </span>
        </button> -->

        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
        </div> -->
        <ul class="navbar-nav ml-auto">
          <!-- Dropdown for logged-in user -->
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-if="userr"
            >
              <div v-if="userPic == null">
                <i class="fas fa-user"></i> {{ user02.name }} {{ user02.last_name }}
              </div>
              <div v-else class="userbox">
                <div class="imgProfilebox">
                  <img
                    :src="userPicUrl + user02.profile_picture"
                    :alt="user02.name + ' ' + user02.last_name"
                  />
                </div>
                <p>{{ user02.name }} {{ user02.last_name }}</p>
              </div>
            </button>
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-else
            >
              <i class="fas fa-user"></i>Hello Guest
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="userr">
              <router-link to="/" v-if="dropdownOptions == 'UserProfile'"
                ><i class="fas fas fa-address-card"></i>Home</router-link
              >

              <router-link to="/user-profile" v-else
                ><i class="fas fas fa-address-card"></i>User Profile</router-link
              >

              <a href="#" @click="handleLogout()"
                ><i class="fas fas fa-right-from-bracket"></i>Logout</a
              >
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-else>
              <a href="#" @click="handleLogin()"
                ><i class="fas fas fa-right-from-bracket"></i>Login</a
              >
            </div>
          </div>
        </ul>
      </nav>
      <!-- navigation end -->
    </div>
    <!-- container end -->
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, nextTick, computed, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
const userr = ref(false)
const store = useStore()
const router = useRouter()
const dropdownVisible = ref(false)
const dropdownOptions = ref('')
let dropdownTimeout
const user02 = computed(() => store.getters.getUser)
const initializeDropdown = () => {
  nextTick(() => {
    const dropdownMenuButton = document.getElementById('dropdownMenuButton')
    const dropdownMenu = dropdownMenuButton?.nextElementSibling

    const toggleDropdown = () => {
      clearTimeout(dropdownTimeout)
      dropdownTimeout = setTimeout(() => {
        dropdownVisible.value = !dropdownVisible.value
        if (dropdownVisible.value) {
          dropdownMenu?.classList.add('show')
        } else {
          dropdownMenu?.classList.remove('show')
        }
      }, 50) // Small delay to prevent rapid toggling
    }

    const closeDropdown = (event) => {
      if (!dropdownMenu?.contains(event.target) && event.target !== dropdownMenuButton) {
        dropdownVisible.value = false
        dropdownMenu?.classList.remove('show')
      }
    }

    dropdownMenuButton?.addEventListener('click', toggleDropdown)
    document.addEventListener('click', closeDropdown)

    onBeforeUnmount(() => {
      clearTimeout(dropdownTimeout)
      dropdownMenuButton?.removeEventListener('click', toggleDropdown)
      document.removeEventListener('click', closeDropdown)
    })
  })
}

let btnLabel = ref('')
// let btnLabel02 = ref('')
// let btnLabel03 = ref('')

const userName = ref('')
const userPic = ref('')
const kycToken = ref('')

const handleLogin = () => {
  router.push({ name: 'UserLogin' })
}

const handleLogout = () => {
  store.dispatch('Logout')
}

const getUser = () => {
  const isButton = JSON.parse(localStorage.getItem('isLoggedIn'))
  const user = computed(() => store.getters.getUser)
  // const user = JSON.parse(localStorage.getItem('user'))
  if (isButton) {
    // console.log(user.value, 'Main User')
    // console.log(user.value.name, 'Main User Name')

    if (user.value) {
      userr.value = true
      if (userr.value) {
        userName.value = user.value.name
        userPic.value = user.value.profile_picture
        kycToken.value = user.value.resend_kyc_token
      }

      console.log(userName.value, 'CurrentUser Header')

      btnLabel.value = 'Logout'
    } else {
      btnLabel.value = 'Login'
    }
  }
}

// const userPicUrl = computed(() => {
//   return `${import.meta.env.VITE_APP_IMAGE_URL}/${userPic.value}`
// })

const userPicUrl = computed(() => store.getters.getImgPath)

onMounted(async () => {
  nextTick(() => {
    getUser()
    initializeDropdown()
  })
  dropdownOptions.value = router.currentRoute.value.name // The name of the current route
})
</script>


<style scoped>
/* Your styles here */

/* Basic dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown .btn {
  font-family: 'manrope';
}

.dropdown-toggle {
  background-color: #fff;
  color: #49847c;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-top: 10px;
  right: auto;
}

.dropdown-menu a {
  color: black;
  text-decoration: none;
  display: block;
  padding: 5px 6px;
  font-size: 13px;
  border-bottom: solid 1px #dadada;
}
.dropdown-menu a:last-child {
  border-bottom: none;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
}

.navbar {
  margin-top: 10px;
  padding-bottom: 10px;
}

.nav-link.disabled {
  background-color: #0b2b3e !important;
}

.show > .btn-secondary.dropdown-toggle {
  background-color: #fff;
  color: #000;
  box-shadow: none;
  border-color: none;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus {
  box-shadow: none;
  border-color: none;
  background-color: transparent;
}

.userbox {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
}
.imgProfilebox {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.dropdown-toggle::after {
  display: inline;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  position: absolute;
  width: 10px;
  height: 20px;
  right: -5px;
  z-index: 99999;
  top: 28px;
}
header {
  padding-top: 0px;
  padding-bottom: 0px;
  padding: 0px !important;

  border-bottom: 0px solid #49847c;
  -webkit-box-shadow: -1px -6px 12px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -1px -6px 12px 1px rgba(0, 0, 0, 0.25);
  box-shadow: -1px -6px 12px 1px rgba(0, 0, 0, 0.25);
  padding: 15px 0;
  margin-top: -8px;
}

@media screen and (max-width: 992px) {
  /* .navbar-expand-lg .navbar-nav {
    flex-direction: column;
  } */
  .navbar-expand-lg .navbar-nav[data-v-cf3f5843] {
    flex-direction: row;
    justify-content: end;
    width: 100%;
  }
  ul.navbar-nav.ml-auto li {
    width: auto !important;
  }
  .navbar-expand-lg .navbar-nav .nav-link.dark_btn {
    margin: 0;
    /* display: ruby-text; */
    display: block;
  }
  .dropdown-menu {
    right: 0;
    left: auto;
  }
}

@media only screen and (max-width: 991px) and (min-width: 768px) {
  nav.navbar.navbar-expand-lg {
    flex-wrap: nowrap;
  }
  /* .navbar {
    padding: 0px;
    margin: 0;
  } */

  header {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .dropdown-menu {
    right: 0;
    left: auto;
  }
}

@media screen and (max-width: 767px) {
  .navbar-expand-lg .navbar-nav {
    flex-wrap: wrap;
    /* padding: 20px 0 10px; */
    padding-top: 10px;
    padding-bottom: 10px;
    /* flex-direction: column !important; */
    justify-content: end;
    width: auto !important;
  }
  .navbar {
    padding: 0px;
    margin: 0;
  }

  .dropdown-menu {
    right: 0;
    left: auto;
  }
}

@media screen and (max-width: 425px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: column;
    justify-content: end;
    width: auto;
  }
}

@media screen and (max-width: 405px) {
  .navbar-expand-lg .navbar-nav .nav-link.dark_btn {
    padding: 9px 12px !important;
    font-size: 13px !important;
  }
}

/* @media screen and (max-width: 620px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: column;
  }
} */

/* .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-menu a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-menu a:hover {
  background-color: #f1f1f1;
}
.dropdown.open .dropdown-menu {
  display: block;
} */
.fas {
  font-size: 13px;
  color: #49847c;
}
.dropdown .fas {
  margin-right: 8px;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
    margin-top: -15px;
  }
}

@media screen and (max-width: 1199px) {
  .dropdown-menu {
    right: 0;
    left: auto;
  }
}
</style>
