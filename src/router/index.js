import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeMain from '../views/HomeMain.vue'
import UserLogin from '../views/LoginNow.vue'
import TermsConditions from '../views/Terms-and-conditions.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import TermsAndConditions from '../views/Terms_and_conditions.vue'
import PrivacyPolicy from '../views/Privacy-Policy.vue'
import Privacy_Policy from '../views/Privacy_Policy.vue'
import DeletionPolicy from '../views/Deletion-Policy.vue'
import Deletion_Policy from '../views/Deletion_Policy.vue'
import UserProfile from '../views/UserProfile.vue'
import ContactUs from '../views/Contact_Us.vue'
import AboutUs from '../views/About-Us.vue'
import About from '../views/About_Us.vue'
import PageNotFound from '../views/PagenotFound.vue'
import StripeError from '../views/StripeError.vue'
import AccountDetails from '../views/AddAccountDetail.vue'
// import AccountUpdate from '../views/AccountUpdate.vue'
import ThankYou from '../views/ThankYou.vue'
import ResetPassword from '@/views/ResetPassword.vue'
//import store from '@/store'
import store from '@/store' // Import your Vuex store
// import { nextTick } from 'vue'
import $ from 'jquery'

// Navigation guard to fetch user data before each route
async function beforeEach(to, from, next) {
  if (!store.state.user) {
    try {
      await store.dispatch('fetchUser')
    } catch (error) {
      //console.error('Failed to fetch user:', error)
    }
  }
  next()
}

async function authGuard(to, from, next) {
  // Check if already verified or logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const token = localStorage.getItem('apiToken')
  if (isLoggedIn && token) {
    return next() // Skip verify call if already authenticated
  }
  let response = await store.dispatch('verify')
  //console.log(response, 'in router')
  if (response === 200) {
    next()
  } else {
    await store.dispatch('Logout')
    next({ name: 'UserLogin' })
  }
}

async function authGuard02(to, from, next) {
  // Check if already verified or logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const token = localStorage.getItem('apiToken')
  if (isLoggedIn && token) {
    return next() // Skip verify call if already authenticated
  }
  let response = await store.dispatch('verify')
  //console.log(response, 'in router')
  if (response === 200) {
    next()
  } else {
    //await store.dispatch('Logout')
    next({ name: 'base' })
  }
}

async function baseGuards(to, from, next) {
  const onBankAccount = JSON.parse(localStorage.getItem('isBankStatus'))
  const onBankStatus = JSON.parse(localStorage.getItem('isAccountStatus'))
  if (onBankAccount == null) {
    next({ name: 'UserLogin' })
  } else if (onBankStatus == 1) {
    next({ name: 'UserLogin' })
  } else {
    next()
  }
}

async function baseGuards02(to, from, next) {
  const onBankStatus = JSON.parse(localStorage.getItem('isAccountStatus'))
  if (onBankStatus == 0) {
    next({ name: 'UserLogin' })
  } else {
    next()
  }
}

function baseGuard(to, from, next) {
  next({ name: 'home' })
}

// const router = createRouter({
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHistory(),
//   routes: [

const router = createRouter({
  history: process.env.NODE_ENV === 'production' ? createWebHistory('/') : createWebHistory(),
  base: process.env.NODE_ENV == 'production' ? '/' : '/',
  routes: [
    // {
    //   path: '/',
    //   name: 'base'
    //   // component: Home,
    //   // beforeEnter: baseGuard
    // },
    {
      path: '/',
      name: 'home',
      component: HomeMain
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },

    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
      // meta: {
      //   requiresAuth: true
      // },
      // beforeEnter: isUserLoggedin
    },
    {
      path: '/about_us',
      name: 'About',
      component: About
      // meta: {
      //   requiresAuth: true
      // },
      // beforeEnter: isUserLoggedin
    },
    {
      path: '/user-login',
      name: 'UserLogin',
      component: UserLogin
      // meta: {
      //   requiresAuth: true
      // },
      // beforeEnter: isUserLoggedin
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },

    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },

    {
      path: '/privacy_policy',
      name: 'Privacy_Policy',
      component: Privacy_Policy
    },

    {
      path: '/deletion_policy',
      name: 'Deletion_Policy',
      component: Deletion_Policy
    },

    {
      path: '/deletion-policy',
      name: 'DeletionPolicy',
      component: DeletionPolicy
    },

    {
      path: '/terms-and-conditions',
      name: 'TermsConditions',
      component: TermsConditions
    },

    {
      path: '/terms-of-use',
      name: 'TermsOfUse',
      component: TermsOfUse
    },

    {
      path: '/terms_and_conditions',
      name: 'TermsAndConditions',
      component: TermsAndConditions
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    },

    {
      path: '/account-details',
      name: 'accountDetails',
      component: AccountDetails,
      beforeEnter: baseGuards
    },
    // {
    //   path: '/account-update',
    //   name: 'accountUpdate',
    //   component: AccountUpdate,
    //   beforeEnter: baseGuards02
    // }
    {
      path: '/forget-password',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/success-page',
      name: 'thankYou',
      component: ThankYou

      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/stripe-error',
      name: 'striptError',
      component: StripeError

      // meta: {
      //   requiresAuth: true
      // }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  // Check if the navigation is going to the Home page
  if (to.name === 'home') {
    // nextTick(() => {
    // Initialize first carousel
    const frameSlider = document.querySelector('#frmae_slider')
    if (frameSlider) {
      $(frameSlider).owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1500,
        nav: false,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })
    }

    // Initialize second carousel
    const screenSlider = document.querySelector('#screen_slider')
    if (screenSlider) {
      $(screenSlider).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 2500,
        center: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })
    }
    const textListFlow = document.querySelector('#text_list_flow')
    if (textListFlow) {
      jQuery('#text_list_flow').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        center: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        autoWidth: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })
    }
    // });
    const textListFlowDownLoad = document.querySelector('#text_list_flow_download')
    if (textListFlowDownLoad) {
      jQuery('#text_list_flow_download').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        center: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        autoWidth: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })
    }
  }
})

export default router
