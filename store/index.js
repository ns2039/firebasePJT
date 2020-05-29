export const state = () => ({
  userUid: null
  // test: "test"
});

export const mutations = {
  loginState(state, userUid) {
    state.userUid = userUid;
  },
  logoutState(state) {
    state.userUid = null;
  }
};

// const state = {
//   userUid: null,
//   test: "test"
// };

// const getters = {};

// const actions = {};

// const mutations = {
//   loginState(state, userUid) {
//     state.userUid = userUid;
//   },
//   logoutState(state) {
//     state.userUid = null;
//   }
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// };
