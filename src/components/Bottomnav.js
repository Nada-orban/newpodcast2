import React, { useState } from 'react'
import Image from 'next/image'
import imagelogo from '../../public/264x264-000000-80-0-0.jpg'
import { HandThumbDownIcon, HandThumbUpIcon, ArrowUturnLeftIcon, ForwardIcon, PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { songs } from '../../songs'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { songhandle } from '../components/redux/Songslice'
import { IoReload } from 'react-icons/io5'



function bottomnav() {
    const dispatch = useDispatch()
    const song = useSelector(state => state.song)
    console.log(song.songstate.url)
    console.log(song.songarray)

    const [show, setShow] = useState(false)
    const [disappear, setDisappear] = useState(true)
    const [currentdata, setCurrrentdata] = useState(null)

    useEffect(() => {
        if (song.songstate.url !== "") {
            console.log(song.songstate.url)
            console.log(show)
            console.log("hello")
            setShow(!show)

        }



        //     if (song.songstate.url !== "") {
        //         console.log(song.songstate.url)
        //         console.log(show)
        //         setShow(true)

        //     }

    }, [song.songstate.url])







    return (
        // <div className='bg-red-300 h-20 w-full  fixed bottom-0 ' >
        //     {!show && <audio id={song.songstate.id} controls className='w-full rounded-lg bg-gray-100  '>
        //         <source src={song.songstate.url} type="audio/mp3" onChange={() => setShow(!disappear)} />
        //         Your browser does not support the audio element.

        //     </audio>}

        //     <p>{song.songstate.name}</p>
        // </div>

        <div className='sticky bottom-0 h-60 dark:bg-neutral-900/50 sm:bg-neutral-900/50 bg-neutral-200/50 text-white px-5 py-3 border border-white w-full overflow-hidden rounded-t-[50px]'>


            <div className='flex flex-col gap-3 justify-center items-center'>
                <div className='bg-black/75 h-[5px] w-32 my-2 rounded-2xl'></div>
                <div>
                    <h4 className='text-lg font-bold'>{song.songstate.name}</h4>
                    <p className='text-sm font-medium'>{song.songstate.author}</p>
                </div>
                <div>
                    <div></div>
                    <audio />
                </div>
            </div>
            {/* <div className='flex justify-between items-center gap-1'>
                <div className='flex gap-2'>
                    <div>
                        <Image
                            src={imagelogo}
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className=''>
                        <h2>title</h2>
                        <p>author</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <HandThumbDownIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" />
                    <ArrowUturnLeftIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" />
                    <PlayIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" />
                    <ForwardIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" />
                    <HandThumbUpIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" />

                </div>
                <div className='flex justify-end items-center gap-3'>
                    <p>0:03<span>|</span>3:1</p>
                    <SpeakerWaveIcon className=" h-10 w-15 cursor-pointer" aria-hidden="true" />


                </div>
            </div> */}

        </div >
    )
}

export default bottomnav
