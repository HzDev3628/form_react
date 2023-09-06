import axios from 'axios'

export const UserGetInfo = {
    async getOther() {
        const response = await axios.get('http://localhost:3000/add_other')
        return response.data
    },

    async getPlan() {
        const response = await axios.get(`http://localhost:3000/plan_users?id=${1}`)
        return response.data[0]
    }
}
