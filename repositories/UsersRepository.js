import Repository from "~/repositories/Repository";

const resource ="/users";

export default {
  get(){
    return Repository.get(`${resource}`);
  },

}
