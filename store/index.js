import Repository from "~/repositories/RepositoryFactory";
const UserRepository = Repository.get("users");

export const state = () => ({
  users: [],
})

export const mutations = {
  loadUsers: (state, res) => {
    const {
      data
    } = res;
    state.users = data
  }
}

export const actions = {
  async getUsers({
                   commit
                 }) {
    commit('loadUsers', await UserRepository.get());
  },
}

export const getters = {
  getUsers(state) {
    return state.users
  }
}
