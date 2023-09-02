
import { createSlice } from '@reduxjs/toolkit'






const initialState = {
    songstate: {},

    songarray:
        // typeof localStorage !== 'undefined' && localStorage.getItem('songarray') ?
        //     JSON.parse(localStorage.getItem('songarray')) :
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

            setStorLocal("songarray", JSON.stringify(state.songarray));
        },
        removeitem: (state, action) => {
            const notremoveitems = state.songarray.filter(item => (item.id !== action.payload.id));
            state.songarray = notremoveitems;

            setStorLocal("songarray", JSON.stringify(state.cartItems));

        }

    }
})



export const { songhandle, removeitem } = Songslice.actions

export default Songslice.reducer
