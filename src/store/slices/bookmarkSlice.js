import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        { name: 'Category A' },
        { name: 'Category B' }
    ],
    bookmarks: [],
    bookmarkDetails: {}
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setBookmarkDetails: (state, action) => {
            state.bookmarkDetails = action.payload
        },
        addBookmark: (state, action) => {
            state.bookmarks.push(action.payload)
        },
        addCategories: (state, action) => {
            state.categories.push(action.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const { setBookmarkDetails, addBookmark, addCategories } = bookmarkSlice.actions

export default bookmarkSlice.reducer