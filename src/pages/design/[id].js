import React from 'react'
import Image from 'next/image'
import minenglish from '../../../public/264x264-000000-80-0-0.jpg'
import styles from '../../styles/Home.module.css'
import { ArrowUpOnSquareStackIcon } from '@heroicons/react/24/outline'

function Details({ product }) {
    return (
        <div className='my-12'>
            <div className='container mx-auto'>
                <div className='grid  grid-cols-3 gap-4'>
                    <div >
                        <Image

                            width={300}
                            height={300}
                            alt=''
                            className={styles.productimage}
                        />
                        <p className='text-slate-700/75 my-3 text-xs'>
                            10 episods
                        </p>
                        <hr />
                        <p className='my-3'>{product.description}</p>

                    </div>

                    <div className='col-span-2'>
                        <div className='mb-40'>
                            <h1 className='text-2xl font-extrabold'>{product.name}</h1>
                            <p className='text-md'></p>
                            <p className='text-xs text-slate-700/75 '>{product.category}</p>
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



export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/products');
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
    const res = await fetch(`http://localhost:3000/api/products/${context.params.id}`);
    const data = await res.json();


    return {
        props: {
            product: data
        }
    }
}
