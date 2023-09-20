import React, { useState, useRef } from 'react'
import Image from 'next/image'
import imagelogo from '../../public/264x264-000000-80-0-0.jpg'
import { HandThumbDownIcon, HandThumbUpIcon, ArrowUturnLeftIcon, ForwardIcon, PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { songs } from '../../songs'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { songhandle, removeitem, currentmusic, searchitem, handleEnd, prevSong, nextSong } from '../components/redux/Songslice'
import { IoReload } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa6'
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPauseFill, BsFillVolumeDownFill } from 'react-icons/bs'



function bottomnav() {
    const dispatch = useDispatch()
    const song = useSelector(state => state.song)

    const audio = useRef('audio_tag')
    const [playing, setPlaying] = useState(false)

    const [show, setShow] = useState(false)
    const [disappear, setDisappear] = useState(true)
    const [currentdata, setCurrrentdata] = useState(null)

    const [statevolum, setStateVolum] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    // useEffect(() => {
    //     if (song.songstate.url !== "") {
    //         console.log(song.songstate.url)
    //         console.log(show)
    //         console.log("hello")
    //         setShow(!show)

    //     }



    //     if (song.songstate.url !== "") {
    //         console.log(song.songstate.url)
    //         console.log(show)
    //         setShow(true)

    //     }

    // }, [song.songstate.url])


    const toggleAudio = () => {
        setPlaying(!playing);
        audio.current.paused ? audio.current.play() : audio.current.pause();
    }



    const handleVolume = (q) => {
        setStateVolum(q)
        audio.current.volume = q
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
    }

    // useEffect(() => {
    //     audio.current.volume = statevolum
    //     if (playing) {
    //         toggleAudio()
    //     }
    // }, [song.current]);





    return (
        <>
            {song.current && (
                <>
                    <div className='sticky hidden sm:block  inset-x-0 bottom-0 text-white bg-neutral-900/50 h-20 w-full '>
                        <div className='flex justify-between items-center gap-1 p-3 relative'>
                            <div className='flex gap-2'>
                                <div>
                                    <img
                                        src={song.songslist[song.currentSong].link.images[1].url}
                                        className='w-[50px] h-[50px]'

                                    />
                                </div>
                                <div className=''>
                                    <h2>{song.songslist[song.currentSong].name}</h2>
                                    <a href={`/artists/${song.songslist[song.currentSong].id}`} className='hover:underline hover:underline-offset-2'><p>{song.current.author}</p></a>

                                </div>
                            </div>
                            <audio
                                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                                onCanPlay={(e) => setDur(e.target.duration)}
                                onEnded={() => dispatch(handleEnd())}
                                ref={audio}

                                preload="true"
                                src={song.songslist[song.currentSong].url}
                            />
                            <div className='musicControls flex gap-5 absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2'>
                                {/* <HandThumbDownIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" /> */}
                                <BsFillSkipStartFill className='cursor-pointer' style={{ width: "30px", height: "30px", color: "white" }} onClick={() => dispatch(prevSong(song.currentSong))} />
                                <div
                                    className="play"
                                    onClick={() => {
                                        // togglePlaying()
                                        toggleAudio()
                                    }}
                                >
                                    <span className={!playing ? '' : 'hidden'}>
                                        <FaPlay style={{ width: "30px", height: "30px", color: "white" }} className='cursor-pointer' />
                                    </span>
                                    <span className={!playing ? 'hidden' : ''}>
                                        <BsPauseFill style={{ width: "30px", height: "30px", color: "white" }} className='cursor-pointer' />
                                    </span>
                                </div>
                                {/* <FaPlay style={{ width: "30px", height: "30px", color: "white" }} /> */}

                                <BsFillSkipEndFill style={{ width: "30px", height: "30px", color: "white" }} className='cursor-pointer' onClick={() => dispatch(nextSong(song.currentSong))} />
                                {/* <HandThumbUpIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" /> */}

                            </div>
                            <div className='flex gap-3 absolute right-5'>
                                <p>0:03<span>|</span>3:1</p>
                                <IoReload style={{ width: "20px", height: "20px", color: "white" }}
                                // className={'repeat ' + (repeat ? 'active' : '')}
                                />
                                {/* <SpeakerWaveIcon className=" h-10 w-15 cursor-pointer" aria-hidden="true" /> */}


                            </div>
                        </div>

                    </div>
                    <div className='sm:hidden inset-x-0 absolute  bottom-0 h-1/3 dark:bg-neutral-900/50  bg-neutral-100/25  dark:text-white text-black px-5 py-3 border border-white w-full overflow-hidden rounded-t-[50px]'>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <div className='bg-black/75 h-[5px] w-32 my-2 rounded-2xl'></div>
                            <div className='text-center'>
                                <h4 className='text-lg font-black '>{song.current.name}</h4>
                                <p className='text-sm font-medium'>{song.current.author}</p>
                            </div>
                            <div>
                                <div></div>
                                <input

                                    id="myinput"
                                    type='range'
                                    className='accent-red-600 w-72 my-3'
                                />
                                <div className='flex justify-between items-center my-3'>
                                    <BsFillSkipStartFill style={{ width: "30px", height: "30px", color: "black" }} onClick={() => dispatch(prevSong(song.currentSong))} />
                                    <div
                                        className="play"
                                        onClick={() => {
                                            // togglePlaying()
                                            toggleAudio()
                                        }}
                                    >
                                        <span className={!playing ? '' : 'hidden'}>
                                            <FaPlay style={{ width: "30px", height: "30px", color: "white" }} className='cursor-pointer' />
                                        </span>
                                        <span className={!playing ? 'hidden' : ''}>
                                            <BsPauseFill style={{ width: "30px", height: "30px", color: "white" }} className='cursor-pointer' />
                                        </span>
                                    </div>

                                    <BsFillSkipEndFill style={{ width: "30px", height: "30px", color: "black" }} onClick={() => dispatch(nextSong(song.currentSong))} />
                                </div>
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}


        </>



        //********************************************************************************************************************************************** */
        // <div className='bg-red-300 h-20 w-full  fixed bottom-0 ' >
        //     {!show && <audio id={song.songstate.id} controls className='w-full rounded-lg bg-gray-100  '>
        //         <source src={song.songstate.url} type="audio/mp3" onChange={() => show ? false : true} />
        //         Your browser does not support the audio element.

        //     </audio>}

        //     <p>{song.songstate.name}</p>
        // </div>

        // <div className='sticky bottom-0 h-60 dark:bg-neutral-900/50 sm:bg-neutral-900/50 bg-neutral-200/50 text-white px-5 py-3 border border-white w-full overflow-hidden rounded-t-[50px]'>


        //     <div className='flex flex-col gap-3 justify-center items-center'>
        //         <div className='bg-black/75 h-[5px] w-32 my-2 rounded-2xl'></div>
        //         <div>
        //             <h4 className='text-lg font-bold'>{song.songstate.name}</h4>
        //             <p className='text-sm font-medium'>{song.songstate.author}</p>
        //         </div>
        //         <div>
        //             <div></div>
        //             <audio />
        //         </div>
        //     </div>
        /* <div className='flex justify-between items-center gap-1'>
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
        </div> */

        /* </div > */
    )
}

export default bottomnav
