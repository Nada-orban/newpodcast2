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
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPauseFill, BsFillVolumeDownFill, BsFillVolumeOffFill, BsVolumeUpFill } from 'react-icons/bs'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function bottomnav() {
    const dispatch = useDispatch()
    const song = useSelector(state => state.song)

    const audio = useRef('audio_tag')
    const [playing, setPlaying] = useState(false)

    const [showvolum, setShowvolum] = useState(false)
    const [disappear, setDisappear] = useState(true)
    const [currentdata, setCurrrentdata] = useState(null)
    const [mobile, setMobile] = useState(true)

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
    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
    }
    const handlerepeat = () => {
        setCurrentTime(0)
    }
    useEffect(() => {

        if (playing) {
            toggleAudio()
        }
    }, [song.current]);





    return (
        <>
            {song.current && (
                <>
                    <div className='fixed hidden sm:block  inset-x-0 bottom-0 text-black bg-neutral-500/20 dark:bg-neutral-900 h-20 w-full  dark:text-white dark:border-neutral-900'>
                        <div className='relative'>
                            <div className='w-full absolute top-[-8px] '>
                                <input
                                    onChange={handleProgress}
                                    value={dur ? (currentTime * 100) / dur : 0}
                                    type="range"
                                    name="progresBar"
                                    id="prgbar"
                                    className='w-full accent-gray-200 '
                                />
                            </div>
                            <div className='flex justify-between items-center gap-1 p-3 pt-5 relative'>
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
                                <div className=" ">
                                    <div className='musicControls flex justify-between gap-10 absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 '>
                                        <BsFillSkipStartFill className='cursor-pointer' style={{ width: "30px", height: "30px", }} onClick={() => dispatch(prevSong(song.currentSong))} />
                                        <div
                                            className="play"
                                            onClick={() => {
                                                // togglePlaying()
                                                toggleAudio()
                                            }}
                                        >
                                            <span className={!playing ? '' : 'hidden'}>
                                                <FaPlay style={{ width: "30px", height: "30px", }} className='cursor-pointer' />
                                            </span>
                                            <span className={!playing ? 'hidden' : ''}>
                                                <BsPauseFill style={{ width: "30px", height: "30px", }} className='cursor-pointer' />
                                            </span>
                                        </div>
                                        <BsFillSkipEndFill style={{ width: "30px", height: "30px", }} className='cursor-pointer' onClick={() => dispatch(nextSong(song.currentSong))} />
                                    </div>
                                    {/* <div className='mt-3 flex  gap-5'>
                                    <span className="currentT">{fmtMSS(currentTime)}</span>
                                    <input
                                        onChange={handleProgress}
                                        value={dur ? (currentTime * 100) / dur : 0}
                                        type="range"
                                        name="progresBar"
                                        id="prgbar"

                                        className='w-60 accent-gray-200'
                                    />

                                    <span className="totalT">{fmtMSS(dur)}</span>
                                </div> */}
                                </div>

                                <div className='flex gap-3 absolute right-5 items-center'>
                                    <div>
                                        {/* <input
                                        onChange={handleProgress}
                                        value={dur ? (currentTime * 100) / dur : 0}
                                        type="range"
                                        name="progresBar"
                                        id="prgbar"
                                    /> */}
                                        <span className="currentT">{fmtMSS(currentTime)}</span>/
                                        <span className="totalT">{fmtMSS(dur)}</span>
                                    </div>

                                    <div className="vlme flex items-center">
                                        <span className="volum">
                                            <BsFillVolumeDownFill className='cursor-pointer' style={{ width: "30px", height: "30px", }} onClick={() => setShowvolum(!showvolum)} />
                                        </span>
                                        {showvolum && (<input
                                            value={Math.round(statevolum * 100)}
                                            type="range"
                                            name="volBar"
                                            id="volBar"
                                            onChange={(e) => handleVolume(e.target.value / 100)}
                                            className='accent-gray-200'

                                        />)}

                                    </div>
                                    <IoReload style={{ width: "20px", height: "20px", }}
                                        // className={'repeat ' + (repeat ? 'active' : '')}
                                        className='cursor-pointer'
                                        onClick={handlerepeat}
                                    />
                                    {/* <SpeakerWaveIcon className=" h-10 w-15 cursor-pointer" aria-hidden="true" /> */}


                                </div>
                            </div>

                        </div>


                    </div>




                    {/* mobile  overlay*/}

                    <div id="hs-overlay-bottom" className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-full h-full w-full z-[60]  border-b  hidden" tabindex="-1" >
                        <div
                            className='sm:hidden inset-x-0 fixed bottom-0 right-0  h-full dark:bg-neutral-900  bg-neutral-100 text-black  dark:text-white  px-2 py-3 border border-white dark:border-neutral-900  w-full overflow-hidden rounded-t-[20px] 
                        '
                        >
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className='bg-black h-[5px] w-32 my-2 rounded-2xl dark:bg-white/75' data-hs-overlay="#hs-overlay-bottom" onClick={() => setMobile(!mobile)}></div>
                                <div className='mt-3'>
                                    <img
                                        src={song.songslist[song.currentSong].link.images[1].url}
                                        className='w-[300px] h-[300px] rounded-md'

                                    />
                                </div>
                                <div className='text-center py-2'>
                                    <h4 className='text-lg font-black '>{song.current.name}</h4>
                                    <p className='text-sm font-medium '>{song.current.author}</p>
                                </div>
                                <div className='mt-4'>
                                    <div>
                                        <input
                                            onChange={handleProgress}
                                            value={dur ? (currentTime * 100) / dur : 0}
                                            type="range"
                                            name="progresBar"
                                            id="prgbar"
                                            className='w-72 accent-gray-200'
                                        />
                                        <div className='flex justify-between'>
                                            <span className="currentT text-black dark:text-white">{fmtMSS(currentTime)}</span>
                                            <span className="totalT text-black dark:text-white">{fmtMSS(dur)}</span>

                                        </div>

                                    </div>


                                    {/* <input

                                    id="myinput"
                                    type='range'
                                    className='accent-red-600 w-72 my-3'
                                /> */}
                                    <div className='flex justify-between items-center my-5'>
                                        <BsFillSkipStartFill style={{ width: "30px", height: "30px", }} onClick={() => dispatch(prevSong(song.currentSong))} className='cursor-pointer text-black dark:text-white' />
                                        <div
                                            className="play"
                                            onClick={() => {
                                                // togglePlaying()
                                                toggleAudio()
                                            }}
                                        >
                                            <span className={!playing ? '' : 'hidden'}>
                                                <FaPlay style={{ width: "30px", height: "30px", }} className='cursor-pointer text-black dark:text-white' />
                                            </span>
                                            <span className={!playing ? 'hidden' : ''}>
                                                <BsPauseFill style={{ width: "30px", height: "30px", }} className='cursor-pointer text-black dark:text-white' />
                                            </span>
                                        </div>

                                        <BsFillSkipEndFill style={{ width: "30px", height: "30px", }} onClick={() => dispatch(nextSong(song.currentSong))} className='cursor-pointer text-black dark:text-white' />
                                    </div>
                                    <div>

                                    </div>
                                    <div className="vlme flex items-center gap-5">
                                        <span className="volum my-4">
                                            <BsFillVolumeOffFill />
                                        </span>
                                        <input
                                            value={Math.round(statevolum * 100)}
                                            type="range"
                                            name="volBar"
                                            id="volBar"
                                            onChange={(e) => handleVolume(e.target.value / 100)}
                                            className='w-full accent-gray-600 dark:accent-gray-200 '
                                        />
                                        <span>
                                            <BsVolumeUpFill />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {mobile && (
                        <div className='sm:hidden inset-x-0 fixed bottom-0 h-[100px] bg-neutral-200/25 text-black dark:bg-neutral-900 dark:text-white     w-full overflow-hidden 
                     rounded-t-[10px] transition-all duration-300 '  >
                            <div className='relative'>
                                <div className='w-full absolute top-[-3px]  '>
                                    <input
                                        onChange={handleProgress}
                                        value={dur ? (currentTime * 100) / dur : 0}
                                        type="range"
                                        name="progresBar"
                                        id="prgbar"
                                        className='w-full accent-gray-200 '
                                    />
                                </div>
                                <div className='flex justify-between items-center px-8 py-7'>
                                    <div className='flex gap-4' data-hs-overlay="#hs-overlay-bottom" onClick={() => setMobile(!mobile)}>
                                        <div>
                                            <img
                                                src={song.songslist[song.currentSong].link.images[1].url}
                                                className='w-[50px] h-[50px] '

                                            />
                                        </div>
                                        <div className=''>
                                            <h2>{song.songslist[song.currentSong].name}</h2>
                                            <div

                                                className='hover:underline hover:underline-offset-2'><p>{song.current.author}</p></div>

                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="play"
                                            onClick={() => {
                                                // togglePlaying()
                                                toggleAudio()
                                            }}
                                        >
                                            <span className={!playing ? '' : 'hidden'}>
                                                <FaPlay style={{ width: "40px", height: "40px", }} className='cursor-pointer  bg-neutral-200 text-black dark:text-white dark:bg-neutral-600 rounded-full p-3' />
                                            </span>
                                            <span className={!playing ? 'hidden' : ''}>
                                                <BsPauseFill style={{ width: "40px", height: "40px", }} className='cursor-pointer   bg-neutral-200 text-black dark:text-white dark:bg-neutral-600 rounded-full p-3' />
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>)
                    }

                </>
            )}


        </>



    )
}

export default bottomnav
