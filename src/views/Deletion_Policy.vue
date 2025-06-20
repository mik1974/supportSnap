<template>
  <div>
    <!-- <section class="aboutus"> -->
    <section class="terms">
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
            <div class="row abt_text">
              <div class="col-md-12">
                <div class="section_title">
                  <span class="title_badge">Deletion Policy</span>
                  <h2>
                    Support Snap <br />
                    <span>Account Deletion Policy </span>
                  </h2>
                </div>
                <div class="terms-conditions-info">
                  <p>
                    At Support Snap, we respect your privacy and are committed to giving you full
                    control over your data. In compliance with Google Play policies, we provide
                    users with an easy and accessible option to delete their accounts directly from
                    both the mobile app and the website.
                  </p>
                  <h3>How to Delete Your Account :</h3>
                  <h4>Via the Mobile App:</h4>
                  <div class="termsbox">
                    <ul>
                      <li>Open the Support Snap app</li>
                      <li>Go to Settings.</li>
                      <li>Tap on Delete My Account.</li>
                      <li>Confirm the deletion request.</li>
                    </ul>
                  </div>
                  <h4>Via the Website:</h4>
                  <div class="termsbox">
                    <ul>
                      <li>
                        Visit our website at
                        <a href="https://supportsnap.org">https://supportsnap.org.</a>
                      </li>
                      <li>Log in to your account.</li>
                      <li>Navigate to your profile or account settings.</li>
                      <li>Click on Delete Account and follow the confirmation steps.</li>
                    </ul>
                  </div>

                  <h3>What Happens When You Delete Your Account?</h3>
                  <div class="termsbox">
                    <ul>
                      <li>
                        All personal identifiers (such as your name, email address, phone number,
                        and profile data) are permanently removed from our systems.
                      </li>
                      <li>
                        Any job-related data associated with your account (e.g., history of jobs
                        created or accepted) is anonymized and unlinked from your identity.
                      </li>
                      <li>
                        Your account becomes inactive immediately and cannot be recovered once
                        deletion is confirmed.
                      </li>
                    </ul>
                  </div>
                  <p>
                    We may retain certain data in a non-identifiable form for legitimate business or
                    legal purposes (such as security, fraud prevention, or audit compliance), but it
                    will not be linked to your identity. If you need assistance or have questions
                    about deleting your account, please contact us at
                    <a href="mailto:support@supportsnap.org">support@supportsnap.org.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- About Us Section End -->
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Your styles here */
/* Your styles here */
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
.aboutus h3 {
  font-size: 30px;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.aboutus p {
  margin-bottom: 15px;
}
.aboutus {
  margin-bottom: 50px;
}

.terms {
  margin: 40px 0;
}
.terms p {
  margin-bottom: 15px;
}
.about_us_section .abt_text h2 {
  max-width: 100%;
  margin-bottom: 20px;
}
.terms-conditions-info h3 {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.terms h4 {
  font-weight: 600;
  margin-bottom: 10px;
}

.descriptionArea {
  padding: 60px 0;
}
.descriptionArea h1 {
  margin-bottom: 30px;
}
.termsblock {
  display: block;
}
.termsblock ol {
  list-style: none;
  counter-reset: item;
  margin-left: 20px;
}
.termsblock li {
  counter-increment: item;
  margin-bottom: 5px;
  display: flex;
}
.termsblock li a {
  margin-top: 2px;
  cursor: pointer;
}
.termsblock li:before {
  margin-right: 10px;
  content: counter(item);
  background: #ff7300;
  border-radius: 50%;
  color: white;
  min-width: 1.2em;
  min-height: 1.2em;
  text-align: center;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 1px 10px;
}

.termsbox {
  padding-top: 0px;
  margin-bottom: 20px;
}
.padded-section {
  padding-top: 100px;
}

.termsbox ul {
  display: block;
  margin: 10px 15px;
  padding: 0;
}
.termsbox ul li {
  display: block;
  line-height: 24px;
  margin-bottom: 12px;
  padding-left: 30px;
  position: relative;
}

.termsbox ul li:before {
  content: '\f005'; /* FontAwesome Unicode */
  font-family: 'Font Awesome 5 Free';
  display: inline-block;
  color: #e74c3c;
  width: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.about_us_section::after {
  background: none;
}
</style>
 
