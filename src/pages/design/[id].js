import React from 'react'
import Image from 'next/image'
import minenglish from '../../../public/264x264-000000-80-0-0.jpg'
import styles from '../../styles/Home.module.css'

function Details() {
    return (
        <div className='my-12'>
            <div className='container mx-auto'>
                <div className='grid  grid-cols-3 gap-4'>
                    <div >
                        <Image
                            src={minenglish}
                            width={300}
                            height={300}
                            alt=''
                            className={styles.productimage}
                        />
                        <p className='text-slate-700/75 my-3 text-xs'>
                            10 episods
                        </p>
                        <hr />
                        <p className='my-3'>Learn and practise useful English language for everyday situations with the BBC. Your weekly instruction manual for saying or doing something in English is published every Thursday.</p>

                    </div>

                    <div className='col-span-2'>
                        <div className='mb-40'>
                            <h1 className='text-2xl font-extrabold'>6 Min English</h1>
                            <p className='text-md'>BBC Radio</p>
                            <p className='text-xs text-slate-700/75 '>education</p>
                            {/* <p>rating</p> */}
                        </div>
                        <hr />
                        <div className='flex flex-col'>
                            <div className='my-4'>
                                <h6 className='text-xs text-slate-700/75 '>Aug 17, 2023</h6>
                                <h4 className='font-medium text-xl'>
                                    are you unhappy at work?
                                </h4>
                                <p className='text-xs text-slate-700/75'>how can jobs change so that workers are happier?</p>
                                <div className='flex items-center gap-4'>
                                    <button>play</button>
                                    <p className='text-xs text-slate-800/50'>6 min</p>
                                </div>
                            </div>
                            <hr />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
