import axios from "axios"

let Api = axios.create({
  baseURL: "http://localhost:8085/api"
})

export default Api