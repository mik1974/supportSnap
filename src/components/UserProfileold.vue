<template>
  <section>
    <section>
      <!-- Page-wrapper-Start -->
      <div class="page_wrapper">
        <section class="review_section row_am page_ban">
          <div class="container">
            <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
              <span class="title_badge">User Info</span>
              <h2>User <span>Profile</span></h2>
              <p>
                I am always eager to leverage my skill set to contribute to innovative solutions and
                drive organizational success. I thrive in fast-paced environments and am
                continuously seeking opportunities for personal and professional growth.
              </p>

              <!-- <div class="google_rating">
                <div class="star">
                  <span><i class="icofont-star"></i></span>
                  <span><i class="icofont-star"></i></span>
                  <span><i class="icofont-star"></i></span>
                  <span><i class="icofont-star"></i></span>
                  <span><i class="icofont-star"></i></span>
                </div>
                <p>
                  4.9 / 5.0 Rated on App store |
                  <a href="#" class="rate_link">
                    1399 Total user reviews <i class="icofont-arrow-right"></i>
                  </a>
                </p>
              </div> -->
            </div>
            <div class="positive_inner in_page">
              <div class="row">
                <!-- <div class="col-xs-4 col-sm-4 col-md-4">
                  <div class="userDetail">
                    <h3>User Account Status</h3>
                    <ul>
                      <li class="nav-item">
                        <div class="btn_block">
                          <a
                            v-if="showAccountButton"
                            class="nav-link dark_btn"
                            href="#"
                            @click="handleaddAcount()"
                            >{{ btnLabel02 }}</a
                          >
                          <a v-if="onCompleteAccount" class="nav-link dark_btn disabled" href="#"
                >You Bank Account Details are already completed</a
              > 

                          <a
                            v-if="showAccountEditButton"
                            class="nav-link dark_btn disabled"
                            href="#"
                            @click="handleEditAcount()"
                            >{{ btnLabel02 }}</a
                          >

                         <div class="btn_bottom"></div> 
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> -->
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <div class="well well-sm">
                    <div class="row">
                      <div class="col-sm-12 col-md-4">
                        <div class="imgboxx">
                          <img
                            v-if="userImage"
                            :src="userImage"
                            alt=""
                            class="img-boxx img-responsive"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-8">
                        <h4>{{ userName }} {{ userLname }}</h4>
                        <br />
                        <h5>
                          <i class="fas fa-envelope"></i>
                          {{ userEmail }}
                          <br />
                        </h5>
                        <h5><i class="fas fa-phone"></i>{{ userPhone }}</h5>
                        <hr />
                        <div class="row mt-2">
                          <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="btn_block">
                              <a class="btn puprple_btn ml-0" id="show-modal" @click="openModal"
                                >Edit <i class="fas fa-pencil"></i
                              ></a>
                              <div class="btn_bottom"></div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="btn_block">
                              <a class="btn puprple_btn ml-0" @click="deletenow"
                                >Delete <i class="fa fa-trash"></i
                              ></a>
                              <div class="btn_bottom"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- End Page Title Section -->
    </section>

    <ModalProfile
      :propValue="isModalOpen"
      @pparentCloseModal="closeModal"
      @userUpdate="getUser"
      @child-closed="handleChildClosed"
    />
    <!-- <AccountPopup
      :propValue="isModalOpen01"
      @pparentCloseModal="closeModal01"
      :propUser="userName"
    />
    <AccountPopup02
      :propValue="isModalOpen02"
      @pparentCloseModal="closeModal02"
      :propUser="userName"
    /> -->
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted, getCurrentInstance } from 'vue'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ModalProfile from '../components/userProfileModal.vue'
// import AccountPopup from '../components/AccountDetailModal.vue'

// import AccountPopup02 from '../components/AccountDetailModal03.vue'

const store = useStore()
const router = useRouter()

const userName = ref('')
const userLname = ref('')
const userEmail = ref('')
const userPhone = ref('')
const userImage = ref('')
//const defaultImage = ref('images/user01.jpg')
const userProfile = ref({})
const modal = ref(null)
// const showAccountButton = ref(false)
// const showAccountEditButton = ref(false)
const isModalOpen = ref(false)
// const isModalOpen01 = ref(false)
// const isModalOpen02 = ref(false)
// const modal01 = ref(null)
// const modal02 = ref(null)


// let btnLabel = ref('')
// let btnLabel02 = ref('')
const { proxy } = getCurrentInstance()

const deleteUser = async () => {
  try {
    const deleteresult = await store.dispatch('deleteUser')
    if (deleteresult.status === 200) {
      proxy.$swal({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })
      router.push({ name: 'UserLogin' })
    }
  } catch (error) {
    //console.error(error)
  }
}

const openModal = () => {
  isModalOpen.value = true
  gsap.to(
    modal.value,
    { duration: 0.9, scale: 0.2, opacity: 1 },
    { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }
  )
}

const closeModal = () => {
  isModalOpen.value = false
}

