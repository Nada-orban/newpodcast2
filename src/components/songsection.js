import React, { useEffect } from 'react'
import { PlayIcon, } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux';


function Songsection({ id, name, author, link }) {

    const dispatch = useDispatch()
    const song = useSelector(state => state.song)
    return (
        <div>
            <div key={id} className="group relative">
                <a href=''>
                    <div className="group relative  w-72 overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-72">
                        <img
                            src={link.images[1].url}
                            alt=""
                            className=" h-72 w-72 object-cover object-center mx-auto border rounded-lg"
                        />
                        <div className='block absolute   bottom-0 left-0  h-72 w-72 rounded bg-red-400 bg-fixed opacity-0  hover:opacity-100 text-white group-hover:block transition duration-300 ease-out delay-150  '>
                            <div className='flex flex-col justify-center items-center mt-20 rounded-full bg-white'>
                                <PlayIcon className='bg-black h-5 w-5 cursor-pointer mr-3' />
                            </div>
                        </div>
                    </div>
                </a>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700 dark:text-white">
                            <a
                                href={`/music/${id}`}
                            >
                                <span aria-hidden="true" className="absolute inset-0 " />
                                {name}
                            </a>
                        </h3>
                        <a href={`/artists/${id}`}><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{author}</p></a>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Songsection