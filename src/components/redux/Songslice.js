
import { createSlice } from '@reduxjs/toolkit'






const initialState = {
    songstate: {},

    songarray:
        // typeof localStorage !== 'undefined' && localStorage.getItem('recentlysong') ?
        //     JSON.parse(localStorage.getItem('recentlysong')) :
        []
    ,


}



const setStorLocal = (item, value) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(item, value);
    }
}

const Songslice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        songhandle: (state, action) => {

            state.songstate = action.payload;
            state.songarray.push(action.payload)

            setStorLocal("recentlysong", JSON.stringify(state.songarray));
        }

    }
})



export const { songhandle } = Songslice.actions

export default Songslice.reducer
