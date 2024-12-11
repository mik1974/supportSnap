<template>
  <section>
    <div class="page_wrapper">
      <!-- Contact Us Section Start -->
      <section class="contact_section">
        <div class="container">
          <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
            <span class="title_badge">Contact us</span>
            <h2>Any query ? <span>let's talk</span></h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing indus orem Ipsum
              <br />
              has been the industrys standard dummy text ever since.
            </p>
          </div>
          <ul class="contact_listing">
            <li data-aos="fade-up" data-aos-duration="1500">
              <span class="icon">
                <img src="/images/mail_icon.png" alt="image" />
              </span>
              <span class="lable">Email us</span>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="150">
              <span class="icon">
                <img src="/images/phone_icon.png" alt="image" />
              </span>
              <span class="lable">Call us</span>
              <a href="tel:1234567899">+1 123 456 7890</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              <span class="icon">
                <img src="/images/location_icon.png" alt="image" />
              </span>
              <span class="lable">Our location</span>
              <a target="_blank" href="https://www.google.com/maps">Open Google Maps</a>
            </li>
          </ul>
        </div>
      </section>
      <!-- Contact Us Section End -->

      <!-- Contact Form Section Start -->
      <section class="contact_form white_text row_am" data-aos="fade-in" data-aos-duration="1500">
        <div class="contact_inner">
          <div class="container">
            <div class="dotes_blue">
              <img src="/images/blue_dotes.png" alt="image" />
            </div>
            <div
              class="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <span class="title_badge">Message us</span>
              <h2>Drop a message us</h2>
              <p>Fill up form below, our team will get back soon</p>
            </div>

            <form data-aos="fade-up" data-aos-duration="1500" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name *"
                      v-model="state.vu_fname"
                      v-bind:class="{
                        invaliddata: v$.vu_fname.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_fname.$error">
                      <span>{{ v$.vu_fname.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name *"
                      v-model="state.vu_lname"
                      v-bind:class="{
                        invaliddata: v$.vu_lname.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_lname.$error">
                      <span>{{ v$.vu_lname.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject *"
                      v-model="state.vu_subject"
                      v-bind:class="{
                        invaliddata: v$.vu_subject.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_subject.$error">
                      <span>{{ v$.vu_subject.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address *"
                      v-model="state.vu_email"
                      v-bind:class="{
                        invaliddata: v$.vu_email.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_email.$error">
                      <span>{{ v$.vu_email.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone"
                      v-model="state.vu_phone"
                      v-bind:class="{
                        invaliddata: v$.vu_phone.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_phone.$error">
                      <span>{{ v$.vu_phone.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      v-model="state.vu_address"
                      v-bind:class="{
                        invaliddata: v$.vu_address.$error == true
                      }"
                    />
                    <div class="myerror" v-if="v$.vu_address.$error">
                      <span>{{ v$.vu_address.$errors[0].$message }}</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Comments"
                      v-model="state.vu_message"
                      v-bind:class="{
                        invaliddata: v$.vu_message.$error == true
                      }"
                    ></textarea>
                    <div class="myerror" v-if="v$.vu_message.$error">
                      {{ v$.vu_message.$errors[0].$message }}
                    </div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="coustome_checkbox">
                    <!-- <label for="term_checkbox">
                      <input type="checkbox" id="term_checkbox" />
                      <span class="checkmark"></span>
                      I agree to receive emails, newsletters and promotional messages
                    </label> -->
                    <vue-recaptcha-new
                      :sitekey="siteKey"
                      size="normal"
                      theme="light"
                      hl="en"
                      :loading-timeout="loadingTimeout"
                      @verify="recaptchaVerified"
                      @expire="recaptchaExpired"
                      @fail="recaptchaFailed"
                      @error="recaptchaError"
                      ref="vueRecaptcha"
                    >
                    </vue-recaptcha-new>
                    <div v-if="recaptchaErrorMsg">{{ recaptchaErrorMsg }}</div>
                  </div>
                </div>
                <div class="col-md-4 text-right">
                  <div class="btn_block">
                    <button class="btn puprple_btn ml-0">Submit</button>
                    <!-- <div class="btn_bottom"></div> -->
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- Contact Form Section End -->

      <!-- Google Map Start -->
      <div class="map_block row_am" data-aos="fade-in" data-aos-duration="1500">
        <div class="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103190.9858395081!2d-115.2979677164074!3d36.07597430119342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1691230337798!5m2!1sen!2sin"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <!-- Google Map End -->
    </div>
    <Footer />
  </section>
</template>

<script setup>
import vueRecaptchaNew from 'vue3-recaptcha2'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'

const vueRecaptcha = ref(null) // Reference for vue-recaptcha
const loadingTimeout = ref()
const isRecaptchaVerified = ref(false)
const recaptchaErrorMsg = ref('')

const state = reactive({
  vu_fname: '',
  vu_lname: '',
  vu_email: '',
  vu_phone: '',
  vu_subject: '',
  vu_address: '',
  vu_message: ''
})

const rules = computed(() => {
  return {
    vu_fname: { required: helpers.withMessage('First Name is required', required) },
    vu_lname: { required: helpers.withMessage('Last Name is required', required) },
    vu_email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Please enter a valid email address', email)
    },
    vu_phone: {
      required: helpers.withMessage('Phone Number is Required', required),
      numeric,
      minLength: helpers.withMessage('Phone number must be 14 digits', required, minLength(14))
    }, // Adjust minLength as needed
    vu_subject: { required: helpers.withMessage('Subject is required', required) },
    vu_address: { required: helpers.withMessage('Address is required', required) },
    vu_message: { required: helpers.withMessage('Message is required', required) }
  }
})
const v$ = useVuelidate(rules, state)
const onSubmit = () => {
  try {
    v$.value.$validate()
    console.log('Validation State:', v$.value)
    console.log('Validation Errors:', v$.value.$error)
    if (!v$.value.$error) {
      // Check if reCAPTCHA is verified

      if (!isRecaptchaVerified.value) {
        console.log(isRecaptchaVerified.value, 'Recaptcha Verification')
        recaptchaErrorMsg.value = 'Please complete the reCAPTCHA verification.'
        return // Stop form submission
      }
      // Clear the error message if verified
      recaptchaErrorMsg.value = '';
      // Proceed with the form submission if valid and verified
      callContact()
    }
  } catch (error) {
    alert('form failed validation')
  }
}
const siteKey = computed(() => {
  return window.location.hostname === 'localhost'
    ? import.meta.env.VITE_LOCAL_SITE_KEY
    : import.meta.env.VITE_SERVER_SITE_KEY
})
const callContact = () => {
  // Send form data via SMTP.js

  window.Email.send({
    SecureToken: import.meta.env.VITE_YOUR_SMTPJS_SECURE_TOKEN, // Replace with your secure token from smtpjs.com
    To: 'vrc.imrankhan@gmail.com', // Replace with the recipient's email
    From: 'vrc.imrankhan@gmail.com', // Use the form's sender email input value
    Subject: state.vu_subject,
    ReplyTo: state.vu_email,
    Body: `
      <p><strong>First Name:</strong> ${state.vu_fname}</p>
      <p><strong>Last Name:</strong> ${state.vu_lname}</p>
      <p><strong>Email:</strong> ${state.vu_email}</p>
      <p><strong>Phone:</strong> ${state.vu_phone}</p>
      <p><strong>Message:</strong> ${state.vu_message}</p>
    `
  }).then(
    (response) => {
      alert('Email sent successfully: ' + response)
      // Optionally clear form fields
      // Refresh the page
      window.location.reload()
      // this.state.vu_name = '';
      // this.state.vu_email = '';
      // this.state.vu_phone = '';
      // this.state.vu_subject = '';
      // this.state.vu_message = '';
    },
    (error) => alert('Failed to send email: ' + error)
  )
}

// function recaptchaVerified() {
//   state.isRecaptchaVerified.value = true // Update state on successful verification
// }
// function recaptchaExpired() {
//   vueRecaptcha?.value?.reset()
// }

const recaptchaVerified = () => {
  isRecaptchaVerified.value = true // Update the reCAPTCHA verification status
}

const recaptchaExpired = () => {
  isRecaptchaVerified.value = false // Reset the verification status when expired
}

function recaptchaFailed() {}
function recaptchaError(reason) {
  console.error(reason)
}
</script>

<style scoped>
/* Your styles here */
.myerror {
  color: #fff;
  font-size: 13px;
}
</style>