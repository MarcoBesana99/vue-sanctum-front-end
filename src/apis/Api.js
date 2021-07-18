import axios from "axios"

let Api = axios.create({
  baseUrl: "http://localhost:8005/api"
})

export default Api