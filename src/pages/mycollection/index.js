import React, { Fragment } from 'react'
import Image from 'next/image'
import imagelogo from '../../../public/264x264-000000-80-0-0.jpg'
import { PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon, EllipsisHorizontalIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import styles from '../../styles/Home.module.css'

function index() {
    return (
        <div>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 '>
                <h1 className='text-2xl font-bold  text-gray-900'>Recently Played</h1>
                <div>
                    <div className='relative my-5 h-72 overflow-hidden group bg-black w-72 transition hover:duration-300 hover:ease-out'>
                        <div className='absolute top-0 right-0 cursor-pointer' >
                            <Image
                                src={imagelogo}
                                width={288}
                                height={288}
                                className={styles.mycollectionphoto}
                            />

                        </div>
                        <div className='absolute cursor-pointer bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#1d1b1b67] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
                        <div className='hidden absolute top-28 left-24 z-10 text-white group-hover:block '>
                            <PlayCircleIcon className=" h-12 w-12 cursor-pointer mx-auto " aria-hidden="true" />
                            <p className='text-md'>6 Min English</p>
                            <Menu as="div" className="relative ml-3 p-2">
                                <div>
                                    <Menu.Button className="relative flex rounded-full  mt-8 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <EllipsisHorizontalIcon className=" h-10 w-10 cursor-pointer " aria-hidden="true" />
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
                                    <Menu.Items className="absolute text-black left-16 top-7 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
                                        <Menu.Item>
                                            <p>remove from your collection</p>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <p>share</p>
                                        </Menu.Item>

                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
