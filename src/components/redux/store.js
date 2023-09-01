
import songreducer from './Songslice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: { song: songreducer, },
})

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);