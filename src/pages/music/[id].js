
import React from 'react'
import Nav2 from '@/components/Nav2'
import Link from 'next/link'
import Bottomnav from '@/components/Bottomnav'



function songid({ song }) {
    return (
        <>
            <Nav2 />
            <div className='my-12'>
                <div className='container mx-auto '>
                    <div className='mx-auto max-w-2xl px-7  sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8'>
                        <div className='grid   grid-cols-1 gap-7 sm:grid-cols-2'>
                            <div >
                                <img
                                    src={song.link.images[1].url}
                                    alt=''
                                    className='h-72 w-72 object-cover object-center mx-auto  border rounded-lg'
                                />


                            </div>

                            <div className='mt-4 text-center sm:text-start '>

                                <h1 className='text-2xl font-extrabold mb-2'>{song.name}</h1>
                                <a href={`/artists/${song.id}`} >
                                    <p className='text-xs text-slate-700/75 mb-1 hover:underline hover:underline-offset-2'>{song.author}</p>
                                </a>
                                {/* <p className='text-slate-700/75 my-3 text-xs'>
                                    10 episods
                                </p> */}
                                {/* <Bottomnav song={song.url} /> */}

                                <audio id={song.id} controls className='bg-gray-100 w-full rounded-lg mt-5  '>
                                    <source src={song.url} type="audio/ogg" className='' />
                                    Your browser does not support the audio element.

                                </audio>




                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default songid


export async function getStaticPaths() {
    const res = await fetch('https://newpodcast2.vercel.app/api/songs');
    const data = await res.json();

    const paths = data.map(d => {
        return {
            params: { id: `${d.id}` }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const res = await fetch(`https://newpodcast2.vercel.app/api/songs/${context.params.id}`);
    const data = await res.json();


    return {
        props: {
            song: data
        }
    }
}
