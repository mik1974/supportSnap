<template>
  <section class="terms">
    <!-- Page-wrapper-Start -->
    <div class="page_wrapper">
      <!-- About Us Section Start -->
      <section class="about_us_sectionn nobg">
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
                <span class="title_badge">Terms of Use</span>
                <h2>
                  Terms of Use
                  <span>(EULA)</span>
                </h2>
              </div>
              <div class="terms-conditions-info">
                <h3>Effective Date: February 19, 2025</h3>
                <p>
                  Welcome to Support Snap! By accessing or using our platform, you agree to comply
                  with these Terms of Use, our Privacy Policy, and Community Guidelines. Please read
                  them carefully.
                </p>

                <!-- <h3>TABLE OF CONTENTS</h3> -->
                <!-- <ol> -->
                <!-- <li>OUR SERVICES</li> -->
                <!-- <li>INTELLECTUAL PROPERTY RIGHTS</li> -->
                <!-- <li>USER REPRESENTATIONS</li> -->
                <!-- <li>USER REGISTRATION</li> -->
                <!-- <li>PURCHASES AND PAYMENT</li> -->
                <!-- <li>CANCELLATION</li> -->
                <!-- <li>PROHIBITED ACTIVITIES</li> -->
                <!-- <li>USER GENERATED CONTRIBUTIONS</li> -->
                <!-- <li>CONTRIBUTION LICENSE</li> -->
                <!-- <li>MOBILE APPLICATION LICENSE</li> -->
                <!-- <li>THIRD-PARTY WEBSITES AND CONTENT</li> -->
                <!-- <li>SERVICES MANAGEMENT</li> -->
                <!-- <li>PRIVACY POLICY</li> -->
                <!-- <li>TERM AND TERMINATION</li> -->
                <!-- <li>MODIFICATIONS AND INTERRUPTIONS</li> -->
                <!-- <li>GOVERNING LAW</li> -->
                <!-- <li>DISPUTE RESOLUTION</li> -->
                <!-- <li>CORRECTIONS</li> -->
                <!-- <li>DISCLAIMER</li> -->
                <!-- <li>LIMITATIONS OF LIABILITY</li> -->
                <!-- <li>INDEMNIFICATION</li> -->
                <!-- <li>USER DATA</li> -->
                <!-- <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li> -->
                <!-- <li>CONTACT US</li> -->
                <!-- </ol> -->
                <br />
                <p></p>
                <h3>TABLE OF CONTENTS</h3>

                <div class="termsblock">
                  <ol>
                    <li @click.prevent="toppad('aft')"><a>Acceptance of Terms</a></li>
                    <li @click.prevent="toppad('ur')"><a>User Responsibilities</a></li>
                    <li @click.prevent="toppad('cg')"><a>Community Guidelines</a></li>
                    <li @click.prevent="toppad('jprs')"><a>Job Posting & Reporting System</a></li>
                    <li @click.prevent="toppad('cme')"><a>Content Moderation & Enforcement</a></li>
                    <li @click.prevent="toppad('cap')"><a>Compliance with Apple’s Policies</a></li>
                    <li @click.prevent="toppad('ntocau')">
                      <a>No Tolerance for Objectionable Content or Abusive Users</a>
                    </li>
                    <li @click.prevent="toppad('ctt')"><a>Changes to These Terms</a></li>
                    <li @click.prevent="toppad('cu')"><a>Contact Us</a></li>
                  </ol>
                </div>
                <p><br /></p>
                <div class="termsbox" id="aft">
                  <h3>1. Acceptance of Terms</h3>
                  <p>
                    By accessing or using Support Snap ("Platform"), you agree to abide by these
                    Terms of Use. If you do not agree, please refrain from using our services.
                  </p>
                </div>
                <div class="termsbox" id="ur">
                  <h3>2. User Responsibilities</h3>

                  <p>As a user of Support Snap, you are expected to:</p>

                  <ul>
                    <li>
                      <strong>Provide Accurate Information:</strong> Ensure all information you
                      provide is truthful and current.
                    </li>
                    <li>
                      <strong>Comply with Laws:</strong> Adhere to all applicable laws and
                      regulations
                    </li>
                    <li>
                      <strong>Respect Others: </strong>Engage with other users professionally and
                      courteously.
                    </li>
                    <li>
                      <strong>Avoid Prohibited Activities: </strong>Refrain from fraudulent,
                      misleading, or harmful actions.
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="cg">
                  <h3>3. Community Guidelines</h3>
                  <p>To maintain a safe and respectful environment, users must not:</p>
                  <ul>
                    <li>
                      <strong>Post Spam or Scams: </strong> Avoid sharing deceptive or irrelevant
                      content.
                    </li>
                    <li>
                      <strong>Share Inappropriate Content:</strong> Do not post offensive, explicit,
                      or illegal material.
                    </li>
                    <li>
                      <strong>Provide Misleading Information: </strong> Ensure all job details are
                      accurate and clear.
                    </li>
                    <li>
                      <strong>Engage in Unsafe or Illegal Activities:</strong> Activities that are
                      dangerous or unlawful are strictly prohibited.
                    </li>
                    <li>
                      <strong>Duplicate Job Postings: </strong> Refrain from posting the same job
                      multiple times.
                    </li>
                  </ul>
                  <P
                    >Violations of these guidelines may lead to content removal or account
                    suspension.</P
                  >
                </div>
                <div class="termsbox" id="jprs">
                  <h3>4. Job Posting & Reporting System</h3>
                  <p>
                    Support Snap enables users to post and accept jobs. To uphold quality and
                    safety, we have implemented a reporting system for user-generated content.
                  </p>
                  <h4>Reporting Process</h4>
                  <p>Users can report job posts for reasons including:</p>
                  <ul>
                    <li><strong>Spam or Scam</strong></li>
                    <li><strong>Inappropriate Content</strong></li>
                    <li><strong>Misleading Information</strong></li>
                    <li><strong>Unsafe or Illegal Activity</strong></li>
                    <li><strong>Duplicate Job Posting</strong></li>
                    <li><strong>Violation of Community Guidelines</strong></li>
                  </ul>
                  <p>
                    When a job receives multiple reports, it will be reviewed and may be removed.
                    Users who consistently violate guidelines may face account suspension.
                  </p>
                </div>
                <div class="termsbox" id="cme">
                  <h3>5. Content Moderation & Enforcement</h3>
                  <p>
                    Our moderation team actively reviews reported content and takes necessary
                    actions:
                  </p>
                  <ul>
                    <li>
                      <strong>Job Removal: </strong>Content that breaches our guidelines will be
                      taken down.
                    </li>
                    <li>
                      <strong>Account Suspension: </strong>Repeat offenders may have their accounts
                      suspended.
                    </li>
                    <li>
                      <strong>Appeals: </strong>Users can contact support if they believe a report
                      was made in error.
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="cap">
                  <h3>6. Compliance with Apple’s Policies</h3>
                  <p>
                    In line with Apple's App Store Review Guidelines, Support Snap has implemented:
                  </p>
                  <ul>
                    <li>
                      <strong>User Reporting Mechanism: </strong>Users can flag objectionable
                      content directly within the app.
                    </li>
                    <li>
                      <strong>Content Filtering: </strong>Systems are in place to identify and
                      filter inappropriate content.
                    </li>
                    <li>
                      <strong>User Blocking Feature: </strong>Users can block others who engage in
                      abusive behavior.
                    </li>
                    <li>
                      <strong>Timely Response: </strong>Reported content is reviewed promptly, with
                      actions taken within 24 hours when necessary.
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="ntocau">
                  <h3>7. No Tolerance for Objectionable Content or Abusive Users</h3>
                  <p>
                    At Support Snap, we are committed to maintaining a safe, respectful, and
                    professional environment for all users. We have a zero-tolerance policy for
                    objectionable content and abusive behavior. By using our platform, you agree to
                    abide by the following guidelines:
                  </p>
                  <ul>
                    <li>
                      <strong>Prohibited Content : </strong> Any content that is offensive,
                      discriminatory, violent, sexually explicit, misleading, fraudulent, or
                      otherwise inappropriate is strictly forbidden. This includes job postings,
                      descriptions, messages, and any other user-generated content.
                    </li>
                    <li>
                      <strong>Respectful Interactions : </strong>Users must communicate in a
                      professional and courteous manner. Harassment, hate speech, bullying, threats,
                      or any form of abusive behavior will not be tolerated.
                    </li>
                    <li>
                      <strong>Reporting and Enforcement : </strong> Users can report violations
                      directly through the app. Jobs that receive multiple reports will be
                      automatically removed, and repeated violations may result in account
                      suspension or permanent termination.
                    </li>
                    <li>
                      <strong>Immediate Action : </strong>We actively monitor reported content and
                      take necessary actions within 24 hours. Users who violate these policies may
                      be permanently banned from using the platform.
                    </li>
                  </ul>
                  <p>By using Support Snap, you acknowledge and agree to these terms. Any violation may result in immediate action, including removal of content or termination of your account.

