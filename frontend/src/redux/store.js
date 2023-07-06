import { configureStore } from "@reduxjs/toolkit"
import userReducer,{userFetch} from "./reducers/UserSlice"
const store = configureStore({
    reducer:{
        user:userReducer,
    }  ,
    // middleware: (getDefaultMiddleware)=>{
    //     return getDefaultMiddleware().concat(producsApi.middleware)
    // }
})

export default store