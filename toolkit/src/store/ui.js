import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    ui: true,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleUi(state) {
            state.ui = !state.ui
        },
    },
})


export const {toggleUi} = uiSlice.actions
export default uiSlice.reducer