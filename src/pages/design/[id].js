
import React from 'react'
import Image from 'next/image'
import minenglish from '../../../public/264x264-000000-80-0-0.jpg'
import styles from '../../styles/Home.module.css'
import { PlayIcon } from '@heroicons/react/24/outline'
import Nav2 from '@/components/Nav2'
import Link from 'next/link'

function Details({ product }) {
    return (
        <>
            <Nav2 />
            <div className='my-12'>
                <div className='container mx-auto '>
                    <div className='mx-auto max-w-2xl px-7  sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8'>
                        <div className='grid   grid-cols-1 gap-7 sm:grid-cols-2'>
                            <div >
                                <img
                                    src={product.img}
                                    alt=''
                                    className='h-72 w-72 object-cover object-center mx-auto  border rounded-lg'
                                />


                            </div>

                            <div >

                                <h1 className='text-2xl font-extrabold mb-2'>{product.name}</h1>
                                <p className='text-xs text-slate-700/75 mb-1'>{product.category}</p>
                                {/* <p className='text-slate-700/75 my-3 text-xs'>
                                    10 episods
                                </p> */}
                                <hr />
                                <p className='my-3'>{product.description}</p>
                                <div className='flex items-center gap-2'>
                                    <Link href={product.itunes}>iTunes</Link>
                                    <p>-</p>
                                    <Link href={product.rss}>RSS</Link>
                                </div>

                                {/* <div className='flex flex-col'>
                                    <div className='my-4'>
                                        <h6 className='text-xs text-slate-700/75 '>Aug 17, 2023</h6>
                                        <h4 className='font-medium text-xl'>
                                            are you unhappy at work?
                                        </h4>
                                        <p className='text-xs text-slate-700/75'>how can jobs change so that workers are happier?</p>
                                        <div className='flex items-center gap-3 mt-2'>
                                            <button className='flex gap-1 px-3 items-center border rounded-full border-slate-200 text-sky-700 bg-slate-200  hover:bg-sky-700 hover:text-white' >
                                                <PlayIcon className="block h-4 w-4 " aria-hidden="true" />
                                                <p className='text-sm font-bold'>play</p>
                                            </button>
                                            <p className='text-xs text-slate-800/50'>6 min</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details



export async function getStaticPaths() {
    const res = await fetch('https://newpodcast2.vercel.app/api/products');
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
    const res = await fetch(`https://newpodcast2.vercel.app/api/products/${context.params.id}`);
    const data = await res.json();


    return {
        props: {
            product: data
        }
    }
}
