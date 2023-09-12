
import { createSlice } from '@reduxjs/toolkit'






const initialState = {
    songstate: {},

    songarray:
        // typeof localStorage !== 'undefined' && localStorage.getItem('songarray') ?
        //     JSON.parse(localStorage.getItem('songarray')) :
        []
    ,
    searchitem: "",


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
            const filterarray = state.songarray.findIndex(item => item.id === action.payload.id)
            if (filterarray >= 0) {
                console.log(filterarray)
            } else {
                state.songarray.push(action.payload)
            }
            // if (!state.songarray.includes(action.payload)) {
            //     state.songarray.push(action.payload)

            // }


            setStorLocal("songarray", JSON.stringify(state.songarray));
        },
        removeitem: (state, action) => {
            const notremoveitems = state.songarray.filter(item => (item.id !== action.payload.id));
            state.songarray = notremoveitems;

            setStorLocal("songarray", JSON.stringify(state.cartItems));

        },
        searchitem: (state, action) => {
            state.searchitem = action.payload;



        }

    }
})



export const { songhandle, removeitem, searchitem } = Songslice.actions

export default Songslice.reducer