const deletenow = async () => {
  proxy
    .$swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser()
      }
    })
}

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  userProfile.value = user
  userName.value = user.name
  userLname.value = user.last_name
  userEmail.value = user.email
  userPhone.value = user.phone
  userImage.value = import.meta.env.VITE_APP_IMAGE_URL + user.profile_picture

  // const isButton = JSON.parse(localStorage.getItem('isLoggedIn'))
  // if (isButton) {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   let onCompleteAccount = user.onboarding_completed
  //   let onBankAccount = user.bank_status
  //   let connectedId = user.connected_status

  //   btnLabel.value = 'Logout'
  //   // if (onBankAccount !== null) {

  //   if (onBankAccount == 1 && connectedId == 0 && onCompleteAccount == 0) {
  //     showAccountButton.value = true
  //     btnLabel02.value = 'Account Detail'
  //   } else if (connectedId == 1 && onCompleteAccount == 0) {
  //     showAccountButton.value = true
  //     btnLabel02.value = 'Account Detail'
  //   } else if (onCompleteAccount == 1) {
  //     btnLabel02.value = 'Your Bank Account Details are already completed'
  //     showAccountButton.value = false
  //     showAccountEditButton.value = true
  //   } else if (onBankAccount == 0) {
  //     btnLabel02.value = 'Enter Account Detail'
  //     showAccountButton.value = true
  //     showAccountEditButton.value = false
  //   }
  //   // }
  // } else {
  //   btnLabel.value = 'Login'
  //   showAccountButton.value = false
  //   showAccountEditButton.value = false
  // }
}

// const handleaddAcount = () => {
//   const user = JSON.parse(localStorage.getItem('user'))
//   let onCompleteAccount = user.onboarding_completed
//   let onBankAccount = user.bank_status
//   let connectedId = user.connected_status

//   if (onBankAccount == 1 && connectedId == 0 && onCompleteAccount == 0) {
//     router.push({ name: 'accountDetails' })
//   } else if (onBankAccount == 1 && connectedId == 1 && onCompleteAccount == 0) {
//     isModalOpen02.value = true
//     gsap.to(
//       modal02.value,
//       { duration: 0.1, scale: 0.2, opacity: 1 },
//       { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
//     )
//   } else if (connectedId == 1 && onCompleteAccount == 1) {
//     onCompleteAccount = true
//   } else {
//     isModalOpen01.value = true
//     gsap.to(
//       modal01.value,
//       { duration: 0.1, scale: 0.2, opacity: 1 },
//       { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
//     )
//   }
// }

// const closeModal01 = () => {
//   isModalOpen01.value = false
// }

// const closeModal02 = () => {
//   isModalOpen02.value = false
// }

// const handleEditAcount = () => {
//   console.log('I am here in edit mode')
//   // router.push({ name: 'accountUpdate' })
// }

// const getUpdatedUser = (newData) => {
//   userName.value = newData.name
//   userEmail.value = newData.email
//   userPhone.value = newData.phone
//   userImage.value =
//   import.meta.env.VITE_APP_IMAGE_URL + newData.profile_picture
// }

const handleChildClosed = () => {
 // console.log('Child component closed, performing actions in the parent component')
  nextTick(() => {
    getUser()
  })
}

const handleScroll = () => {
  const scrollPosition = window.scrollY
  // Perform actions based on scroll position
 // console.log(`Scroll position: ${scrollPosition}`)
  // Example: Perform some animation or trigger some effect based on scroll position
}

onMounted(() => {
  getUser()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Your styles here */
.contact-form {
  display: table;
  min-width: 500px;
  margin: auto;
}
.contact-section .card {
  min-height: 265px;
}
.contact-section .my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 2.5rem !important;
}
.card-profile-image {
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 0px;
}
.card-profile-image img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;
  display: table;
}
.infoboxx {
  padding: 30px;
}
.userInfo {
  position: relative;
  margin-top: -15px;
}
.userInfo .lotiibox {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
}
.userInfo .section-title {
  margin-bottom: 0;
  text-align: left;
}
.infolabel {
  font-weight: 700;
  color: #000;
  text-align: right;
  font-family: 'dosis';
}
.infodes {
  font-weight: 400;
  color: #aa1d88;
  font-size: 1rem;
}
.default-btn-two {
  margin-top: 0;
}
.page-title-content ul {
  margin: auto;
  margin-top: 12px;
  margin-bottom: 0;
  display: table;
  width: auto;
  padding: 0;
}
.glyphicon {
  margin-bottom: 10px;
  margin-right: 10px;
}

small {
  display: block;
  line-height: 1.428571429;
  color: #999;
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
  /*min-width: 750px;*/
  max-width: 750px;
  width: 100%;
}
.well .imgboxx {
  max-width: 350px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: table;
  margin: auto;
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

.btn_block a:hover {
  color: #000 !important;
}

@media screen and (max-width: 767px) {
  /* body {
    /* font-size: 14px; 
    text-align: left !important;
  } */
  .well {
    text-align: center;
    margin-top: 30px;
  }

  .btn_block {
    margin-bottom: 15px;
  }
  .well h4 {
    font-size: 1.7rem;
  }
  .navbar-expand-lg .navbar-nav .nav-link.dark_btn {
    padding: 9px 15px;
  }
}

@media screen and (max-width: 625px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: column !important;
  }
}
</style>
