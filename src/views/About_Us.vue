<template>
  <div>
    <!-- <HeaderMain/> -->
    <AboutUsComp />
    <myFooter />
  </div>
</template>

<script>
import AboutUsComp from '@/components/AboutUsComp.vue'
import myFooter from '@/components/FooterMainMob.vue'
export default {
  name: 'About_us',
  components: {
    AboutUsComp,

    myFooter
  }
}
</script>

<style scoped>
.textStyle {
  text-align: left;
}
.aboutus img {
  max-width: 100%;
}
.aboutus h2 {
  font-size: 55px;
  max-width: 100%;
  margin-bottom: 20px;
}
.aboutus {
  margin-bottom: 50px;
}
</style>
