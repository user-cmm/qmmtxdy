import { configureStore } from '@reduxjs/toolkit';
import user,{UserState} from '../features/user/user';

let store = configureStore({
  reducer:{
    userSlice:user
  }
})
export type AppDispath = typeof store.dispatch
export type RootState = {
  userSlice: UserState
}
export default store