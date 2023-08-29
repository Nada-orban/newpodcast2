import React from 'react'
import { PlayIcon, } from '@heroicons/react/24/outline'

function Songsection({ id, name, author, link }) {


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
                        <div className='hidden absolute   bottom-0 left-0  h-72 w-72 rounded bg-red-400 bg-fixed opacity-0  hover:opacity-100 text-white group-hover:block transition duration-300 ease-out delay-150  '>
                            <div className='flex flex-col justify-center items-center mt-20 rounded-full bg-white'>
                                <PlayIcon className='bg-black' />
                            </div>
                        </div>
                    </div>
                </a>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a
                                href={`/music/${id}`}
                            >
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{author}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Songsection