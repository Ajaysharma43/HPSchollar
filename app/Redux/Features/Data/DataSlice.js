const { createSlice } = require("@reduxjs/toolkit")

const initialstate = {
    Data : {}
}

const DataReducer = createSlice({
    initialState : initialstate , 
    name : "DataReducer",
    reducers : {
        SetData : (state , action) => {
            
        }
    }
})