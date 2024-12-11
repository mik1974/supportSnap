<template>
  <div>
    <div class="container mt-100 pb-100">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-center">
                <h3><i class="fa fa-lock fa-4x"></i></h3>
                <h2 class="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div class="panel-body">
                  <form class="form" @submit.prevent="emailSubmit">
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-envelope color-blue"></i
                        ></span>
                        <input
                          placeholder="email address"
                          class="form-control"
                          type="email"
                          v-model="state.vue_email"
                          v-bind:class="{
                            invaliddata: v$.vue_email.$error == true
                          }"
                        />
                        <div class="myerror" v-if="v$.vue_email.$error">
                        {{ v$.vue_email.$errors[0].$message }}
                      </div>
                      </div>
                     
                    </div>
                    <div class="form-group">
                      <!-- <input
                      name="recover-submit"
                      class="btn btn-lg btn-block taso-btn mt-5"
                      value="Reset Password"
                      type="submit"
                    />-->
                      <button class="login100-form-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const newEmail = ref('')
const state = reactive({
  vue_email: ''
})

const rules = computed(() => ({
  vue_email: { required, email }
}))
const v$ = useVuelidate(rules, state, { $lazy: true })

// Methods
const emailSubmit = async () => {
  try {
    await v$.value.$validate()
    console.log('I am in again', !v$.value.$error)

    if (!v$.value.$error) {
      resetPassword()
    }
  } catch (error) {
    alert('form failed validation')
    console.log(error)
  }
}

const resetPassword = async () => {
  newEmail.value = state.vue_email

  await store.dispatch('resetCredential', newEmail.value)
}
</script>

<style  scoped>
.panel {
  max-width: 500px;
  margin: 100px auto;
  display: table;
}
.panel h2 {
  font-weight: 700;
  margin: 15px 0;
}

.panel input {
  width: 100%;
  border: solid 1px #dadada;
  margin: 10px 0;
  border-radius: 5px;
}
.taso-btn:hover {
  background: #1c2a58;
  color: #fff;
}
.fa-lock {
  color: #1c2a58;
}
.myerror {
  color: red;
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 13px;
  text-align: left;
}
.form-control:focus {
  border-color: #ff7300 !important;
}
.signup_section .form_block .form_side form .form-control {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #999ca6;
  padding-left: 15px;
}

.form-group span {
  color: red;
}

.login100-form-btn {
  padding: 8px 40px;
  background: #173c49;
  color: #fff;
  border-radius: 12px;
}
</style>


