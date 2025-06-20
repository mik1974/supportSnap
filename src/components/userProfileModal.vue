<template>
  <div>
    <Transition name="modal">
      <div v-if="propValue" class="modal-mask">
        <div class="modal-container" ref="modal">
          <div class="modal-header">
            <slot name="header"><h3>Edit User Profile</h3></slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="card h-100">
                    <div class="card-body user-profile">
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mb-2 text-primary">Personal Details</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="fullName">First Name</label>
                            <input
                              v-model="state.vu_fname"
                              type="text"
                              class="form-control"
                              id="fullName"
                              placeholder="Enter First name"
                              :class="{ invaliddata: v$.vu_fname.$error }"
                            />
                            <span v-if="v$.vu_fname.$error">
                              {{ v$.vu_fname.$errors[0].$message }}
                            </span>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="fullName">Last Name</label>
                            <input
                              v-model="state.vu_lname"
                              type="text"
                              class="form-control"
                              id="fullName"
                              placeholder="Enter Last name"
                              :class="{ invaliddata: v$.vu_lname.$error }"
                            />
                            <span v-if="v$.vu_lname.$error">
                              {{ v$.vu_lname.$errors[0].$message }}
                            </span>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="phone">Phone</label>
                            <input
                              v-model="state.vu_phone"
                              v-mask="'+1(###)-###-####'"
                              placeholder="+1 555-555-5555"
                              type="tel"
                              class="form-control"
                              id="phone"
                              v-bind:class="{
                                'is-invalid': v$.vu_phone.$error && v$.vu_phone.$dirty
                              }"
                            />
                            <span v-if="v$.vu_phone.$error && v$.vu_phone.$dirty">
                              It is required only numeric and allowed not less than 10 and not above
                              than 14 Digits
                            </span>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="dob">Update Image</label>
                            <div class="clear"></div>
                            <!-- <img
                              v-if="
                                previewImage === '' ||
                                null ||
                                'https://virtualrealitycreators.com/supportsnap-backend/null'
                              "
                              :src="'images/team_01.png'"
                              class="img-thumbnail rounded-circle"
                              alt="Service"
                              style="height: 65px; width: 65px"
                            /> -->

                            <img
                              v-if="
                                
                                isPreviewImageValid
                              "
                              :src="'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'"
                              class="img-thumbnail rounded-circle"
                              alt="Service"
                              style="height: 65px; width: 65px"
                            />
                            <!-- <img
                              v-if="previewImage !== ''"
                              :src="previewImage"
                              class="img-thumbnail rounded-circle"
                              alt="Service"
                              style="height: 65px; width: 65px; margin-right: 15px"
                            /> -->
                            <img
                              v-if="
                                previewImage !==
                                'https://supportsnap.s3.us-east-2.amazonaws.com/null'
                              "
                              :src="previewImage"
                              class="img-thumbnail rounded-circle"
                              alt="Service"
                              style="height: 65px; width: 65px; margin-right: 15px"
                            />
                            <i class="fas fa-camera" @click="() => imageFile.click()"></i>
                            <input
                              class="ml"
                              type="file"
                              accept="image/jpeg"
                              @change="uploadImage"
                              ref="imageFile"
                              style="display: none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="button-area">
                    <div class="rightbtn">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-secondary"
                        @click="cancelModal"
                      >
                        Cancel
                      </button>
                    </div>
                    <div class="leftbtn">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-primaryy"
                        @click="submitForm()"
                      >
                        Update<span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed, ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import gsap from 'gsap'

const userId = ref('')
const previewImage = ref('')
const imageFile = ref(null)
const modal = ref(null)
const store = useStore()
const props = defineProps({
  propValue: Boolean
})

const state = reactive({
  vu_fname: '',
  vu_lname: '',
  vu_phone: ''
})

const rules = computed(() => ({
  vu_fname: { required, minLength: minLength(3) },
  vu_lname: { required, minLength: minLength(3) },
  vu_phone: {
    required,
    maxLength: maxLength(16)
    //validPhone
  }
}))
const v$ = useVuelidate(rules, state)
const cancelModal = () => {
  emit('pparentCloseModal')
}
const emit = defineEmits(['pparentCloseModal', 'child-closed', 'userUpdate'])

