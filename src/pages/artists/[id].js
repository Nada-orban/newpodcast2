import React from 'react'
import Nav2 from '@/components/Nav2'
import { PlayIcon, EllipsisHorizontalIcon, ShareIcon } from '@heroicons/react/24/outline'
import { songs } from '../../../songs'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Bottomnav from '@/components/Bottomnav'
import { useSelector, useDispatch } from 'react-redux';
import { songhandle } from '../../components/redux/Songslice'
import handler from '../api/products/[id]'






// songsofartist=[]




function artistid({ song }) {
    const songofartist = songs.filter((songlo) => songlo.author === song.author)
    const [play, setPlay] = useState(false)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)





    const handlesong = (song) => {
        console.log(song)
        dispatch(songhandle(song))
    }






    return (
        <>
            <Nav2 />
            <div className='mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
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
                                        <>
                                            <div key={songlo.id} className='flex justify-between my-3'>
                                                <div className='flex gap-5'>
                                                    <div className='group relative overflow-hidden cursor-pointer' onClick={() => dispatch(songhandle(songlo))} >
                                                        <img
                                                            src={songlo.link.images[1].url}
                                                            alt='songimg'
                                                            className='w-20 h-20 rounded-lg border'
                                                        />
                                                        <div className='hidden absolute   bottom-0 left-0  h-full w-full rounded bg-[#1d1b1b67] bg-fixed opacity-0  hover:opacity-100 text-white group-hover:block transition duration-300 ease-out delay-150  '>
                                                            <div className='flex flex-col justify-center items-center mt-6 rounded-full bg-white h-8 w-8 mx-auto'>
                                                                <PlayIcon className=' h-5 w-5 cursor-pointer text-black ' aria-hidden="true" />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href={`/music/${songlo.id}`}><p className='text-sm hover:underline hover:underline-offset-2 mt-5'>{songlo.name}</p></a>
                                                </div>
                                                <div>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="">

                                                                <EllipsisHorizontalIcon className=' h-10 w-10 cursor-pointer' aria-hidden="true" />

                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="px-1 py-1 ">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <button
                                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                            >
                                                                                {/* {active ? (
                                                                                <EditActiveIcon
                                                                                    className="mr-2 h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            ) : (
                                                                                <EditInactiveIcon
                                                                                    className="mr-2 h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            )} */}
                                                                                <ShareIcon className=" h-5 w-5 cursor-pointer mr-3" aria-hidden="true" />
                                                                                Share
                                                                            </button>
                                                                        )}
                                                                    </Menu.Item>

                                                                </div>


                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>


                                            </div>
                                            <hr />
                                            {/* {play && (<Bottomnav song={songlo.url} />)} */}


                                        </>

                                    )

                                })}

                            </div>
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
