import React from 'react'
import Nav2 from '@/components/Nav2'
import { songs } from '../../../songs'





// songsofartist=[]




function artistid({ song }) {
    const songofartist = songs.filter((songlo) => songlo.author === song.author)






    return (
        <>
            <Nav2 />
            <div className='flex flex-col justify-center items-center w-full my-10'>
                <div className='container'>
                    <div className='flex justify-center flex-col '>
                        <div className='rounded-full w-40 h-40 my-2 mx-auto border'>
                            <img
                                src={song.link.images[0].url}
                                alt=''
                                className='rounded-full w-40 h-40'
                            />
                        </div>
                        <h3 className='text-lg font-bold text-center'>{song.author}</h3>
                    </div>

                    <div className='my-10'>
                        <div className='flex justify-between items-center my-2'>
                            <h3 className='text-md'>
                                Songs
                            </h3>
                            <h3 className='text-md'>View All</h3>


                        </div>
                        <hr />
                        <div>
                            {songofartist.map((songlo) => {
                                return (
                                    <div className='flex justify-between my-3'>
                                        <div>
                                            <img
                                                src={songlo.link.images[1].url}
                                                alt='songimg'
                                                className='w-20 h-20 rounded-lg border'
                                            />
                                        </div>
                                        <a href={`/music/${songlo.id}`}><p className='text-sm hover:underline hover:underline-offset-2'>{songlo.name}</p></a>

                                    </div>
                                )

                            })}

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default artistid



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
