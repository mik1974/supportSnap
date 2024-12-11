<template>
  <section class="addAccountForm">
    <div class="page-wrapper">
      <div class="wrapper">
        <!-- <h4>
          <router-link to="/user-profile"
            ><i class="icofont-arrow-left"></i> Back to User Profile</router-link
          >
          <a href="" @click="goBackHome"><i class="icofont-arrow-left"></i> Back to Profile</a> 
        </h4> -->
        <form id="wizard" class="wizard clearfix" @submit.prevent="submitForm">
          <div class="wrapper wrapper--w960">
            <h4>
              <router-link to="/user-profile"><i class="icofont-arrow-left"></i> Back </router-link>
              <!-- <a href="" @click="goBackHome"><i class="icofont-arrow-left"></i> Back to Profile</a> -->
            </h4>
            <h3 class="heading">Know Your <span>Customer</span></h3>
            <div class="form-row">
              <div class="form-col">
                <label for> First Name </label>
                <div class="form-holder">
                  <i class="zmdi zmdi-account-o"></i>
                  <input
                    type="text"
                    v-model="state.vu_firstName"
                    placeholder="First Name"
                    :class="{ invaliddata: v$.vu_firstName.$error }"
                    class="form-control"
                  />
                  <span v-if="v$.vu_firstName.$error">
                    {{ v$.vu_firstName.$errors[0].$message }}
                  </span>
                </div>
              </div>
              <div class="form-col">
                <label for> Last Name </label>
                <div class="form-holder">
                  <!-- <i class="zmdi zmdi-edit"></i> -->
                  <i class="zmdi zmdi-account-o"></i>
                  <input
                    type="text"
                    v-model="state.vu_lastName"
                    placeholder="Last Name"
                    :class="{ invaliddata: v$.vu_lastName.$error }"
                    class="form-control"
                  />
                  <span v-if="v$.vu_lastName.$error">
                    {{ v$.vu_lastName.$errors[0].$message }}
                  </span>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-col">
                <label for>SSN Last Code</label>
                <div class="form-holder">
                  <i class="zmdi zmdi-lock-outline"></i>
                  <input
                    type="text"
                    placeholder="SSN Last Code"
                    name="ssn_last_4"
                    v-model="state.vu_ssn_last_4"
                    maxlength="4"
                    @input="validateDigitsOnly02"
                    class="form-control"
                  />
                  <span v-if="v$.vu_ssn_last_4.$error">
                    {{ v$.vu_ssn_last_4.$errors[0].$message }}
                  </span>
                </div>
              </div>
              <div class="form-col">
                <label for>Date of Birth</label>
                <div class="form-holder">
                  <i class="zmdi zmdi-calendar"></i>
                  <!-- <i class="zmdi zmdi-smartphone-android"></i> -->
                  <!-- <input
                    type="text"
                    class="form-control datepicker-here"
                    data-language="en"
                    data-date-format="dd - mm - yyyy"
                    id="dp1"
                    ref="datepickers"
                    
                  /> -->
                  <Datepicker
                    v-model="state.vu_selectedDate"
                    ref="datepickers"
                    inputFormat="dd-MM-yyyy"
                    class="form-control"
                    :rules="[rules.pastDate]"
                  />
                  <!-- <span v-if="v$.vu_selectedDate.$error">
                    {{ v$.vu_selectedDate.$errors[0].$message }}
                  </span> -->
                  <!-- <span class="pdate" v-if="v$.vu_selectedDate.pastDate"
                    >**You must be at least 13 years old.</span
                  > -->

                  <span
                    v-if="v$.vu_selectedDate.$invalid && v$.vu_selectedDate.$dirty"
                    class="pdate"
                    >**You must be at least 13 years old.</span
                  >
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-col">
                <label for>Phone Number</label>
                <div class="form-holder">
                  <i class="zmdi zmdi-phone"></i>
                  <input
                    type="text"
                    name="phone"
                    v-model="state.vu_phone"
                    v-mask="'+1 ###-###-####'"
                    placeholder="+1 555-555-5555"
                    class="form-control"
                  />
                  <span v-if="v$.vu_phone.$error">
                    {{ v$.vu_phone.$errors[0].$message }}
                  </span>
                </div>
              </div>
            </div>

            <div class="row row-space">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <label for="images" class="drop-container" id="dropcontainer">
                  <span class="drop-title">Drop identity document file here</span>
                  or
                  <input
                    type="file"
                    id="images"
                    accept="image/*,application/pdf"
                    required
                    ref="imageFile"
                  />
                </label>
                <!-- <span v-if="v$.vu_file.$error">
                  {{ v$.vu_file.$errors[0].$message }}
                </span> -->
              </div>
            </div>
            <div class="p-t-30">
              <button class="btn puprple_btn ml-0" type="submit">Submit</button>
            </div>
          </div>
          <!-- Loader appears when the form is submitting -->
        </form>
        <!-- Loader appears when the form is submitting -->
        <!-- <div v-if="isLoading" class="loader">Submitting...</div> -->
        <div id="preloader" v-if="isLoading">
          <div class="loader"></div>
        </div>
      </div>
    </div>

    <AccountPopup02 :propValue="isModalOpen" @pparentCloseModal="closeModal" :propUser="userName" />
  </section>
