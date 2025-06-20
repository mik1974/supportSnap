<template>
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
          <div class="row abt_text" data-aos="fade-up" data-aos-duration="1500">
            <div class="col-md-12">
              <div class="section_title textStyle" data-aos="fade-up" data-aos-duration="1500">
                <span class="title_badge">Privacy Policy</span>
                <h2>Privacy Policy</h2>
              </div>
              <div class="terms-conditions-info">
                <p>
                  Support Snap (“we,” “our,” or “us”) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our mobile application ("App") and website ("Site"). By
                  using Support Snap, you agree to the terms of this Privacy Policy.
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
                <h3>TABLE OF CONTENTS</h3>

                <div class="termsblock">
                  <ol>
                    <li @click.prevent="toppad('iwc')"><a>INFORMATION WE COLLECT</a></li>
                    <li @click.prevent="toppad('hwuyi')"><a>HOW WE USE YOUR INFORMATION</a></li>
                    <li @click.prevent="toppad('syi')"><a>SHARING YOUR INFROMATION</a></li>
                    <li @click.prevent="toppad('tps')"><a>THIRD-PARTY SERVICES</a></li>
                    <li @click.prevent="toppad('drd')"><a>DATA RETENTION AND DELETION</a></li>
                    <li @click.prevent="toppad('s')"><a>SECURITY</a></li>
                    <li @click.prevent="toppad('cp')"><a>CHILDREN'S PRIVACY</a></li>
                    <li @click.prevent="toppad('utp')"><a>UPDATES TO THIS POLICY</a></li>
                    <li @click.prevent="toppad('cu')"><a>CONTACT US</a></li>
                  </ol>
                </div>
                <div class="termsbox" id="iwc">
                  <h3>1. INFORMATION WE COLLECT</h3>
                  <p>
                    We may collect the following types of information when you use our services:
                  </p>
                  <h4>Personal Identifiable Information (PII):</h4>
                  <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Profile photo</li>
                    <li>Payment details (via secure third-party services)</li>
                    <li>Location data (with your permission)</li>
                  </ul>
                </div>
                <div class="termsbox" id="hwuyi">
                  <h3>2. HOW WE USE YOUR INFORMATION</h3>
                  <p>We use the information we collect for purposes including:</p>

                  <ul>
                    <li>To create and manage your account</li>
                    <li>To facilitate task posting and job assignments</li>
                    <li>To process payments securely via third-party payment processors</li>
                    <li>To provide location-based services</li>
                    <li>To send notifications and updates</li>
                    <li>To respond to inquiries and provide support</li>
                    <li>To monitor and improve the App’s functionality and user experience</li>
                    <li>To ensure safety and prevent fraud or abuse</li>
                  </ul>
                </div>
                <div class="termsbox" id="syi">
                  <h3>3- SHARING YOUR INFROMATION</h3>
                  <p>
                    We do not sell your personal information. However, we may share your information
                    with:
                  </p>
                  <ul>
                    <li>
                      Service Providers: Payment processors (e.g., Stripe), hosting providers, and
                      analytics tools
                    </li>
                    <li>
                      Legal Authorities: When required to comply with legal obligations or respond
                      to valid legal requests
                    </li>
                    <li>
                      Other Users: Basic profile information may be visible to other users as part
                      of job matching and communication
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="tps">
                  <h3>4- THIRD-PARTY SERVICES</h3>
                  <p>We integrate with third-party platforms including:</p>
                  <ul>
                    <li>Google and Apple (for authentication)</li>
                    <li>
                      Stripe (for payment processing) These services have their own privacy
                      policies, and we recommend reviewing them separately.
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="drd">
                  <h3>5- DATA RETENTION AND DELETION</h3>
                  <p>
                    We retain your information only as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy.
                  </p>
                  <h4>Account Deletion:</h4>
                  <p>
                    Users can delete their accounts at any time via the App or website. Upon
                    deletion:
                  </p>
                  <ul>
                    <li>All personal identifiers will be permanently removed from our system</li>
                    <li>
                      Any data required to comply with legal, regulatory, or fraud prevention
                      obligations may be retained for a limited time
                    </li>
                  </ul>
                </div>
                <div class="termsbox" id="s">
                  <h3>6- SECURITY</h3>
                  <p>
                    We use industry-standard measures to protect your information, including
                    encryption, access controls, and secure servers. However, no transmission over
                    the internet is 100% secure.
                  </p>
                </div>
                <div class="termsbox" id="cp">
                  <h3>7- CHILDREN'S PRIVACY</h3>
                  <p>
                    Our services are not intended for users under the age of 18. We do not knowingly
                    collect data from children. If we learn that a child has provided us with
                    personal information, we will delete it immediately.
                  </p>
                </div>
                <div class="termsbox" id="utp">
                  <h3>8. UPDATES TO THIS POLICY</h3>
                  <p>
                    We may update this Privacy Policy periodically. We will notify you of
                    significant changes through the App or via email.
                  </p>
                </div>

                <div class="termsbox" id="cu">
                  <h3>CONTACT US</h3>
                  <p>If you have questions about this Privacy Policy, contact us at:</p>
                  <p>Support Snap Privacy Team</p>

                  <!-- <p>Phone: <a href="tel:180707555321">(+1)080 707 555-321</a></p> -->
                  <!-- <p>Email: <a href="mailto:info@SupportSnap.com">info@SupportSnap.com</a></p> -->
                  <ul>
                    <li>
                      Email: <a href="mailto:rianna@supportsnap.org">rianna@supportsnap.org</a>
                    </li>
                    <li>
                      Website: <a href="https://supportsnap.org/">https://supportsnap.org/</a>
                    </li>
                  </ul>
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
.terms p {
  margin-bottom: 20px;
}

.terms h4 {
  font-weight: 600;
  margin-bottom: 10px;
}
.about_us_section .abt_text h2 {
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
</style>
