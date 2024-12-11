<template>
  <section class="banner-section">
    <!-- Banner-Section-Start -->
    <section class="banner_section">
      <!-- container start -->
      <div class="container">
        <!-- row start -->
        <div class="row">
          <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
            <!-- banner text -->
            <div class="banner_text">
              <!-- typed text -->
              <div class="type-wrap">
                <!-- add static words/sentences here (i.e. text that you don't want to be removed)-->
                <span id="typed" style="white-space: pre" class="typed"> </span>
              </div>
              <!-- h1 -->
              <h1>Snap, Connect, Excel – Transforming<span> Work with Ease!</span></h1>
              <!-- p -->
              <p>
                Your path to new opportunities begins here. Search, apply, and land jobs with ease!
              </p>
            </div>

            <!-- users -->
            <div class="used_app">
              <ul>
                <li><img src="/images/banavt1.png" alt="image" /></li>
                <li><img src="/images/banavt2.png" alt="image" /></li>
                <li><img src="/images/banavt3.png" alt="image" /></li>
                <li>
                  <a
                    href="#"
                    class="popup-youtube play-button"
                    data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                    data-toggle="modal"
                    data-target="#myModal"
                    title="XJj2PbenIsU"
                    ><img src="/images/play.svg" alt="img"
                  /></a>
                </li>
              </ul>
              <h3>12M + Active users</h3>
              <p>The best application to find and manage your career opportunities worldwide</p>
            </div>

            <!-- app buttons -->
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

          <!-- banner slides start -->
          <div class="col-lg-6 col-md-12">
            <div class="banner_slider">
              <div class="left_icon">
                <!-- <img src="../../public/images/smallStar.png" alt="image" /> -->
                <img src="/images/smallStar.png" alt="image" />
              </div>
              <div class="right_icon">
                <!-- <img src="../../public/images/bigstar.png" alt="image" /> -->
                <img src="/images/bigstar.png" alt="image" />
              </div>
              <div id="frmae_slider" class="owl-carousel owl-theme">
                <!-- <carousel>
                  <div class="item">
                    <div class="slider_img">
                      <img src="/images/bannerScreen01.png" alt="image" />
                      <img src="/images/bannerScreen02.png" alt="image" />
                      <img src="/images/bannerScreen03.png" alt="image" />
                    </div>
                  </div>
                </carousel> -->
                <div class="item">
                  <div class="slider_img">
                    <!-- <img
                      src="../../public/images/bannerScreen01.png"
                      alt="image"
                    /> -->
                    <img src="/images/bannerScreen01.png" alt="image" />
                  </div>
                </div>
                <div class="item">
                  <div class="slider_img">
                    <!-- <img
                      src="../../public/images/bannerScreen02.png"
                      alt="image"
                    /> -->
                    <img src="/images/bannerScreen02.png" alt="image" />
                  </div>
                </div>
                <div class="item">
                  <div class="slider_img">
                    <!-- <img
                      src="../../public/images/bannerScreen03.png"
                      alt="image"
                    /> -->
                    <img src="/images/bannerScreen03.png" alt="image" />
                  </div>
                </div>
              </div>
              <div class="slider_frame">
                <!-- <img src="../../public/images/iphonescren.png" alt="image" /> -->
                <img src="/images/iphonescren.png" alt="image" />
              </div>
            </div>
          </div>
          <!-- banner slides end -->
        </div>
        <!-- row end -->
        <!-- Spin Diveder Start -->
        <div class="spinBlock" data-aos="fade-up" data-aos-duration="1500">
          <span class="star"><img src="/images/smallStar.png" alt="image" /></span>
          <div class="spin_box" id="scrollButton">
            <span class="downsign">
              <i class="icofont-long-arrow-down"></i>
            </span>
            <div class="spin-text">
              <img src="/images/12mtext.png" alt="image" />
            </div>
          </div>
          <span class="star"><img src="/images/smallStar.png" alt="image" /></span>
        </div>
        <!-- Spin Diveder End -->
      </div>
      <!-- container end -->
    </section>
    <!-- Banner-Section-end -->
  </section>
</template>

<script setup>
import carousel from 'v-owl-carousel'
</script>

<style scoped>
/* Your styles here */
</style>
