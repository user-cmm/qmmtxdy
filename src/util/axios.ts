import axios from "axios";

// 请求默认参数赛这里
const defaultAxios = axios.create({})

// 请求拦截器 (可以塞个token之类的)
defaultAxios.interceptors.request.use((_config)=>{
})

// 响应拦截器（报错信息之类的）
defaultAxios.interceptors.request.use((_res)=>{
},(_value)=>{
})
export default defaultAxios