</template>

<script setup>
// import fileType from '@/assets/filetype'
import AccountPopup02 from '../components/AccountDetailModal02.vue'
import { ref, reactive, onMounted, computed } from 'vue'
// import { mask } from 'vue-the-mask'
// import { toast } from 'vue3-toastify'
import gsap from 'gsap'
import Datepicker from 'vue3-datepicker'
import { getDate, getMonth, getYear } from 'date-fns'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
// import {reactive, computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useStore } from 'vuex'
const isModalOpen = ref(false)
const modal = ref(null)
// import router from '@/router'
const isLoading = ref(false)
const store = useStore()
const imageFile = ref(null)
// const formatPattern = 'dd-MM-yyyy'
// const selectedDate = ref(new Date(), formatPattern)
// const selectedDate = ref(formatPattern)
// const selectedDate = formatPattern
const currentUser = reactive({
  userInfo: {}
})
const validNum = (value) => {
  if (/^[0-9]*$/.test(value)) {
    if (!/^[0-9]*$/.test(value)) {
      return false // Return false if the input contains non-numeric characters
    }
    return true // Allow empty or numeric values
  }
}
// Custom validator for phone numbers
// const validPhone = (value) => {
//   if (/^[0-9]*$/.test(value)) {
//     if (!/^[0-9]*$/.test(value)) {
//       return false // Return false if the input contains non-numeric characters
//     }
//     return true // Allow empty or numeric values
//   }
// }

const validateDigitsOnly02 = (event) => {
  // Replace any non-digit character with an empty string
  const digitsOnly = event.target.value.replace(/\D/g, '')

  state.vu_ssn_last_4 = digitsOnly
}

// const validateDigitsOnly03 = (event) => {
//   // Replace any non-digit character with an empty string
//   const digitsOnlyy = event.target.value.replace(/\D/g, '')

//   state.vu_phone = digitsOnlyy
// }

// // Helper function to validate if the date is more than 13 years in the past
// const moreThan13YearsAgo = (value) => {
//   if (!value) return false
//   const now = new Date()
//   const thirteenYearsAgo = new Date(now.setFullYear(now.getFullYear() - 13))
//   return value <= thirteenYearsAgo
// }

// Helper function to validate if the date is more than 13 years in the past
const moreThan13YearsAgo = (value) => {
  if (!value) return false
  const now = new Date()
  const thirteenYearsAgo = new Date(now.setFullYear(now.getFullYear() - 13))
  return value <= thirteenYearsAgo
}

// Selected country and state

// const userName = ref('')
// const userLname = ref('')
// const userEmail = ref('')
//const cu = computed(() => store.getters.getUser)
//console.log('CurUser', cu)
const loadCurrentUser = async () => {
  await store.dispatch('verify')
  // currentUser.userInfo = JSON.parse(localStorage.getItem('user'))
  currentUser.userInfo = computed(() => store.getters.getUser)

  //console.log('CurUser', currentUser.userInfo)
  state.vu_firstName = currentUser.userInfo.name
  state.vu_lastName = currentUser.userInfo.last_name
  // userEmail.value = currentUser.userInfo.email
  // console.log(state.vu_firstName, 'First NAme')
}

// watch()

