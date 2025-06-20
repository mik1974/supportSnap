<template>
  <section @before-enter="beforeEnter02" @enter="enter02">
    <div class="page_wrapper download-section">
      <!-- Text List flow Section Start -->
      <div
        class="text_list_section row_am downaload_section"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div class="container">
          <div class="yellow_dotes">
            <img src="/images/yellow_dotes.png" alt="image" />
          </div>
          <div class="center_screen">
            <div class="img">
              <img src="/images/downloadScreen02.png" alt="image" />
            </div>
            <!-- app buttons -->
            <ul class="app_btn">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anideos.supportsnap"
                  target="_blank"
                >
                  <img class="blue_img" src="/images/googleplay.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/support-snap/id6477719410" target="_blank">
                  <img class="blue_img" src="/images/appstorebtn.png" alt="image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="background_slider">
          <div class="dowanload_slider">
            <div class="downlist">
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
            </div>
          </div>
          <div class="slider_block">
            <div class="owl-carousel owl-theme" id="text_list_flow_download">
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
              <div class="item">
                <div class="text_block">
                  <span>Download </span>
                  <span class="mark_star">•</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dowanload_slider">
            <div class="downlist">
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
              <div class="text_block">
                <span>Download </span>
                <span class="mark_star">•</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Text List flow Section End -->
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Function to handle the beforeEnter transition
function beforeEnter02(el) {
  el.style.opacity = 0
  el.style.transform = 'translateY(-90px)'
}

// Function to handle the enter transition
function enter02(el, done) {
  gsap.to(el, {
    opacity: 1,
    scrollTrigger: {
      trigger: el, // Define the element as the trigger
      toggleActions: 'restart pause reverse play'
    },
    y: 0,
    // opacity: 1,
    duration: 3,
    onComplete: done,
    ease: 'bounce.out',
    stagger: 1
  })
}
</script>

<style scoped>
/* Your styles here */
.download-section {
  padding: 100px 0;
}
</style>
