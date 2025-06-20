<template>
  <section></section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import jQuery from 'jquery';
const router = useRouter()
const cuYear = ref('')

// const scriptUrls = [
//   '/supportSnap-web/js/jquery.js',
//   '/supportSnap-web/vendor/jquery/jquery.min.js',
//   '/supportSnap-web/vendor/select2/select2.min.js',
//   '/supportSnap-web/vendor/datepicker/moment.min.js',
//   '/supportSnap-web/vendor/datepicker/daterangepicker.js',
//   // "/js/global.js",
//   // "/js/jquery.js",
//   '/supportSnap-web/js/bootstrap.min.js',
//   '/supportSnap-web/js/aos.js',
//   '/supportSnap-web/js/typed.min.js',
//   '/supportSnap-web/js/owl.carousel.min.js',
//   '/supportSnap-web/js/mainn.js'

//   // Add more script URLs as needed
// ]

const scriptUrls = [
  '/js/jquery.js',
  '/vendor/jquery/jquery.min.js',
  '/vendor/select2/select2.min.js',
  '/vendor/datepicker/moment.min.js',
  '/vendor/datepicker/daterangepicker.js',
  // "/js/global.js",
  // "/js/jquery.js",
  '/js/bootstrap.min.js',
  '/js/aos.js',
  '/js/typed.min.js',
  '/js/owl.carousel.min.js',
  '/js/mainn.js'

  // Add more script URLs as needed
]

const scriptsLoaded = ref(false)

onMounted(() => {
  loadScripts(scriptUrls)
    .then(() => {
      scriptsLoaded.value = true
      initializeOwlCarousel()
      initializeOwlCarousel02()
      initializeOwlCarousel03()
      initializeOwlCarousel04()
    })
    .catch((error) => {
      console.error('Error loading scripts:', error)
    })
})

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

async function loadScripts(urls) {
  for (const url of urls) {
    await loadScript(url)
  }
}
const initializeOwlCarousel = () => {
  // this.$nextTick(() => {
  if ($('#frmae_slider').data('owl.carousel')) {
    this.destroyOwlCarousel()
  }
  $('#frmae_slider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 1500,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  })
  // });
}

const initializeOwlCarousel02 = () => {
  // this.$nextTick(() => {
  if ($('#screen_slider').data('owl.carousel')) {
    this.destroyOwlCarousel02()
  }
  $('#screen_slider').owlCarousel({
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
  // });
}

const initializeOwlCarousel03 = () => {
  // this.$nextTick(() => {
  if ($('#text_list_flow').data('owl.carousel')) {
    this.destroyOwlCarousel03()
  }
  $('#text_list_flow').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    // smartSpeed: 2500,
    center: true,
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
  // });
}

const initializeOwlCarousel04 = () => {
  // this.$nextTick(() => {
  if ($('#text_list_flow_download').data('owl.carousel')) {
    this.destroyOwlCarousel04()
  }
  $('#text_list_flow_download').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    // smartSpeed: 2500,
    center: true,
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
  // });
}

onMounted(() => {
  cuYear.value = new Date().getFullYear()
})

function callHome() {
  //window.scroll(0, 0);
  this.$router.push('/')
}
function callContact() {
  window.scroll(0, 0)
  router.push('/contact-us')
}
function callPpolicy() {
  window.scroll(0, 0)
  router.push('/privacy-policy')
}
function callTerms() {
  window.scroll(0, 0)
  router.push('/terms-and-conditions')
}
function callAboutUs() {
  window.scroll(0, 0)
  router.push('/about-us')
  //router.push('/')
}
function callDeletion() {
  window.scroll(0, 0)
  router.push('/deletion-policy')
}
</script>

<style scoped>
/* Your styles here */
i.icofont-paper-plane {
  position: absolute;
  left: 0;
  top: 12px;
  right: 0;
}
.mainLinks ul {
  margin: 12px 0 0 0;
  padding: 0;
  display: block;
}
.mainLinks ul li {
  display: block;
  line-height: 24px;
  margin-bottom: 8px;
}
.mainLinks ul li a {
  color: #fff !important;
}
.mainLinks ul li a:hover {
  color: #e09e1f !important;
}
#footerr {
  margin-top: 0 !important;
}
@media only screen and (max-width: 991px) and (min-width: 768px) {
  #footerr .download_side .app_btn {
    flex-wrap: wrap;
    row-gap: 20px;
  }
}

@media only screen and (max-width: 767px) {
  #footerr .download_side .app_btn {
    flex-wrap: wrap;
    row-gap: 20px;
    justify-content: start;
    column-gap: 15px;
  }
  #footerr .download_side {
    text-align: left;
  }
  #footerr .download_side .app_btn li:last-child {
    margin-left: 0px;
  }
}

@media only screen and (max-width: 460px) {
  #footerr .contact_info {
    display: block;
  }
}
</style>
