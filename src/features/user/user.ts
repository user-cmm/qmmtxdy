import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState{
  token: string
  isLogin: boolean
  avatar: string
}
const defaultState = {
  token:"",
  isLogin: false,
  avatar:''
} as UserState
export const userSlice = createSlice({
  name:"user",
  initialState:defaultState,
  reducers:{
    onLogin(state, action:PayloadAction<UserState>) {
      let {token,isLogin,avatar} = action.payload
      state.token = token
      state.isLogin = isLogin
      state.avatar = avatar
      localStorage.setItem("qmm_token",token)
      localStorage.setItem("avatar",avatar)
    },
    logout(state) {
      state.token = ""
      state.avatar = ""
      state.isLogin = false
      localStorage.removeItem("qmm_token")
    }
  }
})
export const {onLogin,logout} = userSlice.actions
export default userSlice.reducer;