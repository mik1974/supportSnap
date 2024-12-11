<template>
  <section>
    <!-- Page-wrapper-Start -->
    <div class="page_wrapperr">
      <!-- Preloader -->
      <div class="full_bg">
        <section class="signup_section ulogin">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-8 col-lg-8">
                <!-- Sign In Form -->
                <div class="form_block">
                  <div class="form_side02">
                    <h1>Setup Complete!</h1>
                    <p>
                      Congratulations! Your KYC verification and bank details have been successfully
                      submitted. You are now ready to receive payments. If you have any questions,
                      feel free to reach out to our support team.
                    </p>
                    <!-- <div class="btn_block" data-aos="fade-up" data-aos-duration="1500">
                      <a href="/" class="btn puprple_btn ml-0">Back To Home</a>
                      <div class="btn_bottom"></div>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 col-lg-4"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Your styles here */
.full_bg {
  width: 100%;
}

.form-group span {
  color: red;
}
.form_block {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  /* background: #979b9e !important; */
  background: transparent !important;
}
.form_block h1 {
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 900;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  color: #49847c;
}

.forgate_check {
  margin-bottom: 30px;
}

.page_wrapperr {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: #979b9e; */
  background: url('/images/success-bg03.jpg') no-repeat top center #e9fefb;
  background-size: cover;
}

.signup_section .form_block .form_side02 {
  /* width: 50%; */
  width: 100%;
  text-align: left;
  /* padding: 15px 100px; */
}
.form_side02 .btn_block {
  margin-top: 50px;
}

@media screen and (max-width: 1200px) {
  .form_block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80%;
  }
}

@media screen and (max-width: 1099px) {
  .form_block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80%;
  }
}

@media screen and (max-width: 991px) {
  .form_block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80%;
  }
}

@media screen and (max-width: 767px) {
  .form_block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80%;
  }
  .page_wrapperr {
    background: #d1d7d7;
  }
}

@media screen and (max-width: 576px) {
  .form_block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80%;
  }
}

.form_block {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 50px 20px;
}
.form_block h1 {
  margin-bottom: 30px;
}
</style>