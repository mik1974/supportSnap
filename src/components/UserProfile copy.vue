<template>
  <section>
    <section>
      <!-- Page-wrapper-Start -->
      <div class="page_wrapper bigbg">
        <section class="review_section row_am page_ban">
          <div class="container">
            <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
              <!-- <span class="title_badge">User Info</span> -->
              <h2>User <span>Profile</span></h2>
              <!-- <p>
                I am always eager to leverage my skill set to contribute to innovative solutions and
                drive organizational success. I thrive in fast-paced environments and am
                continuously seeking opportunities for personal and professional growth.
              </p> -->

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
            <div class="profileArea">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                  <div class="userCard">
                    <div class="imgboxx">
                      <img
                        v-if="userImage"
                        :src="userImage"
                        alt=""
                        class="img-boxx img-responsive"
                      />
                    </div>
                    <h4>{{ userName }} {{ userLname }}</h4>

                    <div class="userCardInfo">
                      <div class="container">
                        <div class="row infoRow">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h5>
                              <i class="fas fa-envelope"></i>
                              {{ userEmail }}
                            </h5>
                          </div>
                        </div>
                        <div class="row infoRow">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h5><i class="fas fa-phone"></i>{{ formattedPhone }}</h5>
                          </div>
                        </div>

                        <!-- <div class="row infoRow">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h5><i class="fas fas fa-money-check"></i>{{ btnLabel02 }}</h5>
                          </div>
                        </div> -->

                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="btnboxx">
                              <div class="row mt-2">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                  <div class="btn_block">
                                    <i class="fas fa-pencil"></i>
                                    <a
                                      class="btn puprple_btnn ml-0"
                                      id="show-modal"
                                      @click="openModal"
                                      >Edit
                                    </a>
                                    <!-- <div class="btn_bottom"></div> -->
                                  </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                  <div class="btn_block">
                                    <i class="fas fa-trash"></i>
                                    <a class="btn puprple_btnn ml-0" @click="deletenow">Delete </a>
                                    <!-- <div class="btn_bottom"></div> -->
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
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                  <div class="container">
                    <div class="userBankcard">
                      <div class="userBankCardTop">
                        <h3>Bank Account</h3>
                      </div>
                      <div class="userBankCardInfo">
                        <div class="userBankCardStatus">Status :</div>
                        <div class="userBankCardStatusInfo">
                          <div v-if="showBankAccountButton == true">
                            <span
                              :class="computedClassBanktatus"
                              v-tooltip.bottom="computedBankStatusTooltip"
                            >
                              <!-- <span
                              :class="computedClassBanktatus"
                              v-tooltip="{
                                value: computedBankStatusTooltip,
                                position: tooltipPosition
                              }"
                            > -->
                              {{ btnLabel01 }}
                            </span>
                            <!-- <a
                              href="#"
                              @click="handleaddAcount()"
                              :class="{ pointerr: isPointer }"
                              >{{ btnLabel01 }}</a
                            > -->
                          </div>

                          <!-- <div v-if="showAccountButton == true">
                            <a
                              href="#"
                              @click="handleaddAcount()"
                              :class="{ pointerr: isPointer }"
                              >{{ btnLabel02 }}</a
                            >
                          </div> -->
                        </div>
                      </div>
                      <div v-if="isPointerBank == true">
                        <div v-if="showAccountEditButton == true">
                          <div class="userBankCardInfo">
                            <div class="userBankCardStatus">Require Action :</div>
                            <div class="userBankCardStatusInfo">
                              <a href="#" @click="handleeidtAcount()">
                                <span
                                  :class="computedClassBankAction"
                                  v-tooltip.bottom="computedBankActionTooltip"
                                >
                                  {{ btnLabel03 }}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div v-if="isPointerBank == true">
                        <!-- <div v-if="showKYCAccountButton == true"> -->
                        <div v-if="showBankAccountButton == true && showAccountEditButton == false">
                          <div class="userBankCardInfo">
                            <div class="userBankCardStatus">Require Action :</div>
                            <div class="userBankCardStatusInfo">
                              <a href="#" @click="handleaddAcount()()">
                                <span
                                  :class="computedClassBankAction"
                                  v-tooltip.bottom="computedBankActionTooltip"
                                >
                                  {{ btnLabel03 }}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="container">
                    <div class="userKYCcard">
                      <div class="userKYCcardTop">
                        <h3>KYC Process</h3>
                      </div>
                      <div class="userKYCcardInfo">
                        <div class="userKYCcardStatus">Status :</div>
                        <div class="userKYCcardStatusInfo">
                          <div v-if="showKYCAccountButton == true">
                            <span
                              :class="computedClassKYCStatus"
                              v-tooltip.bottom="computedTooltipKYCStatus"
                            >
                              {{ btnLabel02 }}</span
                            >

                            <!-- <a
                              href="#"
                              @click="handleaddAcount()"
                              :class="{ pointerr: isPointer }"
                              >{{ btnLabel02 }}</a
                            > -->
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="
                          isPointerKYC == true &&
                          showKYCAccountButton == true &&
                          showEditIdentityDocumentButton == false
                        "
                      >
                        <div class="userKYCcardInfo">
                          <div class="userKYCcardStatus">Required Action :</div>

                          <a href="#" @click="handleaddAcount()">
                            <span
                              :class="computedClassKYCAction"
                              v-tooltip.bottom="computedTooltipKYCAction"
                            >
                              {{ btnLabel04 }}</span
                            ></a
                          >
                        </div>
                      </div>

                      <div
                        v-if="
                          isPointerKYC == true &&
                          showKYCAccountButton == true &&
                          showEditIdentityDocumentButton == true
                        "
                      >
                        <div class="userKYCcardInfo">
                          <div class="userKYCcardStatus">Required Action :</div>

                          <a href="#" @click="handleeidtIdentityDocument()">
                            <span
                              :class="computedClassKYCAction"
                              v-tooltip.bottom="computedTooltipKYCAction"
                            >
                              {{ btnLabel04 }}</span
                            ></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="positive_inner in_page">
              <div class="row hideArea">
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
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                  <ul class="navbar-navv">
                    <!-- Menu for logged-in user -->
                    <li class="nav-item">
                      <div class="dropdown-menu">
                        <div v-if="showAccountButton == true">
                          <a class="dropdown-item" href="#" @click="handleaddAcount()"
                            ><i class="fas fas fa-money-check"></i>{{ btnLabel02 }}</a
                          >
                        </div>
                        <div v-if="showAccountEditButton == true">
                          <a class="dropdown-item" href="#" @click="handleeidtAcount()"
                            ><i class="fas fas fa-money-check"></i>{{ btnLabel03 }}</a
                          >
                        </div>

                        <router-link to="/user-profile" class="dropdown-item"
                          ><i class="fas fas fa-address-card"></i>User Profile</router-link
                        >
                        <a href="#" class="dropdown-item" @click="handleLogout()"
                          ><i class="fas fas fa-right-from-bracket"></i>Logout</a
                        >
                      </div>
                    </li>

                    <!-- Menu for guest user -->
                    <!-- <li class="nav-item">
                      <i class="fas fa-user"></i> User info
                      <div class="dropdown-menu">
                        <a href="#" class="dropdown-item" @click="handleLogin()">Login</a>
                      </div>
                    </li> -->
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                  <div class="well well-sm">
                    <div class="row">
                      <div class="col-sm-12 col-md-12 col-lg-5">
                        <div class="imgboxx">
                          <img
                            v-if="userImage"
                            :src="userImage"
                            alt=""
                            class="img-boxx img-responsive"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-7">
                        <div class="detailboxx">
                          <h4>{{ userName }} {{ userLname }}</h4>

                          <h5>
                            <i class="fas fa-envelope"></i>
                            {{ userEmail }}
                            <br />
                          </h5>
                          <h5><i class="fas fa-phone"></i>{{ formattedPhone }}</h5>
                          <h5><i class="fas fas fa-money-check"></i>{{ btnLabel02 }}</h5>
                          <div class="btnboxx">
                            <hr />
                            <div class="row mt-2">
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="btn_block">
                                  <i class="fas fa-pencil"></i>
                                  <a
                                    class="btn puprple_btnn ml-0"
                                    id="show-modal"
                                    @click="openModal"
                                    >Edit
                                  </a>
                                  <!-- <div class="btn_bottom"></div> -->
                                </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="btn_block">
                                  <i class="fas fa-trash"></i>
                                  <a class="btn puprple_btnn ml-0" @click="deletenow">Delete </a>
                                  <!-- <div class="btn_bottom"></div> -->
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
            </div>
          </div>
        </section>
      </div>
      <!-- End Page Title Section -->

      <!-- <div class="profile-card">
    <div class="profile-image">
      <img src="https://via.placeholder.com/150" alt="Alina Smith">
    </div>
    <div class="profile-info">
      <h2>Alina Smith</h2>
      <p>Senior UX/UI Designer</p>
      <div class="profile-stats">
        <div>
          <h3>342</h3>
          <p>Posts</p>
        </div>
        <div>
          <h3>120k</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>285</h3>
          <p>Following</p>
        </div>
      </div>
      <div class="profile-actions">
        <button class="btn follow-btn">Follow</button>
        <button class="btn message-btn">Message</button>
      </div>
    </div>
  </div> -->
    </section>

    <ModalProfile
      :propValue="isModalOpen"
      @pparentCloseModal="closeModal"
      @userUpdate="getUser"
      @child-closed="handleChildClosed"
    />
    <AccountPopup
      :propValue="isModalOpen01"
      @pparentCloseModal="closeModal01"
      :propUser="userName"
    />
    <AccountPopup02
      :propValue="isModalOpen02"
      @pparentCloseModal="closeModal02"
      :propUser="userName"
    />
    <AccountPopup002
      :propValue="isModalOpen002"
      @pparentCloseModal="closeModal002"
      :propUser="userName"
    />
    <!-- <AccountEditPopup
      :propValue="isModalOpen03"
      @pparentCloseModal="closeModal03"
      :propUser="userName"
    /> -->
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted, getCurrentInstance, computed } from 'vue'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ModalProfile from '../components/userProfileModal.vue'
import AccountPopup from '../components/AccountDetailModal.vue'
// import AccountEditPopup from './AccountDetailUpdateModalllllll.vue'
import AccountPopup02 from '../components/AccountDetailModal03.vue'
import AccountPopup002 from '../components/AccountDetailModal003.vue'
//import Tooltip from 'primevue/tooltip'