// Computed property to filter states based on the selected country
// const filteredStates = computed(() => {
//   if (selectedCountry.value) {
//     return countries[selectedCountry.value] || []
//   }
//   return []
// })

// Compute the day, month, and year based on the selected date
const day = computed(() => {
  return state.vu_selectedDate ? getDate(new Date(state.vu_selectedDate)) : null
})

const month = computed(() => {
  return state.vu_selectedDate ? getMonth(new Date(state.vu_selectedDate)) + 1 : null
})

const year = computed(() => {
  return state.vu_selectedDate ? getYear(new Date(state.vu_selectedDate)) : null
})

// Setting Variables of the form

const state = reactive({
  vu_firstName: '',
  vu_lastName: '',
  vu_phone: '',
  // vu_selectedDate: ref(new Date(), formatPattern),
  vu_selectedDate: null,
  vu_ssn_last_4: '',
  vu_file: ''
})

const rules = computed(() => ({
  vu_firstName: { required },
  vu_lastName: { required },
  vu_selectedDate: { required, pastDate: moreThan13YearsAgo },
  vu_ssn_last_4: { required, minLength: minLength(4), maxLength: maxLength(4), validNum },
  vu_phone: {
    required,
    minLength: minLength(15)
    //maxLength: maxLength(10)
    // validPhone
  }
}))

const v$ = useVuelidate(rules, state)

const submitForm = () => {
  v$.value
    .$validate()
    .then(() => {
      if (!v$.value.$error) {
        //console.log('I am In Function')
        sentInfoAcc()
      }
    })
    .catch((error) => {
      alert('form failed validation')
      console.log(error)
    })
}

