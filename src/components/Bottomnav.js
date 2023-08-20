import React from 'react'
import Image from 'next/image'
import imagelogo from '../../public/264x264-000000-80-0-0.jpg'
import { HandThumbDownIcon, HandThumbUpIcon, ArrowUturnLeftIcon, ForwardIcon, PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'


function bottomnav() {
    return (
        <div as='nav' className='sticky bottom-0 bg-red-700 text-white px-5 py-3'>
            <div className='flex justify-between items-center gap-1'>
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
                    <HandThumbDownIcon className=" h-10 w-10" aria-hidden="true" />
                    <ArrowUturnLeftIcon className=" h-10 w-10" aria-hidden="true" />
                    <PlayIcon className=" h-10 w-10" aria-hidden="true" />
                    <ForwardIcon className=" h-10 w-10" aria-hidden="true" />
                    <HandThumbUpIcon className=" h-10 w-10" aria-hidden="true" />

                </div>
                <div className='flex justify-end items-center gap-3'>
                    <p>0:03<span>|</span>3:1</p>
                    <SpeakerWaveIcon className=" h-10 w-15" aria-hidden="true" />


                </div>
            </div>

        </div>
    )
}

export default bottomnav
