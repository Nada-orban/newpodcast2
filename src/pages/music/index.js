import React, { useState } from 'react'
import Nav2 from '@/components/Nav2'
import Songsection from '@/components/songsection'
// import { songs } from '../../../songs'
import Artists from '@/components/Artists'
import { useSelector, useDispatch } from 'react-redux';



const artists = []
const finalartists = []


function handleartists(bigarray) {
    var authorname = ''
    bigarray.forEach(element => {
        if (element.author !== authorname) {
            authorname = element.author
            if (!finalartists.includes(authorname)) {
                finalartists.push(authorname)
                artists.push(element)
            }
        }
    });
    return artists;
}

// function getfinalartists(artists) {
//     artists.forEach(element => {
//         if (!finalartists.includes(element)) {
//             finalartists.push(element)
//         }
//     })

//     return finalartists;

// }




function index({ songs }) {
    // console.log(artists)
    // console.log(finalartists)
    handleartists(songs)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const song = useSelector(state => state.song)
    // getfinalartists(artists)




    return (
        <>
            <Nav2 />
            <div>
                <div className="mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900  ">Songs</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {songs.map((song) => {
                            return (
                                <Songsection key={song.id} {...song} />
                            )
                        })}
                    </div>
                </div>

            </div>
            <div>
                <div id="artists" className="mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 ">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900  ">Top artists</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 mx-auto">
                        {artists.map((artist) => {
                            return (
                                <Artists key={artist.id} {...artist} />
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default index

export async function getStaticProps() {
    const res = await fetch('https://newpodcast2.vercel.app/api/songs');
    const data = await res.json();


    return {
        props: {
            songs: data
        }
    }
}