const sentInfoAcc = async () => {
  //console.log('Iam in Functin')
  isLoading.value = true
  try {
    //console.log('Hi Dear', selectedDate.value, day.value, month.value, year.value, state.vu_phone)

    const formData02 = new FormData()
    formData02.append('first_name', state.vu_firstName)
    formData02.append('last_name', state.vu_lastName)
    formData02.append('phone', state.vu_phone)
    formData02.append('day', day.value)
    formData02.append('month', month.value)
    formData02.append('year', year.value)
    formData02.append('ssn_last_4', state.vu_ssn_last_4)
    // //console.log('Country', state.vu_selectedCountry, 'Month', month.value)

    if (imageFile.value && imageFile.value.files && imageFile.value.files[0]) {
      formData02.append('identity_document', imageFile.value.files[0])
    }

    let response = await store.dispatch('AccountDetail', formData02)
    if (response !== null) {
      isModalOpen.value = true
      gsap.to(
        modal.value,
        { duration: 0.1, scale: 0.2, opacity: 1 },
        { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
      )
    }
    //console.log(response, 'Ali Imran')
    if (response.data.status == 200) {
      //await store.dispatch('verify')
      // loadCurrentUser()
      // await store.dispatch('Logout')
    }
    //console.log(response.data.message)

    //console.log('Country', state.vu_selectedCountry, 'Picture:', imageFile.value.files[0])
  } catch (error) {
    //alert('form failed validation')
    //console.log(error)
  }
  isLoading.value = false
}

const closeModal = () => {
  router.push({ name: 'UserProfile' })
  isModalOpen.value = false
}

onMounted(() => {
  loadCurrentUser()

  // const checkStatus = async () => {
  //   await store.dispatch('verify')
  // }
  // setInterval(checkStatus, 5000)
})

// const goBackHome = () => {
//   router.push({ name: 'UsersProfiles' })
// }
</script>

<style scoped>
.addAccountForm {
  background: url(../images/form-wizard-bg.jpg) no-repeat center center;
  height: 100%;
  background-size: cover;
  display: block;
  font-family: 'Manrope', sans-serif !important;
  padding-top: 50px;
}
.addAccountForm h4,
.addAccountForm h4 a {
  text-align: center;
  color: #0a2c3f !important;
  margin-bottom: 20px;
}
.addAccountForm h4 a:hover {
  color: #e09e1f !important;
}
.addAccountForm .wrapper {
  max-width: 850px;
  margin: auto;
  padding: 7px;
  /* padding-top: 50px;
  padding-bottom: 50px; */
}
.addAccountForm .wizard {
  position: relative;
  background: #fff;
  padding: 58px 58px 58px 58px;
  min-height: 600px;
  border-radius: 50px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border: solid 1px #dadada;
}
.addAccountForm h3 {
  font-family: 'Manrope', sans-serif !important;
  font-size: 35px;
  color: #0a2c3f;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 32px;
}

.addAccountForm h3 span {
  color: #e0a233;
}

.addAccountForm textarea {
  resize: none;
}

.addAccountForm input,
.addAccountForm textarea,
.addAccountForm select,
.addAccountForm button {
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #333;
}

/* .addAccountForm select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.addAccountForm select option[value=''][disabled] {
  display: none;
} */

.addAccountForm .form-row {
  display: flex;
  margin-bottom: 15px;
  flex-wrap: nowrap;
}
.addAccountForm .form-row .form-col {
  width: 50%;
  margin-right: 40px;
}
.addAccountForm .form-row .form-col:last-child {
  margin-right: 0;
}

.addAccountForm .form-col label {
  color: #0a2c3f;
  margin-bottom: 7px;
  display: block;
  font-weight: bold;
  font-size: 15px;
}

.addAccountForm .form-holder {
  position: relative;
}
.addAccountForm .form-holder i:not(.zmdi-chevron-down) {
  position: absolute;
  /* top: 50%; */
  top: 19px;
  transform: translateY(-50%);
  left: 15px;
  font-size: 20px;
  color: #4c847b;
}
.addAccountForm .form-holder i.zmdi-chevron-down {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  font-size: 15px;
}
.addAccountForm .form-holder.password i {
  cursor: pointer;
}

.addAccountForm .puprple_btn {
  background-color: #4c847b !important;
  color: #fff !important;
  font-weight: 600 !important;
  font-synthesis: none;
  width: 100%;
}

.addAccountForm .puprple_btn:hover {
  background: #e0a641 !important;
}

.addAccountForm .form-control {
  max-height: 42px;
  border: 1px solid #ccc;
  width: 100%;
  background: none;
  font-size: 14px;
  padding: 0 !important;
  padding-left: 36px !important;

  /* color: #999; */

  font-family: 'Manrope', sans-serif, 'Poppins-Medium' !important;
  /* &::-webkit-input-placeholder { 
  	color: #333;
  }
  &::-moz-placeholder { 
  	color: #333;
  }
  &:-ms-input-placeholder { 
  	color: #333;
  }
  &:-moz-placeholder { 
  	color: #333;
  } */
}
.addAccountForm .form-control:focus {
  border-color: #3377c0;
}

.addAccountForm .grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.addAccountForm .grid-item {
  width: 31.25%;
  display: flex;
  margin-bottom: 21px;
  cursor: pointer;
}
.addAccountForm .grid-item .thumb {
  width: 86.04%;
}
.addAccountForm .grid-item .heading {
  width: 13.96%;
  text-transform: uppercase;
  font-size: 11px;
  background: #b3b3b3;
  color: #fff;
  font-family: 'Poppins-Medium';
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1px;
}
.addAccountForm .grid-item.active .heading {
  background: #3377c0;
}
.addAccountForm .grid-item:hover img {
  opacity: 0.6;
}

/* Your styles here */
.custom-file-button {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  bottom: -50%;
}

.custom-file-button:hover {
  background: #333;
}

.addAccountForm .v3dp__datepicker {
  position: unset;
  background: transparent;
}

.addAccountForm.v3dp__datepicker .form-control {
  height: 42px;
  border: 1px solid #ccc;
  width: 100%;
  background: none;
  font-size: 15px;
  padding-left: 46px;
  color: #999;
  font-family: 'Poppins-Medium';
  position: unset;
}

/* input[type='file'] {
  display: none;
} */

/* ==========================================================================
   #SELECT2
   ========================================================================== */
.select--no-search .select2-search {
  display: block !important;
}

.rs-select2 .select2-container {
  width: 100% !important;
  outline: none;
  margin-top: 10px;
}

.rs-select2 select {
  border: none;
  outline: none;
  padding: 9px 0;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
}

.rs-select2 .select2-container .select2-selection--single {
  outline: none !important;
  border: none !important;
  height: 36px;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {
  line-height: 36px;
  padding-left: 0;
  color: #808080;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {
  height: 34px;
  right: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {
  display: none;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {
  font-family: 'Material-Design-Iconic-Font';
  content: '\f2f9';
  font-size: 18px;
  color: #ccc;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.rs-select2
  .select2-container.select2-container--open
  .select2-selection--single
  .select2-selection__arrow::after {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.select2-container--open .select2-dropdown--below {
  border: none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
  margin-top: 5px;
  overflow: hidden;
}
.js-datepicker {
  cursor: pointer;
  z-index: 999999999999;
}

.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  margin-top: 10px;
}

.drop-container:hover,
.drop-container.drag-active {
  background: #eee;
  border-color: #111;
}

.drop-container:hover .drop-title,
.drop-container.drag-active .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
}

input[type='file'] {
  width: 132px;
  /* width: 350px; */
  max-width: 100%;
  color: #eee;
  padding: 5px;
  /* background: #fff; */
  background: transparent;
  border-radius: 10px;
  border: 1px solid #555;
  border: none;
}

input[type='file']::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #e0a641;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
  background: #46847c;
}
.input-group span {
  color: red;
  font-size: 12px;
}
/* -------------Preloader-Css-Start-------------- */

/* Preloader */
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999999;
}

.loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--primery);
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.loader:before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--dark-black);
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

