<template>
  <Header />
  <section class="aboutus">
    <!-- Page-wrapper-Start -->
    <div class="page_wrapper">
      <!-- About Us Section Start -->
      <section class="about_us_section">
        <!-- <div class="container">
          <div
            class="section_title textStyle"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span class="title_badge">About us</span>
            <h2>
              We are app agency <br />
              <span>building high level of smart app</span>
            </h2>
          </div>
        </div> -->
        <div class="container">
          <div class="row abt_text" data-aos="fade-up" data-aos-duration="1500">
            <div class="col-md-8">
              <div class="section_title textStyle" data-aos="fade-up" data-aos-duration="1500">
                <span class="title_badge">About us</span>
                <h2>
                  We are app agency <br />
                  <span>building high level of smart app</span>
                </h2>
              </div>
              <p>
                SupportSnap is more than a travel app; it’s your ultimate travel companion. We pride
                ourselves on being a ground-breaking tracking app that redefines connections during
                journeys. SupportSnap is designed with precision, offering real-time updates and
                accurate location tracking for seamless connections with your family and friends.
              </p>
              <p>
                Our mission is to elevate travel experiences by providing unparalleled peace of mind
                and strengthening the bonds created through shared adventures. We’re passionate
                about intertwining technology with human connections, ensuring hassle-free
                coordination and an added layer of security during your journey. With innovation at
                our core, SupportSnap is committed to shaping a world where every travel story is
                memorable and reassuringly interconnected.
              </p>
            </div>
            <div class="col-md-4">
              <img src="/images/appscreen01.png" alt="about" />
            </div>
          </div>
        </div>
      </section>
      <!-- About Us Section End -->
      <!-- Why Choose Us Section Start -->
      <section class="why_choose row_am white_text" data-aos="fade-in" data-aos-duration="1500">
        <div class="why_choose_inner">
          <div class="dotes_blue">
            <img src="/images/blue_dotes.png" alt="image" />
          </div>
          <div class="container">
            <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
              <span class="title_badge">Why choos us</span>
              <h2>Company statistics</h2>
            </div>
            <div class="company_statistics">
              <ul class="app_statstic" id="counter" data-aos="fade-in" data-aos-duration="1500">
                <li data-aos="fade-up" data-aos-duration="1500">
                  <div class="text">
                    <p><span class="counter-value" data-count="150">0</span><span>+</span></p>
                    <p>Countries</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <div class="text">
                    <p><span class="counter-value" data-count="2300">1500</span><span>+</span></p>
                    <p>Reviews</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <div class="text">
                    <p><span class="counter-value" data-count="08">0 </span><span>M+</span></p>
                    <p>Followers</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1500">
                  <div class="text">
                    <p><span class="counter-value" data-count="17">0</span><span>M+</span></p>
                    <p>Download</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- Why Choose Us Section End -->

      <!-- About Us Section Start -->
      <section class="about_us_section">
        <!-- <div class="container">
          <div
            class="section_title textStyle"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span class="title_badge">About us</span>
            <h2>
              We are app agency <br />
              <span>building high level of smart app</span>
            </h2>
          </div>
        </div> -->
        <div class="container">
          <div class="row abt_text" data-aos="fade-up" data-aos-duration="1500">
            <div class="col-md-12">
              <div class="section_title textStyle" data-aos="fade-up" data-aos-duration="1500">
                <span class="title_badge">What We Offer</span>
                <h2>
                  Our Service driven by Offers <br />
                  <span>building high level of smart app</span>
                </h2>
              </div>
              <p>
                SupportSnap is your all-in-one solution for seamless travel experiences. With a
                primary focus on keeping you connected and secure throughout your journeys,
                SupportSnap offers a number of features that redefine the way you travel, including:
              </p>
              <ul>
                <li>
                  Keep a Track: Experience real-time location tracking, enabling instant updates on
                  participants’ whereabouts after they have accepted your invitation.
                </li>
                <li>
                  Group Tracking: Stay connected during meetups, adventures, or any group activity.
                  Seamlessly track each other's movements for teamwork and safety.
                </li>
                <li>
                  Shared Location: Easily connect with loved ones by sharing your real-time
                  location. As a host, enable tracking for friends and family throughout your
                  journey.
                </li>
              </ul>

              <p>
                The SupportSnap app ensures safety with geofencing alerts, allowing tailored
                notifications for specific locations. It also prioritizes personal tracking,
                granting the freedom to share your location securely with trusted contacts.
              </p>
              <p>
                Furthermore, SupportSnap facilitates effortless communication through in-app
                chatting, eliminating the need for multiple platforms. The app’s history and reports
                feature provides comprehensive insights into your travel history, offering detailed
                information about past locations, routes, and timelines.
              </p>
              <p>
                Whether it’s group tracking for teamwork, business trips, or seamless coordination
                during family vacations, SupportSnap ensures that a journey is not just about the
                destination but the connections made along the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- About Us Section End -->
    </div>
  </section>
  <myFooter />
</template>


 <script>
import Header from '@/components/headerMain.vue'
import myFooter from '@/components/FooterMain.vue'
export default {
  name: 'About-Us',
  components: {
    Header,
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