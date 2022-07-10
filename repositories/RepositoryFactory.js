import usersRepository from "~/repositories/UsersRepository";


const repositories = {
  'users': usersRepository
}
export default {
  get: name => repositories[name]
};