.loader:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--dark-greay);
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

.spin_text {
  transform-origin: 50% 50% 0;
  transform: rotate(0deg);
  -webkit-animation: spin 15s linear infinite;
  -moz-animation: spin 15s linear infinite;
  animation: spin 15s linear infinite;
}
.heading {
  position: relative;
}

.heading::before {
  position: absolute;
  content: '';
  display: block;
  width: 12%;
  height: 2px;
  top: 50%;
  left: 0;
  background: #e0a233;
}

.heading::after {
  position: absolute;
  content: '';
  display: block;
  width: 12%;
  height: 2px;
  top: 50%;
  right: 0;
  background: #e0a233;
}

@media screen and (max-width: 767px) {
  .addAccountForm h3 {
    font-size: 26px;
    letter-spacing: 2px;
  }
  .heading::before {
    width: 10%;
  }
  .heading::after {
    width: 10%;
  }
}

@media screen and (max-width: 520px) {
  .addAccountForm .wizard {
    padding: 58px 30px;
  }
  .drop-title {
    font-size: 18px;
  }
  .heading::before {
    width: 7%;
  }
  .heading::after {
    width: 7%;
  }
}

@media screen and (max-width: 425px) {
  .addAccountForm h3 {
    font-size: 21px;
    letter-spacing: 1px;
  }
  .drop-title {
    font-size: 18px;
  }
  .heading::before {
    width: 4%;
  }
  .heading::after {
    width: 4%;
  }
}

@media screen and (max-width: 350px) {
  .addAccountForm h3 {
    font-size: 19px;
    letter-spacing: 0px;
  }
  .heading::before {
    width: 2%;
  }
  .heading::after {
    width: 2%;
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* ------Round Animation------- */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* --------Object-Moving-Animation-Css-Start----- */
.moving_animation {
  animation: moving_object 6s infinite linear;
}

.moving_position_animatin {
  position: relative;
  animation: moving_position_animatin 6s infinite linear;
  z-index: -1;
}

@keyframes moving_object {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes moving_position_animatin {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

.well-sm {
  padding: 9px;
  border-radius: 3px;
}

.well {
  min-height: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #0a2c3f;
  border: 1px solid #0a2c3f;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  display: table;
  margin: auto;
  border-radius: 10px;
  color: #fff;
  min-width: 750px;
  /* max-width: 750px; */
}
.well .imgboxx {
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.well .imgboxx img {
  max-width: 100%;
}
/* .well a {
  color: #fff !important;
}
.well a:hover {
  color: #e09e1f !important;
} */
.well h4 {
  font-size: 2.5rem;
}

.well h5 {
  margin-bottom: 20px;
}
.img-rounded {
  border-radius: 6px;
}
.well .img-boxx {
  max-width: 100%;
}
.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.fas {
  margin-right: 15px;
}
button i.fa {
  margin-left: 12px;
}

.page_wrapper h2 {
  text-align: center;
}

.form-col span {
  font-size: 13px;
  color: red;
}

/* .Toastify__toast-container--top-right {
  right: 8.5em !important;
  top: 1em;
} */
</style>
