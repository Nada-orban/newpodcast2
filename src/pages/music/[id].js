
import React, { useEffect } from 'react'
import Nav2 from '@/components/Nav2'
import Link from 'next/link'
import Bottomnav from '@/components/Bottomnav'
import styles from '../../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { songhandle, currentmusic } from '../../components/redux/Songslice'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import { IoReload } from 'react-icons/io5'
import { BsFillSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useTheme } from "next-themes";



function songid({ song }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    console.log(song.url)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(currentmusic(song))


    }, [])
    // const handlesong = (song) => {
    //     console.log(song)
    //     dispatch(currentmusic(song))
    // }

    return (
        <>
            <div className='hidden sm:block'><Nav2 /></div>

            <div className='sm:hidden inset-x-0 fixed top-0 h-[100px] bg-neutral-100/25 text-black dark:bg-neutral-900/50  dark:text-white  px-8 py-7 border border-white w-full overflow-hidden 
                    rounded-b-[50px] transition-all duration-300 ' >
                <div className='flex justify-between items-center '>
                    <a href='/music'>
                        <div className='rounded-full w-10 h-10 p-3  bg-neutral-200 text-neutral-700 dark:text-white dark:bg-neutral-600  '>
                            <AiOutlineArrowLeft />
                        </div>
                    </a>

                    <div>
                        <h3 className='text-center font-extrabold text-shadow' >Now Playing</h3>
                        {/* <p className='text-center'>Album</p>
                        <IoIosArrowDown className='mx-auto' /> */}
                    </div>
                    <div className='rounded-full w-10 h-10 p-3 bg-neutral-200 text-neutral-700 dark:text-white dark:bg-neutral-600 ' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}> {theme === "light" ? <MdDarkMode /> : <BsFillSunFill />} </div>
                </div>
                {/* <div className=''>
                    <div className='flex gap-2 my-2'>
                        <div>
                            <img
                                src={song.link.images[1].url}
                                className='w-[40px] h-[40px]'

                            />
                        </div>
                        <div className=''>
                            <h2>{song.name}</h2>
                            <div

                                className='hover:underline hover:underline-offset-2'><p>{song.author}</p></div>

                        </div>
                    </div>
                    <hr />

                </div> */}

                {/* <IoIosArrowUp className='mx-auto mt-20 ' /> */}

            </div>

            <div key={song.id} className=' pb-10'>
                <div className='absolute -z-10 ' >
                    <img
                        src={song.link.images[1].url}
                        className='w-full h-full   fixed blur-md'
                        alt=""

                    />
                </div>
                <div className='container mx-auto  pt-16
                
                '>
                    <div className='mx-auto max-w-2xl px-7  sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
                        <div className='flex flex-col gap-7'>
                            <div >

                                <img
                                    src={song.link.images[1].url}
                                    alt=''
                                    className='h-96 w-96 object-cover object-center mx-auto rounded-lg mt-16 sm:mt-0 sm:w-[350px] sm:h-[350px]'
                                />


                            </div>


                            {/* <div className='mt-20 text-center sm:text-start '>

                                <h1 className='text-2xl font-extrabold mb-2'>{song.name}</h1>
                                <a href={`/artists/${song.id}`} >
                                    <p className='text-xs text-slate-700/75 mb-1 hover:underline hover:underline-offset-2'>{song.author}</p>
                                </a>
                                <p className='text-slate-700/75 my-3 text-xs'>
                                    10 episods
                                </p>
                                <Bottomnav song={song.url} />


                                <audio id={song.id} controls className='bg-gray-100 w-full rounded-lg mt-5 sticky bottom-0  '>
                                    <source src={song.url} type="audio/ogg" className='' />
                                    Your browser does not support the audio element.

                                </audio>



                            </div> */}

                        </div>
                    </div>
                </div>
                {/* <div className='absolute  hidden sm:block  inset-x-0 bottom-0 text-white bg-neutral-900/50 h-20 w-full '>
                    <div className='flex justify-between items-center gap-1 p-3 relative'>
                        <div className='flex gap-2'>
                            <div>
                                <img
                                    src={song.link.images[1].url}
                                    className='w-[50px] h-[50px]'

                                />
                            </div>
                            <div className=''>
                                <h2>{song.name}</h2>
                                <a href={`/artists/${song.id}`} className='hover:underline hover:underline-offset-2'><p>{song.author}</p></a>

                            </div>
                        </div>
                        <div className='flex gap-5 absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2'>

                            <BsFillSkipStartFill style={{ width: "30px", height: "30px", color: "white" }} />
                            <FaPlay style={{ width: "30px", height: "30px", color: "white" }} />
                            <BsFillSkipEndFill style={{ width: "30px", height: "30px", color: "white" }} />


                        </div>
                        <div className='flex gap-3 absolute right-5'>
                            <p>0:03<span>|</span>3:1</p>
                            <IoReload style={{ width: "20px", height: "20px", color: "white" }} />



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
                </div> */}
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
