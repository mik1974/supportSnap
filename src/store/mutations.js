export default {
  SET_USER(state, data) {
    //console.log('I am in mutations', data)
    state.currentUser = data
    // state.apiToken = data.api_token
    state.bankToken = data.bank_status
    state.onBoarding = data.onboarding_completed
    state.connectedId = data.connected_status
    //localStorage.setItem('user', JSON.stringify(data))
    localStorage.setItem('token', data.api_token)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('isAccountStatus', data.onboarding_completed)
    localStorage.setItem('isBankStatus', data.bank_status)
    localStorage.setItem('connectedId', data.connected_status)
    //console.log('ConnectedId Value from mutation :', state.connectedId)

    // state.currentUser = localStorage.getItem('user');
    //state.currentUser = data.user;
    //state.userProfile = JSON.parse(state.currentUser);

    // //console.log(state.currentUser, "Updated Current User");
  },
  CLEAR_USER(state) {
    state.currentUser = null
    state.apiToken = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('connectedId')
    // state.isLoggedIn = false
    state.connectedId = null
    localStorage.removeItem('isBankStatus')
    localStorage.removeItem('isAccountStatus')

    // if (!localStorage.getItem('isLoggedIn')) {
    //     state.btnText = "Login"
    // }
    // if (localStorage.getItem('isLoggedIn')) {
    //     state.btnText = "Logout";
    // } else {
    //     state.btnText = "Login";
    // }
  },
  // updateUserProfileMutation: (state, data) => {

  //        // localStorage.setItem("user", JSON.stringify(data.user));
  //   //state.currentUser = data.user;
  //   //state.userProfile = JSON.parse(data.user);
  //   //state.currentUser = JSON.parse(localStorage.getItem("user"));
  //         ////console.log(this.currentUser, "Updated Current User");
  // },
  verifyUserMutate: (state, data) => {
    state.currentUser = data
    //console.log(state.currentUser, 'In mMutation')
    // state.apiToken = data.apiToken
    state.bankToken = data.bank_status
    state.onBoarding = data.onboarding_completed
    state.connectedId = data.connected_status
    //localStorage.setItem('user', JSON.stringify(data))
    //localStorage.setItem('token', data.api_token)
    localStorage.setItem('isLoggedIn', true)
    // state.isLoggedIn = true
    localStorage.setItem('isAccountStatus', data.onboarding_completed)
    localStorage.setItem('isBankStatus', data.bank_status)
    localStorage.setItem('connectedId', data.connected_status)
    //console.log('ConnectedId Value from mutation :', state.connectedId)
  },
  newSetValue: (state, tad) => {
    ////console.log("Again hre store",tad)
    //localStorage.setItem("isLoggedIn", tad);
    //state.currentUser = tad;
    // state.currentUser = JSON.stringify(tad);
    state.currentUser = JSON.parse(tad)
    //localStorage.setItem('user', JSON.stringify(state.currentUser))
    // localStorage.setItem('token', state.currentUser.api_token)
    // localStorage.setItem('isLoggedIn', true)
  },
  accountCreated: (state, accData) => {
    state.currentUser = accData
    state.apiToken = accData.api_token
    //localStorage.setItem('user', JSON.stringify(state.currentUser))
    localStorage.setItem('isAccountStatus', accData.onboarding_completed)
    return
  },
  ZAFAR(state, data) {
    state.kyc_Token = data
  }
}