const userInfo = () => {
  // const user_data = JSON.parse(localStorage.getItem('user'))
  const user_data = computed(() => store.getters.getUser)
  state.vu_fname = user_data.value.name
  state.vu_lname = user_data.value.last_name
  state.vu_phone = user_data.value.phone
  userId.value = user_data.value.id
  previewImage.value = import.meta.env.VITE_APP_IMAGE_URL + user_data.value.profile_picture
}
const uploadImage = (e) => {
  const image = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(image)
  reader.onload = (e) => {
    previewImage.value = e.target.result
  }
}

const imageUrl = import.meta.env.VITE_APP_IMAGE_URL; // Store env variable in a script
const isPreviewImageValid = computed(() => {
  return !previewImage.value || previewImage.value === `${imageUrl}null`;
});

const submitForm = async () => {
  try {
    await v$.value.$validate()
    if (!v$.value.$error) {
      parentCloseModal()
    }
  } catch (error) {
    alert('form failed validation')
    //console.log(error)
  }
}

const parentCloseModal = () => {
  //console.log('I am in Modal submit')
  callApiforSendingData()
}

const callApiforSendingData = async () => {
  try {
    const formData01 = new FormData()
    formData01.append('id', userId.value)
    formData01.append('name', state.vu_fname)
    formData01.append('last_name', state.vu_lname)
    formData01.append('phone', state.vu_phone)

    if (imageFile.value && imageFile.value.files && imageFile.value.files[0]) {
      formData01.append('file', imageFile.value.files[0])
    }
    //console.log([...formData01, 'updated Data'])
    let response = await store.dispatch('updateUserProfileAction', formData01)
    //console.log(response, 'Me Here')
    if (response.status == 200) {
      await store.dispatch('verify')
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 3000,
        duration: 3000,
        autoClose: true,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: true,
        icon: true,
        rtl: false
      })
      emit('child-closed')
    }
  } catch (error) {
    error.value = error.response
  }
}

const zoomIn = () => {
  gsap.to(
    modal.value,
    { duration: 0.9, scale: 0.2, opacity: 1 },
    { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }
  )
}

const zoomOut = () => {
  gsap.to(modal.value, {
    scale: 0.2,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => emit('pparentCloseModal')
  })
  emit('pparentCloseModal')
}

watch(
  () => props.propValue,
  (newVal) => {
    if (newVal) {
      zoomIn()
    } else {
      zoomOut()
    }
  }
)

onMounted(userInfo)
</script>


/* Your styles here */
<style scoped >
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 20px;
}
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  transition: opacity 0.9s ease;
}

.modal-container {
  width: 900px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.9s ease;
  border-radius: 8px;
}

.modal-header h3 {
  margin-top: 0;
  color: #4a736d;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.leftbtn {
  float: left;
  background: #33756c;
  font-family: 'manrope';
  border-radius: 5px;
}
.leftbtn .btn {
  font-family: 'manrope';
  border-radius: 5px;
}
.rightbtn {
  float: right;
}
.rightbtn .btn {
  font-family: 'manrope';
  border-radius: 5px;
}
.button-area {
  margin-top: 15px;
}
.form-control:focus {
  border-color: #0b423a;
  box-shadow: 0 0 0 0.1rem rgba(74, 115, 109, 0.25);
}
.user-profile h6.text-primary {
  color: #4a766f !important;
}
.user-profile .form-group {
  margin-bottom: 15px;
}
.user-profile .form-group label {
  color: #4a736d;
}
.user-profile .btn-primaryy {
  background: #0b423a;
  color: #fff;
  padding-left: 40px;
  padding-right: 40px;
}
.user-profile .btn-primaryy:hover {
  background: #4a766f;
}
.user-profile .form-group span {
  color: red;
}
.form-group img {
  float: left;
}
.form-group .fas {
  font-size: 30px;
  margin-top: 15px;
  float: left;
  cursor: pointer;
}
.modal-footer {
  border: none;
  padding: 0;
}

@media screen and (max-width: 767px) {
  body {
    /* font-size: 14px; */
    text-align: left !important;
  }
  .well h4 {
    margin-top: 10px;
  }
}
</style>