const store = useStore()
const router = useRouter()
const isPointerBank = ref(false)
const isPointerKYC = ref(false)
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
const isModalOpen01 = ref(false)
const isModalOpen02 = ref(false)
const isModalOpen002 = ref(false)
// const isModalOpen03 = ref(false)
const modal01 = ref(null)
const modal02 = ref(null)
const modal002 = ref(null)
// const modal002 = ref(null)
// const modal03 = ref(null)
let btnLabel01 = ref('')
let btnLabel02 = ref('')
let btnLabel03 = ref('')
let btnLabel04 = ref('')
const showBankAccountButton = ref(false)
const showKYCAccountButton = ref(false)
const showAccountEditButton = ref(false)
const showEditIdentityDocumentButton = ref(false)
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

const computedClassBanktatus = computed(() => {
  if (showBankAccountButton.value == true && btnLabel01.value == 'Verified') return 'classOne'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Provided') return 'classTwo'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Not Provided') return 'classThree'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedBankStatusTooltip = computed(() => {
  if (showBankAccountButton.value == true && btnLabel01.value == 'Verified')
    return 'KYC process completed and bank account verified!'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Provided')
    return 'Bank account provided.'

  if (showBankAccountButton.value == true && btnLabel01.value == 'Not Provided')
    return 'Bank detail not provided.'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedClassBankAction = computed(() => {
  if (showAccountEditButton.value == true && btnLabel03.value == 'Edit Account Detail')
    return 'classOneAction'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Provided') return 'classTwoAction'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Not Provided')
    return 'classThreeAction'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedBankActionTooltip = computed(() => {
  if (showAccountEditButton.value == true && btnLabel03.value == 'Edit Account Detail')
    return 'Bank account verified. You can edit the account detail now'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Provided')
    return 'Bank account provided, complete the process to verify the account.'
  if (showBankAccountButton.value == true && btnLabel01.value == 'Not Provided')
    return 'Please enter the bank detail from mobile app.'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedClassKYCStatus = computed(() => {
  if (showKYCAccountButton.value == true && btnLabel02.value == 'Completed') return 'classOne'
  if (showKYCAccountButton.value == true && btnLabel02.value == 'Incomplete') return 'classThree'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedTooltipKYCStatus = computed(() => {
  if (showKYCAccountButton.value == true && btnLabel02.value == 'Completed')
    return 'KYC Process completed successfully!'

  if (showKYCAccountButton.value == true && btnLabel02.value == 'Incomplete')
    return 'KYC process is incompleted.'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedClassKYCAction = computed(() => {
  if (
    showKYCAccountButton.value == true &&
    showEditIdentityDocumentButton.value == true &&
    btnLabel04.value == 'Edit KYC Identity Document'
  )
    return 'classOneAction'
  if (
    showKYCAccountButton.value == true &&
    showEditIdentityDocumentButton.value == false &&
    btnLabel02.value == 'Incomplete'
  )
    return 'classThreeAction'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

const computedTooltipKYCAction = computed(() => {
  if (
    showKYCAccountButton.value == true &&
    showEditIdentityDocumentButton.value == true &&
    btnLabel04.value == 'Edit KYC Identity Document'
  )
    return 'Your Identity Document has been expired, Please update your Identity Document.'

  if (
    showKYCAccountButton.value == true &&
    showEditIdentityDocumentButton.value == false &&
    btnLabel04.value == 'Resend Email For KYC'
  )
    return 'Click to send Stripe Link again to your email ID, and check your email inbox for completing the KYC process.'
  // if (condition3) return 'classThree'
  return '' // Default class or no class
})

// Function to format the phone number
const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '') // Remove non-digit characters
  const countryCode = `+${cleaned.slice(0, 1)}` // Extract country code (assuming single-digit)
  const areaCode = cleaned.slice(1, 4) // Extract area code
  const firstPart = cleaned.slice(4, 7) // Extract first 3 digits
  const secondPart = cleaned.slice(7, 12) // Extract last 4 digits
  if (areaCode && firstPart && secondPart) {
    return `${countryCode} (${areaCode})-${firstPart}-${secondPart}`
  }
  return phone // Return unformatted if the number is incomplete
}

// Computed property to show the formatted phone number
const formattedPhone = computed(() => formatPhoneNumber(userPhone.value))

const getUser = () => {
  const cUser = computed(() => store.getters.getUser)
  //const user = JSON.parse(localStorage.getItem('user'))
  //console.log(cUser, 'User')
  userProfile.value = cUser.value
  userName.value = cUser.value.name
  userLname.value = cUser.value.last_name
  userEmail.value = cUser.value.email
  userPhone.value = cUser.value.phone
  userImage.value = import.meta.env.VITE_APP_IMAGE_URL + cUser.value.profile_picture

  //this.imgVal = currentUser.profile_image;
  if (userImage.value == 'https://virtualrealitycreators.com/supportsnap-backend/null') {
    userImage.value =
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'
  } else {
    userImage.value = import.meta.env.VITE_APP_IMAGE_URL + cUser.value.profile_picture
  }

  let onCompleteAccount = cUser.value.onboarding_completed
  let onBankAccount = cUser.value.bank_status
  let connectedId = cUser.value.connected_status

  if (onBankAccount == 1 && connectedId == 0 && onCompleteAccount == 0) {
    showKYCAccountButton.value = true
    showBankAccountButton.value = true
    btnLabel02.value = 'Incomplete'
    btnLabel04.value = 'Add Account Detail'
    btnLabel03.value = 'Add KYC Account Detail'
    btnLabel01.value = 'Provided'
    showAccountEditButton.value = false
    isPointerBank.value = true
    isPointerKYC.value = false
  }
  if (connectedId == 1 && onCompleteAccount == 0) {
    showBankAccountButton.value = true
    showKYCAccountButton.value = true
    showAccountEditButton.value = false
    showEditIdentityDocumentButton.value = false
    btnLabel02.value = 'Completed'
    //btnLabel04.value = 'Resend Email For KYC'
    //btnLabel03.value = 'Edit Account Detail'
    btnLabel03.value = 'Verify Bank Detail'
    btnLabel01.value = 'Provided'
    isPointerBank.value = true
    isPointerKYC.value = false
  }
  if (connectedId == 1 && onCompleteAccount == 1) {
    showBankAccountButton.value = true
    showAccountEditButton.value = true
    showKYCAccountButton.value = true
    showEditIdentityDocumentButton.value = false
    btnLabel01.value = 'Verified'
    btnLabel02.value = 'Completed'
    btnLabel03.value = 'Edit Account Detail'
    btnLabel04.value = 'Edit KYC Identity Document'
    isPointerBank.value = true
    if (showEditIdentityDocumentButton.value == true) {
      isPointerKYC.value = true
    }
  }
  if (onCompleteAccount == 1) {
    btnLabel01.value = 'Verified'
    btnLabel02.value = 'Completed'

    showBankAccountButton.value = true
    showKYCAccountButton.value = true
    showAccountEditButton.value = true
    showEditIdentityDocumentButton.value = false
    btnLabel03.value = 'Edit Account Detail'
    btnLabel04.value = 'Edit KYC Identity Document'
    if (showEditIdentityDocumentButton.value == true) {
      isPointerKYC.value = true
    }
    isPointerBank.value = true
  }

  // if (btnLabel01.value == 'Provided') {
  //   pointer.value = true
  // }
  // if (btnLabel02.value == 'Completed') {
  //   pointer.value = true
  // }

  if (onBankAccount == 0) {
    btnLabel02.value = 'Incomplete'
    btnLabel03.value = 'Provide Bank Account Detail'
    btnLabel01.value = 'Not Provided'
    btnLabel04.value = 'Complete the KYC Process'
    showBankAccountButton.value = true
    showKYCAccountButton.value = true
    showAccountEditButton.value = false
    showEditIdentityDocumentButton.value = false
    isPointerBank.value = true
    isPointerKYC.value = false
  }

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
const handleeidtAcount = () => {
  //console.log('Now I am in Edit Account.')
  store.dispatch('stripeAccountUpdate')
  // isModalOpen03.value = true
  // gsap.to(
  //   modal03.value,
  //   { duration: 0.1, scale: 0.2, opacity: 1 },
  //   { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
  // )
}

const handleeidtIdentityDocument = () => {
  //console.log('Now I am in Edit Account.')
  store.dispatch('stripeIdentityDocument')
  // isModalOpen03.value = true
  // gsap.to(
  //   modal03.value,
  //   { duration: 0.1, scale: 0.2, opacity: 1 },
  //   { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
  // )
}
const closeModal01 = () => {
  isModalOpen01.value = false
}

const closeModal02 = async () => {
  isModalOpen02.value = false
  // router.go(0)
  // getUser()
  //  fetchUpdatedData();
  // const tkyc = computed(() => store.getters.getKycToken)
  // store.dispatch('resendAccountDetail', tkyc)
  await store.dispatch('verify')
}

// const fetchUpdatedData = async () => {
//   try {
//     const cUser = computed(() => store.getters.getUser)
//   const token_kyc = await cUser.value.resend_kyc_token
//  await store.dispatch('resendAccountDetail', token_kyc)
//   } catch (error) {
//     //console.error('Error fetching data:', error);
//   }
// };

const closeModal002 = () => {
  isModalOpen002.value = false
}

// const closeModal03 = () => {
//   isModalOpen03.value = false
// }

// const handleEditAcount = () => {
//   //console.log('I am here in edit mode')
//   // router.push({ name: 'accountUpdate' })
// }

// const getUpdatedUser = (newData) => {
//   userName.value = newData.name
//   userEmail.value = newData.email
//   userPhone.value = newData.phone
//   userImage.value =
//   import.meta.env.VITE_APP_IMAGE_URL + newData.profile_picture
// }

const handleLogout = () => {
  store.dispatch('Logout')
}

const handleaddAcount = async () => {
  //verify_Api()
  //const user = JSON.parse(localStorage.getItem('user'))
  const cUser = computed(() => store.getters.getUser)
  let onCompleteAccount = cUser.value.onboarding_completed
  let onBankAccount = cUser.value.bank_status
  let connectedId = cUser.value.connected_status
  const token_kyc = cUser.value.resend_kyc_token

  if (onBankAccount == 1 && connectedId == 0 && onCompleteAccount == 0) {
    router.push({ name: 'accountDetails' })
  } else if (onBankAccount == 1 && connectedId == 1 && onCompleteAccount == 0) {
    const kycToken = token_kyc
    // const respp = await store.dispatch('resendAccountDetail', kycToken)
    // //console.log(respp.status, 'Response Status')
    try {
      console.log('I am In')
      const respp = await store.dispatch('resendAccountDetail', kycToken)

      if (respp && respp.status === 200) {
        //console.log(respp.status, 'Response Status')
        // Handle success case
        isModalOpen02.value = true
        gsap.to(
          modal02.value,
          { duration: 0.1, scale: 0.2, opacity: 1 },
          { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
        )
      } else {
        // Handle case where response is empty or does not contain a status
        //console.log('No response from API. Please try again later.')
        // Display your message to the user
        isModalOpen002.value = true
        gsap.to(
          modal002.value,
          { duration: 0.1, scale: 0.2, opacity: 1 },
          { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
        )
      }
    } catch (error) {
      // Catch any network or other unexpected errors
      //console.error('An error occurred:', error.message)
      // Optionally display an error message to the user
    }
  } else if (connectedId == 1 && onCompleteAccount == 1) {
    onCompleteAccount = true
  }
  // else if (connectedId == 1 && onCompleteAccount == 0) {
  //  // store.dispatch('resendAccountDetail')
  //   //onCompleteAccount = true
  // }
  else if (onBankAccount == 0 && connectedId == 0 && onCompleteAccount == 0) {
    isModalOpen01.value = true
    gsap.to(
      modal01.value,
      { duration: 0.1, scale: 0.2, opacity: 1 },
      { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
    )
  }
}

// const closeModal = () => {
//   isModalOpen.value = false
// }

// const closeModal02 = () => {
//   isModalOpen02.value = false
// }

const handleChildClosed = () => {
  //console.log('Child component closed, performing actions in the parent component')
  nextTick(() => {
    getUser()
  })
}

// const handleScroll = () => {
//   const scrollPosition = window.scrollY
//   // Perform actions based on scroll position
//   console.log(`Scroll position: ${scrollPosition}`)
//   // Example: Perform some animation or trigger some effect based on scroll position
// }
// const verify_Api = async () => {
//   await store.dispatch('verify')
// }
// const tooltipPosition = ref('bottom')

// const updateTooltipPosition = () => {
//   tooltipPosition.value = window.innerWidth < 768 ? 'right' : 'bottom'
// }

onMounted(() => {
  getUser()
  //verify_Api()
  // window.addEventListener('scroll', handleScroll)
  // window.addEventListener('resize', updateTooltipPosition)
  // updateTooltipPosition() // Initial check
})

onUnmounted(() => {
  //window.removeEventListener('scroll', handleScroll)
  // fetchUpdatedData()
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

.well[data-v-2f3153fd] {
  min-height: 20px;
  padding: 25px;
  margin-bottom: 20px;
  /* background-color: #0a2c3f; */
  /* border: 1px solid #dadada; */
  border-radius: 10px;
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15); */
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  /* box-shadow: 2px 3px 20px 2px rgb(116 116 116 / 19%); */

  box-shadow: 10px 10px 50px 5px rgb(116 116 116 / 15%);
  border: solid 1px #49847c;
  display: table;
  margin: auto;
  /* border-radius: 10px; */
  color: #333;
  /* min-width: 750px; */
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
  font-size: 26px;
  color: #4a847c;
  font-weight: 600;
  margin-bottom: 20px;
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
  height: 265px;
  max-width: 100%;
}

.well .detailboxx {
  padding-left: 30px;
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
/* .fas {
  margin-right: 15px;
} */
button i.fa {
  margin-left: 12px;
}

.btn_block {
  margin-top: 15px;
}
hr {
  width: 94%;
}
.btnboxx {
  margin-top: 45px;
  width: 100%;
  display: block;
}

.btn_block a:hover {
  color: #000 !important;
}

.puprple_btnn {
  color: #000 !important;
  background-color: transparent !important;
  font-size: 16px !important;
  padding: 5px 24px !important;
  border-radius: 8px !important;
  margin-left: 20px;
  position: relative !important;
  transform: translate3d(-3px, -4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: 0.4s all !important;
  z-index: 2;
}

.fas {
  margin-right: 8px;
  color: #49847c;
}

.btn_block a:hover,
.btn_block:hover .fas {
  color: #e0a233 !important;
}

.btn_block .fas {
  margin-right: 0px !important;
  position: absolute;
  top: 14px;
  font-size: 13px;
}

/* .btn {

} */

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
    font-size: 0.7rem;
  }
  .navbar-expand-lg .navbar-nav .nav-link.dark_btn {
    padding: 9px 15px;
  }
  .well h4 {
    font-size: 26px;
  }
}

@media screen and (max-width: 625px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: column !important;
  }
}

.profile-card {
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  width: 320px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.profile-info h2 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.profile-info p {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.profile-stats div h3 {
  font-size: 1.2rem;
}

.profile-stats div p {
  font-size: 0.8rem;
  color: #888;
}

.profile-actions {
  display: flex;
  justify-content: space-between;
}

.btn {
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.9rem;
}

.follow-btn {
  background-color: #ff477e;
  color: #fff;
}

.message-btn {
  background-color: #e0e0e0;
  color: #333;
}

@media screen and (max-width: 480px) {
  .profile-card {
    width: 90%;
    padding: 15px;
  }

  .profile-info h2 {
    font-size: 1.3rem;
  }

  .profile-stats div h3 {
    font-size: 1rem;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #fff;
  color: #49847c;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu {
  position: relative;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-top: 10px;
  display: block;
  min-width: 17rem;
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

@media screen and (max-width: 1199px) {
  .dropdown-menu {
    min-width: auto;
  }
}

@media screen and (max-width: 991px) {
  .dropdown-menu {
    min-width: auto;
    float: none;
    display: table;
    margin: 30px auto;
  }
  .well {
    width: auto;
    max-width: auto;
    min-width: auto;
  }
  .detailboxx {
    width: auto;
    display: table;
    margin: 30px auto 0 auto;
    padding-left: 0;
  }
  .well .detailboxx {
    padding-left: 0;
  }
}
.profileArea {
  margin-top: 60px;
}
.userCard {
  border: solid 1px #dadada;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px 0px 10px 0;
  max-width: 480px;
  background: #fff;
}
.userCard img {
  display: table;
  margin: 0 auto 20px auto;
}
.userCard h4 {
  text-align: center;
  font-weight: bold;
  color: #49847c;
}

.userCard .img-responsive {
  display: block;
  height: 300px;
  max-width: 100%;
}

.userCardInfo {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  max-width: 390px;
  margin: 25px auto 15px auto;
}

.userCardInfo h5 {
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
}
.userCardInfo .infoRow {
  border-bottom: solid 1px #ddd;
  padding-bottom: 10px;
  margin: 25px 0;
}
.userCardInfo .btnboxx {
  margin-top: 0;
}
.userBankcard {
  border: solid 1px #dadada;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px 0px 20px 0px;
  /* max-width: 480px; */
  margin-bottom: 40px;
  background: #fff;
}

.userBankcard .userBankCardTop {
  border-bottom: solid 1px #dadada;
  margin-bottom: 20px;
}

.userBankcard .userBankCardTop h3 {
  font-weight: 500;
  padding-left: 20px;

  padding-bottom: 15px;
}

.userBankcard .userBankCardInfo {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.userBankcard .userBankCardInfo .userBankCardStatus {
  color: #49847c;
  font-weight: bold;
}
.userBankcard .userBankCardInfo .userBankCardStatusInfo a {
  /* background: #eee; */
  padding: 5px 10px;
}

.userBankcard .userBankCardInfo .userBankCardStatusInfo {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
}

.userKYCcard {
  border: solid 1px #dadada;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px 0px 20px 0px;
  /* max-width: 480px; */
  margin-top: 20px;
  background: #fff;
}

.userKYCcard .userKYCcardTop {
  border-bottom: solid 1px #dadada;
  margin-bottom: 20px;
}

.userKYCcard .userKYCcardTop h3 {
  font-weight: 500;
  padding-left: 20px;

  padding-bottom: 15px;
}
.userKYCcard .userKYCcardInfo {
  padding: 10px 20px;
}
.pointerr {
  pointer-events: none;
  color: #fff !important;
  background: #49847c !important;
}

.userKYCcard .userKYCcardInfo {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.userKYCcard .userKYCcardInfo .userKYCcardStatus {
  color: #49847c;
  font-weight: bold;
}
.userKYCcard .userKYCcardInfo .userKYCcardStatusInfo a {
  /* background: #eee; */
  padding: 5px 10px;
}
.statusDiv {
  padding: 5px 10px;
  border-radius: 5px;
  background: #49847c;
  font-size: 13px;
  color: #fff;
}

.hideArea {
  display: none;
}

.actionBtn {
  color: #fff !important;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 100px;
  background-color: #e0a233 !important;
  margin-bottom: 10px;
  font-size: 13px;
}
.bigbg {
  width: 100%;
  background: url(../images/userProfilecontentbg.png) no-repeat bottom left;
  background-size: cover;
}
.classOne {
  background-color: green;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
}
.classOne:before {
  content: '\f00c';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #fff;
}

.classTwo {
  background-color: #e9d502;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  color: #000;
}

.classTwo:before {
  content: '\21';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #000;
}

.classThree {
  background-color: red;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
}
.classThree:before {
  content: '\f057';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #fff;
}

.classOneAction {
  color: #fff !important;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 100px;
  background-color: #e0a233 !important;
  margin-bottom: 10px;
  font-size: 13px;
}
.classOneAction:before {
  content: '\f185';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #fff;
}

.classTwoAction {
  color: #fff !important;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 100px;
  background-color: #e0a233 !important;
  margin-bottom: 10px;
  font-size: 13px;
}
.classTwoAction:before {
  content: '\f185';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #fff;
}

.classThreeAction {
  color: #fff !important;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 100px;
  background-color: #e0a233 !important;
  margin-bottom: 10px;
  font-size: 13px;
}
.classThreeAction:before {
  content: '\f185';
  font-family: FontAwesome;
  margin-right: 6px;
  color: #fff;
}
@media screen and (max-width: 767px) {
  .userCard {
    max-width: 375px;
    margin: 30px auto;
    display: block;
  }
}

/* .userKYCcard h3 {
  font-weight: 500;
  border-bottom: solid 1px #dadada;
  padding-bottom: 6px;
  margin-bottom: 20px;
} */

/* Customizing tooltip background and text color */
</style>
