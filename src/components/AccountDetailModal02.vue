<template>
  <!-- <div v-if="visible" class="popup-overlay">
    <div class="popup-content">
      <h3>Alert</h3>
      <p>You need to complete your bank account setup first.</p>
      <button @click="closePopup">Close</button>
    </div>
  </div> -->
  <Transition name="modal">
    <div v-if="propValue02" class="modal-mask">
      <div class="modal-container" ref="modal">
        <div class="modal-header">
          <slot name="header"
            ><h3>Dear {{ propUser02 }}</h3></slot
          >
        </div>

        <div class="modal-body">
          <slot name="body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1>KYC Verification Completed</h1>
                <p>
                  Congratulations! You’ve successfully completed the KYC verification. Next, you
                  will receive an email with a secure link from Stripe to provide your bank details.
                  Please follow the instructions in the email to complete the payment setup. Rest
                  assured, we do not store your banking information — Stripe securely handles it.
                </p>
              </div>
            </div>
          </slot>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            id="submit"
            name="submit"
            class="btn btn-secondary"
            @click="cancelModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, ref, watch, onUnmounted } from 'vue'
import gsap from 'gsap'
// import { useStore } from 'vuex'

const props = defineProps({
  propValue02: Boolean,
  propUser02: {
    type: String,
    required: true
  }
})
// const store = useStore()
// const userName = ref('')

const emit = defineEmits(['close'])

// const closePopup = () => {
//   emit('close')
// }
const modal = ref(null)
const zoomIn = () => {
  gsap.to(
    modal.value,
    { duration: 0.1, scale: 0.2, opacity: 1 },
    { scale: 1, opacity: 1, duration: 0.1, ease: 'power2.out' }
  )
}

// const parentCloseModal = () => {
//   emit('pparentCloseModal')
// }

const cancelModal = () => {
  emit('pparentCloseModal02')
}

const zoomOut = () => {
  gsap.to(modal.value, {
    scale: 0.2,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => emit('close')
  })
  emit('close')
}

// const userInfo = () => {
//   const user_data = JSON.parse(localStorage.getItem('user'))
//   userName.value = user_data.name
// }

watch(
  () => props.propValue02,
  (newVal) => {
    if (newVal) {
      zoomIn()
    } else {
      zoomOut()
    }
  }
)
onMounted(() => {
  // window.addEventListener('storage', userInfo);
  //userInfo()
})

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  //window.removeEventListener('storage', userInfo)
})
</script>

<style scoped>
/* Your styles here */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  transition: opacity 0.9s ease;
}

.modal-container {
  width: 900px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.9s ease;
  border-radius: 8px;
}

.modal-header h3 {
  margin-top: 0;
  color: #4a736d;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-body h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
}
</style>
