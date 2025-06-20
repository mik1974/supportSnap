<template>
  <section>
    <div class="page-wrapper p-t-180 p-b-100 font-robo">
      <div class="wrapper wrapper--w960">
        <h1>Account Details</h1>
        <div class="card card-2">
          <div class="card-heading"><div class="innerbox"></div></div>
          <div class="card-body">
            <div class="title">
              <h2>{{ userName }}</h2>
              <span>{{ userEmail }}</span>
            </div>

            <form @submit.prevent="submitForm">
              <!-- <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="Name" name="name">
                        </div> -->
              <div class="row row-space">
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="input-group">
                    <input
                      class="input--style-2"
                      type="text"
                      v-model="state.vu_firstName"
                      placeholder="First Name"
                      :class="{ invaliddata: v$.vu_firstName.$error }"
                    />
                    <span v-if="v$.vu_firstName.$error">
                      {{ v$.vu_firstName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="input-group">
                    <!-- <input class="input--style-2" type="text" placeholder="State" name="state" /> -->
                    <input
                      class="input--style-2"
                      type="text"
                      v-model="state.vu_lastName"
                      placeholder="Last Name"
                      :class="{ invaliddata: v$.vu_lastName.$error }"
                    />
                    <span v-if="v$.vu_lastName.$error">
                      {{ v$.vu_lastName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="input-group">
                    <input
                      class="input--style-2"
                      type="text"
                      placeholder="SSN Last Code"
                      name="ssn_last_4"
                      v-model="state.vu_ssn_last_4"
                      maxlength="4"
                      @input="validateDigitsOnly02"
                    />
                    <span v-if="v$.vu_ssn_last_4.$error">
                      {{ v$.vu_ssn_last_4.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="input-group">
                    <!-- <input
                    class="input--style-2 js-datepicker"
                    type="text"
                    placeholder="Birthdate"
                    name="birthday"
                    v-model="dob"
                  /> -->
                    <Datepicker
                      v-model="state.vu_selectedDate"
                      ref="datepickers"
                      class="input--style-02 js-datepicker"
                      inputFormat="dd-MM-yyyy"
                    />

                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    <span v-if="v$.vu_selectedDate.$error">
                      {{ v$.vu_selectedDate.$errors[0].$message }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="row row-space">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <label for="images" class="drop-container" id="dropcontainer">
                    <span class="drop-title">Drop files here</span>
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
                <button class="btn puprple_btn ml-0" type="submit">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//import fileType from '@/assets/filetype'

import { ref, reactive, onMounted, computed, watch } from 'vue'
// import { toast } from 'vue3-toastify'
import Datepicker from 'vue3-datepicker'
import { getDate, getMonth, getYear } from 'date-fns'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
// import {reactive, computed, ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const imageFile = ref(null)
const formatPattern = 'dd-MM-yyyy'
const selectedDate = ref(new Date(), formatPattern)
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

const validateDigitsOnly02 = (event) => {
  // Replace any non-digit character with an empty string
  const digitsOnly = event.target.value.replace(/\D/g, '')

  state.vu_ssn_last_4 = digitsOnly
}

// Selected country and state

const userName = ref('')
const userEmail = ref('')

const loadCurrentUser = () => {
  currentUser.userInfo = JSON.parse(localStorage.getItem('user'))
  userName.value = currentUser.userInfo.name
  userEmail.value = currentUser.userInfo.email
  state.vu_firstName = currentUser.userInfo.name
}

watch()

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
  vu_selectedDate: ref(new Date(), formatPattern),
  vu_ssn_last_4: '',
  vu_file: ''
})

const rules = computed(() => ({
  vu_firstName: { required },
  vu_lastName: { required },
  vu_selectedDate: { required },
  vu_ssn_last_4: { required, minLength: minLength(4), maxLength: maxLength(4), validNum }
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
  try {
    // console.log('Hi Dear', selectedDate.value, day.value, month.value, year.value)

    const formData02 = new FormData()
    formData02.append('conuntry', state.vu_selectedCountry)
    formData02.append('state', state.vu_selectedState)
    formData02.append('city', state.vu_city)
    formData02.append('day', day.value)
    formData02.append('month', month.value)
    formData02.append('year', year.value)
    formData02.append('line1', state.vu_streetAddress)
    formData02.append('postal_code', state.vu_postalCode)
    formData02.append('ssn_last_4', state.vu_ssn_last_4)
    // console.log('Country', state.vu_selectedCountry, 'Month', month.value)

    if (imageFile.value && imageFile.value.files && imageFile.value.files[0]) {
      formData02.append('identity_document', imageFile.value.files[0])
    }

    let response = await store.dispatch('AccountDetail', formData02)
    //console.log(response, 'Ali Imran')
    if (response.data.status == 200) {
      await store.dispatch('verify')
    }
    //console.log(response.data.message)

    // console.log('Country', state.vu_selectedCountry, 'Picture:', imageFile.value.files[0])
  } catch (error) {
    //alert('form failed validation')
    console.log(error)
  }
}

const hitUserBankAccount = async () => {
  let accoutResponse = await store.dispatch('AccountUpdate')
  //console.log(accoutResponse, "Account Update Detail")
}

onMounted(() => {
  loadCurrentUser()
  hitUserBankAccount()

  // Ensure states are populated
})
</script>

<style scoped>
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
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
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
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #555;
}

input[type='file']::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #0b2b3e;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
  background: #e09e1f;
}
.input-group span {
  color: red;
  font-size: 12px;
}
</style>