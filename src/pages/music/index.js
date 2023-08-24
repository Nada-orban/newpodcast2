import React from 'react'
import Nav2 from '@/components/Nav2'
import Songsection from '@/components/songsection'

function index({ songs }) {
    return (
        <>
            <Nav2 />
            <div>
                <div className="mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Design</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {songs.map((song) => {
                            return (
                                <Songsection key={song.id} {...song} />
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
    const res = await fetch('http://localhost:3000/api/songs');
    const data = await res.json();


    return {
        props: {
            songs: data
        }
    }
}
