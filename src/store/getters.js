export default {
  getUser: (state) => state.currentUser,
  getBankToken: (state) => state.bankToken, // Provide a default value (empty string)
  getonBoarding: (state) => state.onBoarding,
  getKycToken:(state)=>state.kyc_Token,
  getImgPath:(state)=>state.userImgPath
}
