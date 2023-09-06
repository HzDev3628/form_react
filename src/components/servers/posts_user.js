import axios from 'axios'

export const UserData = {
  async inform(data) {
    return axios.post('http://localhost:3000/data', data)
  },

  async selectPlan(data) {
    return axios.post('http://localhost:3000/plan_users', data)
  },
  async cancelPlan(id) {
    return axios.delete(`http://localhost:3000/plan_users/${id}`)
  },

  async addOther(data) {
    return axios.post('http://localhost:3000/add_other', data)
  },
  async cancelOther(id) {
    return axios.delete(`http://localhost:3000/add_other/${id}`)
  }
}
