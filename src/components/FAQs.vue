<template>
  <section class="aboutus">
    <!-- FAQ Tab Section Start -->
    <section class="row_am faq_section">
      <div class="container">
        <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
          <span class="title_badge">Question & Answer</span>
          <h2><span>FAQs</span> - Frequently Asked Questions</h2>
        </div>
        <!-- <ul
          class="nav nav-tabs"
          id="myTab"
          role="tablist"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="genral-tab"
              data-toggle="tab"
              data-target="#genral"
              type="button"
              role="tab"
              aria-controls="genral"
              aria-selected="true"
            >
              Genral
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pricing-tab"
              data-toggle="tab"
              data-target="#pricing"
              type="button"
              role="tab"
              aria-controls="pricing"
              aria-selected="false"
            >
              Pricing
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="account-tab"
              data-toggle="tab"
              data-target="#account"
              type="button"
              role="tab"
              aria-controls="account"
              aria-selected="false"
            >
              Account
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="returns-tab"
              data-toggle="tab"
              data-target="#returns"
              type="button"
              role="tab"
              aria-controls="returns"
              aria-selected="false"
            >
              Returns Policy
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="support-tab"
              data-toggle="tab"
              data-target="#support"
              type="button"
              role="tab"
              aria-controls="support"
              aria-selected="false"
            >
              Technical Support
            </button>
          </li>
        </ul> -->
        <div class="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration="1500">
          <div
            class="tab-pane fade show active"
            id="genral"
            role="tabpanel"
            aria-labelledby="genral-tab"
          >
            <div class="accordion" id="accordionExample">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How app will useful for my business ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        lorem Ipsu m has been the industrys standard dummy text ever since the when
                        an unknown printer.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What support i will get in premium package?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Some placeholder content for the second accordion panel. This panel is
                        hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can i get update for free ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        And lastly, the placeholder content for the third and final accordion panel.
                        This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingfour">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          How to setup account ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsefour"
                      class="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Some placeholder content for the second accordion panel. This panel is
                        hidden by default.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header" id="headingfive">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          Is there any hidden cost?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsefive"
                      class="collapse"
                      aria-labelledby="headingfive"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Some placeholder content for the second accordion panel. This panel is
                        hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingsix">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          What is process to get refund ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsesix"
                      class="collapse"
                      aria-labelledby="headingsix"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        And lastly, the placeholder content for the third and final accordion panel.
                        This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingseven">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          How to setup account ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseseven"
                      class="collapse"
                      aria-labelledby="headingseven"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        And lastly, the placeholder content for the third and final accordion panel.
                        This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingeight">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseeight"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          What is process to get refund ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseeight"
                      class="collapse"
                      aria-labelledby="headingeight"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        And lastly, the placeholder content for the third and final accordion panel.
                        This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingnine">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsenine"
                          aria-expanded="false"
                          aria-controls="collapsenine"
                        >
                          Is there any discount on packages ?
                          <span class="icons">
                            <i class="icofont-plus"></i>
                            <i class="icofont-minus"></i>
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsenine"
                      class="collapse"
                      aria-labelledby="headingnine"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        And lastly, the placeholder content for the third and final accordion panel.
                        This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pricing" role="tabpanel" aria-labelledby="pricing-tab">
            <h2>FAQ Content Gose Here...</h2>
          </div>
          <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
            <h2>FAQ Content Gose Here...</h2>
          </div>
          <div class="tab-pane fade" id="returns" role="tabpanel" aria-labelledby="returns-tab">
            <h2>FAQ Content Gose Here...</h2>
          </div>
          <div class="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
            <h2>FAQ Content Gose Here...</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ Tab Section End -->
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Your styles here */
.textStyle {
  text-align: left;
}
.aboutus {
  background: #fdf7ec;
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
}
.aboutus p {
  margin-bottom: 15px;
}
.faq_section .card .card-header button {
  color: #49847c;
}
</style>