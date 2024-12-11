<template>
  <Header />
  <BannerSection />
  <AboutUs />
  <OurServices />
  <HowItWorks />
  <Testimonials />
  <ScreenShotsSlider />
  <FAQs />
  <DownloadApp />
  <Footer />
</template>

<script setup>
import { ref, onMounted, nextTick, computed, onBeforeUnmount } from 'vue'
import Header from '../components/headerMain.vue'
import BannerSection from '../components/BannerSection.vue'
import AboutUs from '../components/AboutSection.vue'
import OurServices from '../components/ServicesSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import Testimonials from '../components/TestimonialsSection.vue'
import ScreenShotsSlider from '../components/ScreenShots.vue'
import FAQs from '../components/FAQs.vue'
import DownloadApp from '../components/DownLoadApp.vue'
import Footer from '../components/FooterMain.vue'


function destroyOwlCarousel() {
  // Destroy Owl Carousel instance
  const owlInstance = jQuery('#frmae_slider').data('owl.carousel')
  if (owlInstance) {
    owlInstance.destroy()
  }
}

function destroyOwlCarousel02() {
  // Destroy Owl Carousel instance
  const owlInstance = jQuery('#screen_slider').data('owl.carousel')
  if (owlInstance) {
    owlInstance.destroy()
  }
}

function destroyOwlCarousel03() {
  // Destroy Owl Carousel instance
  const owlInstance = jQuery('#text_list_flow').data('owl.carousel')
  if (owlInstance) {
    owlInstance.destroy()
  }
}

// Lifecycle hook equivalent to beforeDestroy and beforeUnmount in Options API
onBeforeUnmount(() => {
  destroyOwlCarousel()
  destroyOwlCarousel02()
  destroyOwlCarousel03()
})



</script>

<style scoped>
/* Your styles here */
</style>