import { useEffect, useState } from 'react'
import { songs } from '../../../songs'
import { createSlice } from '@reduxjs/toolkit'






const initialState = {
    songstate: {},

    songarray:
        typeof localStorage !== 'undefined' && localStorage.getItem('songarray') ?
            JSON.parse(localStorage.getItem('songarray')) :
            []
    ,
    searchitem: "",
    currentSong: 0,
    current: "",
    songslist: songs,
    repeat: false,
    random: false,
    playing: false,
    audio: null,



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


            localStorage.setItem("songarray", JSON.stringify(state.songarray));
        },
        removeitem: (state, action) => {
            const notremoveitems = state.songarray.filter(item => (item.id !== action.payload.id));
            state.songarray = notremoveitems;

            localStorage.setItem("songarray", JSON.stringify(state.cartItems));

        },
        searchitem: (state, action) => {
            state.searchitem = action.payload;



        },
        currentmusic: (state, action) => {
            state.currentSong = action.payload.id;
            state.current = action.payload
        }
        ,
        prevSong: (state, action) => {
            state.currentSong = action.payload;
            if (state.random) {
                return state.currentSong = ~~(Math.random() * state.songslist.length);

            }

            if (state.currentSong === 0) {

                state.currentSong = (state.songslist.length - 1);

                // SetCurrent(state.songslist.length - 1)
            } else {
                state.currentSong = (state.currentSong - 1);

                // SetCurrent(state.currentSong - 1)
            }

        },
        nextSong: (state, action) => {
            state.currentSong = action.payload;
            if (state.random) {
                return state.currentSong = ~~(Math.random() * state.songslist.length);

            }
            if (state.currentSong === (state.songslist.length - 1)) {

                state.currentSong = 0;
            } else {
                state.currentSong = state.currentSong + 1;
                // SetCurrent(state.currentSong + 1)
            }
        },
        handleEnd: (state, action) => {
            // Check for random and repeat options
            state.currentSong = action.payload.id;

            if (state.random) {
                return state.currentSong = ~~(Math.random() * state.songslist.length);
            } else {
                if (state.repeat) {
                    state.currentSong = state.currentSong + 1;
                    // nextSong()
                } else if (state.currentSong === state.songslist.length - 1) {
                    return
                } else {
                    state.currentSong = state.currentSong + 1;
                    // nextSong()
                }
            }
        },
        repeat: (state, action) => {
            if (state.repeat == true) {
                state.currentSong = action.payload;
            }
        }

    }
})



export const { songhandle, removeitem, currentmusic, searchitem, handleEnd, prevSong, nextSong } = Songslice.actions

export default Songslice.reducer