We are dedicated to fostering a safe and positive community. If you encounter any violations, please report them promptly.


</p>
                </div>
                <div class="termsbox" id="ctt">
                  <h3>8. Changes to These Terms</h3>
                  <p>
                    We may update these Terms periodically. Continued use of the platform signifies
                    acceptance of any changes.
                  </p>
                </div>
                <div class="termsbox" id="cu">
                  <h3>9. Contact Us</h3>
                  <p>
                    For questions or concerns about these Terms, please reach out to us at
                    <a href="mailto:info@supportsnap.org">info@supportsnap.org</a>. By using Support
                    Snap, you agree to these Terms and commit to fostering a positive community.
                    Thank you for being a valued member of our platform!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- About Us Section End -->
    </div>
  </section>
</template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const activeSection = ref(null)
const sectionID = ref(null)
const isHighlighted = ref(false)
const isRolled = ref(false)
const toppad = (id) => {
  isHighlighted.value = true
  sectionID.value = id
  activeSection.value = id
  const targetElement = document.getElementById(id)
  //console.log(targetElement)
  if (targetElement) {
    targetElement.classList.add('padded-section')
    targetElement.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      // activeSection.value = null
      // // isHighlighted.value = false
      // targetElement.classList.remove('padded-section')
      isRolled.value = true
    }, 1000) // Adjust timeout based on scroll duration
  }
}

const removeHighlight = () => {
  const element = document.getElementById(sectionID.value)
  if (element) {
    element.classList.remove('padded-section')
    sectionID.value = null
    // isHighlighted.value = false
  }
}

const handleScroll = () => {
  if (isRolled.value) {
    removeHighlight()
  }
  isRolled.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
  
  <style scoped>
/* Your styles here */
.terms {
  margin: 40px 0;
}
.about_us_sectionn .abt_text h2 {
  max-width: 100%;
  margin-bottom: 20px;
}
.terms-conditions-info h3 {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
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
  padding-top: 15px;
  margin-bottom: 30px;
}
.padded-section {
  padding-top: 100px;
}

.termsbox ul {
  display: block;
  margin: 10px 15px;
  padding: 0;
  text-align: left;
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
.about_us_sectionn .nobg::before {
  background: none;
  background-image: none !important;
}
.about_us_sectionn ::before {
  background-image: none !important;
  background: none;
}
.termsbox h4 {
  font-weight: 600;
  margin: 10px 0;
}
</style>
  