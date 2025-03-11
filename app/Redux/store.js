import { configureStore } from '@reduxjs/toolkit'
import Blogdata from "./Features/Data/DataSlice"

export const store = configureStore({
  reducer: {
    Blogdata : Blogdata
  },
})