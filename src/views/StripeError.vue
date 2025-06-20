<template>
  <section>
    <div class="page_wrapper">
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>KYC Verification Link Expired</h2>
          <p>
            Please click the below button to resend KYC Verification Link and check your inbox to
            complete the KYC Process.
          </p>
          <a href="#?" @click="getUser()">Resend Email</a>
          <!-- <router-link to="/" @click="getUser()">Resend Email</router-link> -->
        </div>
      </div>
    </div>
  </section>
  <AccountPopup02
    :propValue="isModalOpen02"
    @pparentCloseModal="closeModal02"
    :propUser="userName"
  />
</template>

<script setup>
import AccountPopup02 from '../components/AccountDetailModal03.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import gsap from 'gsap'
const isModalOpen02 = ref(false)
const modal02 = ref(null)
const store = useStore()
const token = ref(null)
const router = useRouter()
// const getverify = () => {
//   store.dispatch('verify')
// }

const getUser = async () => {
  token.value = getTokenFromURL()
  // const user = JSON.parse(localStorage.getItem('user'))
  //
  // let onCompleteAccount = user.onboarding_completed
  // let onBankAccount = user.bank_status
  // let connectedId = user.connected_status

  // if (onBankAccount == 1 && connectedId == 1 && onCompleteAccount == 0) {
  //   isModalOpen02.value = true
  //   gsap.to(
  //     modal02.value,
  //     { duration: 0.1, scale: 0.2, opacity: 1 },
  //     { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
  //   )
  const tokenkey = token.value
  const respp = await store.dispatch('resendAccountDetail', tokenkey)
  //console.log(respp, 'bilal')
  if (respp.status == 200) {
    isModalOpen02.value = true
    gsap.to(
      modal02.value,
      { duration: 0.1, scale: 0.2, opacity: 1 },
      { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
    )
  }
}
//}

const closeModal02 = () => {
  isModalOpen02.value = false
  router.push({ path: '/user-profile' })
}

const getTokenFromURL = () => {
  const url = new URL(window.location.href)
  return url.searchParams.get('token') // This will give you the token value
}

onMounted(() => {
  //getverify()
})
</script>

<style scoped>
#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 410px;
  width: 100%;
  text-align: center;
}

.notfound .notfound-404 {
  height: 280px;
  position: relative;
  z-index: -1;
}

.notfound .notfound-404 h1 {
  font-family: montserrat, sans-serif;
  font-size: 230px;
  margin: 0;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url('../images/bg.jpg') no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}

.notfound h2 {
  font-family: montserrat, sans-serif;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-top: 25px !important;
  margin-bottom: 8px;
}

.notfound p {
  font-family: montserrat, sans-serif;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 0;
}

.notfound a {
  font-family: montserrat, sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #133746;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff !important;
  font-weight: 700;
  -webkit-box-shadow: 0 4px 15px -5px #133746;
  box-shadow: 0 4px 15px -5px #133746;
}
.notfound a:hover {
  background: #e0a233 !important;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 142px;
  }

  .notfound .notfound-404 h1 {
    font-size: 112px;
  }
}
</style>

