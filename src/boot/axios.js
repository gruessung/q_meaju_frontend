import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://meaju.de/'
})
export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
export { axiosInstance }
