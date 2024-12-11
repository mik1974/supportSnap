<template>
  <section>
    <div class="page_wrapper">
      <!-- main-footer -->
      <div id="footerr" class="main-footer">
        <!-- Footer-Section start -->
        <div id="footerr" class="white_text" data-aos="fade-in" data-aos-duration="1500">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="logo_side">
                  <div class="logo">
                    <!-- <router-link class="navbar-brand" :to="{ name: 'home' }"
                      ><img src="/images/logo-d01.png" alt="Logo"
                    /></router-link> -->
                    <a href="/">
                      <img src="/images/logo-d01.png" alt="Logo" />
                    </a>
                  </div>
                  <!-- <div class="news_letter">
                    <h3>Subscribe newsletter</h3>
                    <p>Be the first to recieve all latest post in your inbox</p>
                    <form>
                      <div class="form-group">
                        <input type="email" class="form-control" placeholder="Enter your email" />
                        <button class="btn">
                          <i class="icofont-paper-plane"></i>
                        </button>
                      </div>
                      <p class="note">By clicking send link you agree to receive message.</p>
                    </form>
                  </div>-->
                  <ul class="contact_info">
                    <li><a href="mailto:">support@example.com</a></li>
                    <li><a href="tel: ">+1-900-123 4567</a></li>
                  </ul>
                  <ul class="social_media">
                    <li>
                      <a href="#"><i class="icofont-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h3>Main Links</h3>
                <div class="mainLinks">
                  <ul>
                    <li><a href="#" @click="callAboutUs">About us</a></li>
                    <li><a href="#" @click="callContact">Contact Us</a></li>
                    <li><a href="#" @click="callTerms">Terms & Conditions</a></li>
                    <li><a href="#" @click="callPpolicy">Privacy Policy</a></li>
                    <li><a href="#" @click="callDeletion">Deletion Policy</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5">
                <div class="download_side">
                  <h3>Download app</h3>
                  <ul class="app_btn">
                    <li>
                      <a href="#">
                        <img class="blue_img" src="/images/googleplay.png" alt="image" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="blue_img" src="/images/appstorebtn.png" alt="image" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bottom">
            <div class="container">
              <div class="ft_inner">
                <div class="copy_text">
                  <p>© Copyrights {{ cuYear }}. All rights reserved.</p>
                </div>
                <ul class="links">
                  <!-- <li><a href="#" @click="callAboutUs">About us</a></li>
                  <li><a href="#" @click="callContact">Contact Us</a></li>
                  <li><a href="#" @click="callTerms">Terms & Conditions</a></li>
                  <li><a href="#" @click="callPpolicy">Privacy Policy</a></li>
                  <li><a href="#" @click="callDeletion">Deletion Policy</a></li> -->
                </ul>
                <div class="design_by">
                  <!-- <p>
                    Crafted by
                    <a
                      href="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                      >Kalanidhi Themes</a
                    >
                  </p> -->
                  <div>
                    Made with ❤️ by
                    <a href="https://codment.com/" target="_blank" rel="noopener">Codment</a>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer-Section end -->

        <!-- go top button -->
        <div class="go_top" id="Gotop">
          <span><i class="icofont-arrow-up"></i></span>
        </div>

        <!-- Video Model Start -->
        <div class="modal fade youtube-video" id="myModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <button
                id="close-video"
                type="button"
                class="button btn btn-default text-right"
                data-dismiss="modal"
              >
                <i class="icofont-close-line-circled"></i>
              </button>
              <div class="modal-body">
                <div id="video-container" class="video-container">
                  <iframe id="youtubevideo" width="640" height="360" allowfullscreen></iframe>
                </div>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
        <!-- Video Model End -->

        <!-- Page-wrapper-End -->
      </div>
      <!-- main-footer end -->
    </div>
  </section>
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
//]

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
    utoplayTimeout: 4000,
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
    utoplayTimeout: 4000,
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
