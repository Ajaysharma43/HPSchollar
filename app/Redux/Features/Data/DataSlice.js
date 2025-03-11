const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { default: axios } = require("axios")

const URL = process.env.NEXT_PUBLIC_URL

export const GetBlogData = createAsyncThunk('GetBlogData', async () => {
    const Response = await axios.get(`${URL}/Blogdata`)
    return Response.data
})

export const GetSingleBlog = createAsyncThunk('GetSingleBlog', async ({id}) => {
    const Response = await axios.post(`${URL}/Blogdata`, { id: id })
    return Response.data
})

const initialstate = {
    SingleBlog: null,
    Data: null,
    Loading: false,
    error: false
}

const DataReducer = createSlice({
    initialState: initialstate,
    name: "DataReducer",
    reducers: {
        SetData: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetBlogData.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(GetBlogData.fulfilled, (state, action) => {
            state.Data = action.payload.data
        })
        builder.addCase(GetBlogData.rejected, (state, action) => {
            state.error = true
        })

        builder.addCase(GetSingleBlog.fulfilled, (state, action) => {
            state.SingleBlog = action.payload.SingleBlog
        })
    }
})

export const { SetData } = DataReducer.actions;
export default DataReducer.reducer;