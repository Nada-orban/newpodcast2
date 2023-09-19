import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../components/context/playerContext'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import { IoReload } from 'react-icons/io5'
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPauseFill } from 'react-icons/bs'

function controls() {
    const {
        currentSong,
        nextSong,
        prevSong,
        repeat,
        random,
        playing,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songslist,
    } = useContext(playerContext)
    console.log(currentSong)
    console.log(songslist)
    const audio = useRef('audio_tag')

    // self State
    const [statevolum, setStateVolum] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
    }

    const toggleAudio = () =>
        audio.current.paused ? audio.current.play() : audio.current.pause()

    const handleVolume = (q) => {
        setStateVolum(q)
        audio.current.volume = q
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
    }

    useEffect(() => {
        audio.current.volume = statevolum
        if (playing) {
            toggleAudio()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong])

    return (
        <>
            <div className='absolute  hidden sm:block  inset-x-0 bottom-0 text-white bg-neutral-900/50 h-20 w-full '>
                <div className='flex justify-between items-center gap-1 p-3 relative'>
                    <div className='flex gap-2'>
                        <div>
                            {/* <img
                                src={song.link.images[1].url}
                                className='w-[50px] h-[50px]'

                            /> */}
                        </div>
                        <div className=''>
                            <h2>{songslist[currentSong].title}</h2>
                            <a href={`/artists/${songslist[currentSong].id}`} className='hover:underline hover:underline-offset-2'><p>{songslist[currentSong].author}</p></a>

                        </div>
                    </div>
                    <audio
                        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                        onCanPlay={(e) => setDur(e.target.duration)}
                        onEnded={handleEnd}
                        ref={audio}

                        preload="true"
                    // src={songslist[currentSong].fileUrl}
                    />
                    <div className='musicControls flex gap-5 absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2'>
                        {/* <HandThumbDownIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" /> */}
                        <BsFillSkipStartFill onClick={prevSong} style={{ width: "30px", height: "30px", color: "white" }} />
                        <div
                            className="play"
                            onClick={() => {
                                togglePlaying()
                                toggleAudio()
                            }}
                        >
                            <span className={!playing ? '' : 'hide'}>
                                <FaPlay style={{ width: "30px", height: "30px", color: "white" }} />
                            </span>
                            <span className={!playing ? 'hide' : ''}>
                                <BsPauseFill style={{ width: "30px", height: "30px", color: "white" }} />
                            </span>
                        </div>
                        <FaPlay style={{ width: "30px", height: "30px", color: "white" }} />

                        <BsFillSkipEndFill style={{ width: "30px", height: "30px", color: "white" }} onClick={nextSong} />
                        {/* <HandThumbUpIcon className=" h-10 w-10 cursor-pointer" aria-hidden="true" /> */}

                    </div>
                    <div className='flex gap-3 absolute right-5'>
                        <p>0:03<span>|</span>3:1</p>
                        <IoReload style={{ width: "20px", height: "20px", color: "white" }} onClick={toggleRepeat}
                            className={'repeat ' + (repeat ? 'active' : '')} />
                        {/* <SpeakerWaveIcon className=" h-10 w-15 cursor-pointer" aria-hidden="true" /> */}


                    </div>
                </div>

            </div>
            <div className='sm:hidden inset-x-0 absolute  bottom-0 h-1/3 dark:bg-neutral-900/50  bg-neutral-100/25  dark:text-white text-black px-5 py-3 border border-white w-full overflow-hidden rounded-t-[50px]'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div className='bg-black/75 h-[5px] w-32 my-2 rounded-2xl'></div>
                    <div className='text-center'>
                        <h4 className='text-lg font-black '>{song.name}</h4>
                        <p className='text-sm font-medium'>{song.author}</p>
                    </div>
                    <div>
                        <div></div>
                        <input

                            id="myinput"
                            type='range'
                            className='accent-red-600 w-72 my-3'
                        />
                        <div className='flex justify-between items-center my-3'>
                            <BsFillSkipStartFill style={{ width: "30px", height: "30px", color: "black" }} />
                            <FaPlay style={{ width: "30px", height: "30px", color: "black" }} />
                            <BsFillSkipEndFill style={{ width: "30px", height: "30px", color: "black" }} />
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default controls
