import { message } from "antd";
import axios from "axios";
import store from "../app/store";
import { logout } from "../features/user/user";

// 请求默认参数赛这里
const defaultAxios = axios.create({})

// 请求拦截器 (可以塞个token之类的)
defaultAxios.interceptors.request.use((config)=>{
  return {
    ...config,
    headers:{
      qmm_token: store.getState().userSlice.token,
      ...config.headers
    }
  }
},(err)=>{
  return err
})

// 响应拦截器（报错信息之类的）
defaultAxios.interceptors.response.use((res)=>{
  return res
},(value)=>{
  console.log(value.response.status)
  if(value.response.status === 401){
    store.dispatch(logout())
  }
  message.error(value.response?.data?.error || "服务器请求失败")
  return value.response
})
export default defaultAxios