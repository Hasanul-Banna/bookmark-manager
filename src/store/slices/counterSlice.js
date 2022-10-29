import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' }
    ],
    bookmarks: [
        {
            title: 'lorem ipsum dolro lorem ipsum dolro lorem ipsum dolro lorem ipsum dolro',
            url: 'fb.com',
            category: 'A'
        },
        {
            title: 'book 2',
            url: 'fb.com',
            category: 'A'
        },
        {
            title: 'book 3',
            url: 'fb.com',
            category: 'B'
        },
    ],
    bookmarkDetails: {
        title: 'book 3',
        url: 'fb.com',
        category: 'B'
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setBookmarkDetails: (state, action) => {
            state.bookmarkDetails = action.payload
        },
        addBookmark: (state, action) => {
            state.bookmarks.push(action.payload)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setBookmarkDetails, addBookmark, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer