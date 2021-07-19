import Api from "./Api"
import Cookie from "js-cookie"

export default {
  getCookie() {
    if (Cookie.get('XSRF-TOKEN')) return
    else return Api.get('/csrf-cookie')
  }
}