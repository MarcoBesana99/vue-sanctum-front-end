import axios from "axios"

let Api = axios.create({
  baseURL: "http://localhost:8085/api"
})

Api.defaults.withCredentials = true

export default Api