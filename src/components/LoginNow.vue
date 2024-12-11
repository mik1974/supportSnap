<template>
  <section>
    <!-- Page-wrapper-Start -->
    <div class="page_wrapper">
      <!-- Preloader -->

      <div class="full_bg">
        <section class="signup_section ulogin">
          <div class="container">
            <div class="top_part">
              <!-- <a href="/" class="back_btn"
                ><i class="icofont-arrow-left"></i> Back to home</a
              > -->

              <!-- <a href="/" class="back_btn"><i class="icofont-arrow-left"></i> Back to home</a> -->

              <router-link to="/"><i class="icofont-arrow-left"></i> Back to Home</router-link>

              <a class="navbar-brand" href="#">
                <img src="/images/logo01.png" alt="image" />
              </a>
            </div>

            <!-- Sign In Form -->
            <div class="form_block">
              <div class="form_side">
                <div class="section_title">
                  <span class="title_badge">Welcome Back</span>
                  <h2><span>Sign in</span> to your account</h2>
                  <p>Quickly access your account.</p>
                </div>
                <form @submit.prevent="submitForm">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="state.vu_email"
                      v-bind:class="{
                        invaliddata: v$.vu_email.$error == true
                      }"
                    />
                    <span v-if="v$.vu_email.$error">
                      {{ v$.vu_email.$errors[0].$message }}
                    </span>
                  </div>
                  <div class="form-group" id="id_password">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      placeholder="Password"
                      v-model="state.vu_password"
                      v-bind:class="{
                        invaliddata: v$.vu_password.$error == true
                      }"
                    />
                    <i
                      :class="showPassword ? 'myicon icofont-eye' : 'myicon icofont-eye-blocked'"
                      id="togglePassword"
                      style="margin-left: -30px; cursor: pointer"
                      @click="togglePasswordVisibility"
                    >
                    </i>
                    <span v-if="v$.vu_password.$error">
                      {{ v$.vu_password.$errors[0].$message }}
                    </span>
                  </div>
                  <div class="forgate_check">
                    <!-- <div class="coustome_checkbox">
                      <label for="remamber_check">
                        <input type="checkbox" id="remamber_check" />
                        <span class="checkmark"></span>
                        Remember for 30 days
                      </label>
                    </div> -->
                    <a href="#" @click="goForget()">Forgot password ?</a>
                  </div>

                  <div class="btn_block">
                    <button type="button" class="btn puprple_btn ml-0" @click="submitForm()">
                      Login Now
                    </button>
                    <div class="btn_bottom"></div>
                  </div>

                  <!-- <button class="btn google_btn">
                    <img src="images/google_G.svg" alt="image" /> Sign Up with
                    Google
                  </button> -->
                </form>
                <button class="btn google_btn" @click="googleLogin">
                  <img src="/images/google_G.svg" alt="image" /> Sign In with Google
                </button>
              </div>
              <div class="side_screen">
                <div class="dotes_blue">
                  <img src="/images/blue_dotes.png" alt="image" />
                </div>
                <div class="left_icon">
                  <img src="/images/smallStar.png" alt="image" />
                </div>
                <div class="right_icon">
                  <img src="/images/bigstar.png" alt="image" />
                </div>
                <div class="scrren">
                  <img src="/images/sign_in_screen01.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from '@/router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// const router = useRouter()
const store = useStore()

const showPassword = ref(false)

const state = reactive({
  vu_email: '',
  vu_password: ''
})

const rules = computed(() => ({
  vu_email: { required, email },
  vu_password: { required, minLength: minLength(4), maxLength: maxLength(12) }
}))

// Vuelidate
const v$ = useVuelidate(rules, state, { $lazy: true })

const submitForm = () => {
  try {
    v$.value.$validate()
    if (!v$.value.error) {
      callApiforLogin()
    }
  } catch (error) {
    alert('form failed validation')
    console.log(error)
  }
}

function callApiforLogin() {
  const obj = {
    email: state.vu_email,
    password: state.vu_password
  }
  store.dispatch('userLogin', obj)
}

// const callReset = () => {
//   router.push({ name: 'resetPassword' })
// }
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
const goForget = () => {
  router.push({ name: 'resetPassword' })
}

const googleLogin = () => {
  store.dispatch('googleLogin')
}
</script>

<style scoped>
/* Your styles here */
.ulogin {
  width: auto;
}
.ulogin input {
  background: transparent !important;
  background-color: transparent !important;
}
#id_password {
  position: relative;
}
#id_password .myicon {
  position: absolute;
  right: 30px;
  top: 12px;
  font-size: 20px;
}
.signup_section .form_block .form_side form .form-control {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #999ca6;
  padding-left: 15px;
}

.form-group span {
  color: red;
}
/* i.icofont-arrow-left{margin-right:0px} */
.navbar-brand {
  margin-left: 20px;
}
</style>