import API from '../config/api'
import { ENDPOINTS } from '../config/variables.js'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { sendPasswordResetEmail } from '@firebase/auth'
import { signOut } from '@firebase/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { GoogleAuthProvider, signInWithPopup } from '../firebase/index.js'
//import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

import { toast } from 'vue3-toastify'
import router from '../router'

export default {
  async userLogin({ commit }, details) {
    try {
      let resp = await signInWithEmailAndPassword(auth, details.email, details.password)
      let respToken = await resp.user.accessToken
      //console.log(resp.user, 'New Status')

      let respp = await API.post(ENDPOINTS.USER_LOGIN, { token: respToken })
      // localStorage.setItem('token', respp.data.user.api_token)
      // localStorage.setItem('isLoggedIn', 'true')
      commit('SET_USER', respp.data.user)
      //console.log(respp.data.user, 'Recheck')
      toast.success('User Successfully Logedin', {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })

      window.scroll(0, 0)
      router.push({ name: 'UserProfile' })
    } catch (error) {
      let resperror
      let error_message = error?.message ?? error
      let error_message02 = error.code ?? error

      //console.log(error_message02, 'mmddd')

      //console.log(error_message, 'Khan Imran')
      if (error_message === 'Firebase: Error (auth/user-not-found).') {
        resperror = 'User Not Found'
        //console.log('User Not Found')
      } else if (error_message === 'Firebase: Error (auth/network-request-failed).') {
        resperror = 'Network Request Failed'
        //console.log('Network Request Failed')
      } else if (error_message === 'Firebase: Error (auth/wrong-password).') {
        resperror = 'Wrong Password'
        //console.log('Wrong Password')
      } else if (error_message === 'Firebase: Error (auth/invalid-credential).') {
        resperror = 'Invalid Credential'
        ////console.log("Wrong Password")
      }
      if (resperror) {
        toast.error(resperror, {
          position: toast.POSITION.TOP_RIGHT,
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          className: 'Toastify__toast-theme--colored.Toastify__toast--error',
          closeButton: true,
          icon: true,
          rtl: false,
          autoClose: true
        })
      }
    }
  },

  async googleLogin({ commit }) {
    try {
      const provider = new GoogleAuthProvider()

      let respp01 = await signInWithPopup(auth, provider)
      // let respp01 = await signInWithRedirect(auth, provider);

      //console.log(respp01, 'uuu')

      //let respp = await API.post(ENDPOINTS.USER_LOGIN, { token: respToken })
      // const user = respp.user
      let respToken = respp01.user?.accessToken
      // console.log(respToken, 'Token')

      let respp = await API.post(ENDPOINTS.USER_LOGIN, { token: respToken })
      localStorage.setItem('token', respp.data.user.api_token)
      localStorage.setItem('isLoggedIn', 'true')
      //console.log('Logged in user:', respp?.data.user)
      commit('SET_USER', respp.data.user)
      toast.success('User Successfully Logedin', {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
      window.scroll(0, 0)
      router.push({ name: 'UserProfile' })
    } catch (error) {
      //console.error('Error logging in:', error)
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        className: 'Toastify__toast-theme--colored.Toastify__toast--error',
        closeButton: true,
        icon: true,
        rtl: false,
        autoClose: true
      })
    }
  },

  // async appleLogin({ commit }) {
  //   try {
  //     const provider = new OAuthProvider('apple.com')

  //     let respp01 = await signInWithPopup(auth, provider)

  //     //console.log(respp01, 'uuu')

  //     //let respp = await API.post(ENDPOINTS.USER_LOGIN, { token: respToken })
  //     // const user = respp.user
  //     let respToken = respp01.user?.accessToken
  //     //console.log(respToken, 'Token')

  //     let respp = await API.post(ENDPOINTS.USER_LOGIN, { token: respToken })
  //     //console.log('Logged in user:', respp?.data)
  //     commit('SET_USERS', respp.data.user)
  //   } catch (error) {
  //     //console.error('Error logging in:', error)
  //   }
  // },

  // User Update Section
  //   updateUserProfileAction: async ({ commit, dispatch }, data) => {
  async updateUserProfileAction({ commit }, formData01) {
    try {
      //console.log('i am in action store', [...formData01])
      let response = await API.post(ENDPOINTS.UPDATE_USER_PROFILE, formData01)

      //console.log(response.data.user, 'Updated User Detail')
      //dispatch('verify')

      return response
    } catch (error) {
      return error.error
    }
  },
  // User Logout Section
  async Logout({ commit }) {
    await signOut(auth)
    toast.success('Successuffly Logout !', {
      position: toast.POSITION.TOP_RIGHT,
      timeout: 5000,
      duration: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: true,
      icon: true,
      rtl: false
    })
    router.push('/user-login')
    commit('CLEAR_USER')
  },
  // User Delete Section
  deleteUser: async ({ commit }) => {
    try {
      //console.log('Account Delete Function')
      let delresponse = await API.delete(ENDPOINTS.USER_DELETE)
      //console.log(delresponse, 'account delete')
      commit('CLEAR_USER')
      return delresponse
    } catch (error) {
      //console.log(error.delresponse)
    }
  },

  verify: async ({ commit }) => {
    //console.log('Hello I am Hitted')
    // Skip API call if already verified
    // if (state.isLoggedIn && state.apiToken) {
    //   //console.log('Skipping verify API call')
    //   return 200 // or any status you want to return
    // }

    try {
      let response = await API.get(ENDPOINTS.VERIFY)

      //console.log('Before Wali', response.status)

      // if (response.status === 200) {
      //console.log(response.status, 'wali')
      commit('verifyUserMutate', response.data.user) // Assuming you are storing user data

      return response.status // Explicitly return the status code
      // } else {
      // return response.status // Return other status codes if needed
      //}
    } catch (error) {
      return error.response
    }
  },

  //   updateUserProfileAction: async ({ commit, dispatch }, data) => {
  async AccountDetail({ commit }, formData02) {
    try {
      //console.log('i am in action store', [...formData02])
      let response = await API.post(ENDPOINTS.USER_ACCOUNT, formData02)

      //console.log(response, 'Create User Account')

      return response
    } catch (error) {
      if (error.response) {
        // let errorResponse = await API.

        // Server responded with a status other than 200 range
        // toast.error(
        //   `Error: You have already submited the detail , please check your email for completing the KYC verification`,
        //   { autoClose: false }
        // )

        toast.error(`Error: ${error.response.message}`)
        //   `Error: You have already submited the detail , please check your email for completing the KYC verification`,
        //   { autoClose: false }
        // )
      } else if (error.request) {
        // Request was made but no response was received
        toast.error('No response from server. Please try again later.')
      } else {
        // Something else caused an error
        toast.error(`Error: ${error.message}`)
      }
      return null // You can return null or handle the error as needed
      // return error.error
    }
  },
  async AccountUpdate({ commit }) {
    let response = await API.get(ENDPOINTS.USER_ACCOUNT_UPDATE)
    return response
  },

  async resendAccountDetail({ commit }, tokenkey) {
    //console.log(tokenkey, 'Token From Stripe Error Page')
    try {
      let resendResponse = await API.post(ENDPOINTS.USER_ACCOUNT_RESEND_LINK, {
        token: tokenkey
      })
      //console.log(resendResponse, 'Resend Account Detail')
      commit('ZAFAR', resendResponse)

      toast.success(resendResponse.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
      return resendResponse
    } catch (error) {
      console.log(error)
      if (
        error.resendResponse &&
        error.resendResponse.data.message === 'Invalid or expired token'
      ) {
        toast.error('Invalid or expired token. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
          timeout: 5000,
          duration: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: true,
          icon: true,
          rtl: false
        })
      } else {
        // Show a general error message for other errors
        toast.error('An error occurred. Please try again.')
      }

      return
    }
  },

  async stripeAccountUpdate({ commit }) {
    try {
      let responseBankUpdate = await API.post(ENDPOINTS.USER_BANK_ACCOUNT_UPDATE)
      //console.log(responseBankUpdate.data, 'Update for Account Detail')
      toast.success(responseBankUpdate.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
    } catch (error) {
      //console.log(error)
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
    }
  },

  async stripeIdentityDocument({ commit }) {
    try {
      let responseKYCUpdate = await API.post(ENDPOINTS.USER_KYC_ACCOUNT_UPDATE)
      //console.log(responseKYCUpdate.data, 'Update for Account Detail')
      toast.success(responseKYCUpdate.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
    } catch (error) {
      console.log(error)
      const errorMessage = error.response?.data?.message
      toast.success(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: true,
        icon: true,
        rtl: false
      })
    }
  },

  async resetCredential({ commit }, newEmail) {
    try {
      await sendPasswordResetEmail(auth, newEmail)
      //console.log('Password reset email sent successfully')
      setTimeout(() => {
        toast.success('Password reset email sent successfully !', {
          position: toast.POSITION.TOP_RIGHT,
          timeout: 5000,
          duration: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          toastClassName: 'toastSuccess',
          closeButton: true,
          icon: true,
          rtl: false
        })
      }, 300)
    } catch (error) {
      //console.error('Error sending password reset email', error.message)
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        duration: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        toastClassName: 'toastSuccess',
        closeButton: true,
        icon: true,
        rtl: false
      })
    }

    router.push({ name: 'UserLogin' })
  },
  async fetchUser({ commit }) {
    try {
      const response = await API.get(ENDPOINTS.VERIFY) // Replace with your API endpoint
      //console.log(response.data.user, 'Veryfiy user')
      commit('verifyUserMutate', response.data.user)
    } catch (error) {
      //console.error('Failed to fetch user data:', error)
    }
  }
}
