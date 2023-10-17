const { configureStore } = require("@reduxjs/toolkit");
import authReducer from './reducers/userSessionSlice'

const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store;