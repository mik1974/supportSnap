<template>
  <Header />
  <TermsConditions />
  <myFooter />
</template>


 <script setup>
import Header from '@/components/headerMain.vue'
import TermsConditions from '@/components/TermsAndConditions.vue'
import myFooter from '@/components/FooterMain.vue'
</script>

  <style scoped>
.textStyle {
  text-align: left;
}
.terms img {
  max-width: 100%;
}
.terms h2 {
  font-size: 55px;
  max-width: 100%;
  margin-bottom: 20px;
}
</style>