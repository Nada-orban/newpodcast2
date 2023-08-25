import React, { useRef, useState } from 'react'
import Nav2 from '@/components/Nav2'
import { products } from '../../data'
import { songs } from '../../songs'
import Link from 'next/link';
import Searchsection from '@/components/Searchsection';
import { Tab } from '@headlessui/react'


// artists
const artists = []
const finalartists = []


function handleartists(bigarray) {
    var authorname = ''
    bigarray.forEach(element => {
        if (element.author !== authorname) {
            authorname = element.author
            if (!finalartists.includes(authorname)) {
                finalartists.push(authorname)
                artists.push(element)
            }
        }
    });
    return artists;
}




function search() {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
    }
    let [categories] = useState([
        "All", "Artists", "Songs", "Podcasts"
    ])
    handleartists(songs)






    return (
        <>
            <Nav2 />
            <div className='pb-24 '>
                <div as='nav' className='w-full h-40 bg-zinc-900 relative'>
                    <input type='search'
                        className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-5 text-xl  bg-zinc-900 text-white '
                        placeholder='Search'
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
                <div className="">
                    <div className=' container mx-auto px-4 py-5 sm:px-auto sm:py-5  lg:px-8'>

                        <div className={input !== "" ? 'block' : 'hidden'}>
                            <Tab.Group>
                                <Tab.List className="flex justify-center items-center gap-4 my-5">
                                    {categories.map((category) => (
                                        <Tab
                                            key={category}
                                            className="p-3"

                                        >
                                            {category}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <Tab.Panels className="mt-2">

                                    <Tab.Panel
                                    // key={idx}

                                    >
                                        <div >
                                            {products.filter((product) =>
                                                product.name.toLowerCase().includes(input)).map((product) => {
                                                    return (
                                                        <>

                                                            <div className='grid grid-cols-1 sm:grid-cols-2  px-4 py-5 sm:px-auto sm:py-5 gap-4 '>
                                                                <div>
                                                                    <Link href={`/design/${product.id}`}>
                                                                        <img
                                                                            src={product.img}
                                                                            alt=""
                                                                            className="h-24 w-24 object-cover object-end mr-16 mx-auto border rounded-lg"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <Link href={`/design/${product.id}`}>
                                                                        <p className='text-md font-bold'>{product.name}</p>
                                                                    </Link>

                                                                </div>

                                                            </div>
                                                            <hr />
                                                        </>
                                                    )
                                                }

                                                )
                                            }
                                            {artists.filter((song) =>
                                                song.author.toLowerCase().includes(input)).map((song) => {
                                                    return (
                                                        <>

                                                            <div className='grid grid-cols-1 sm:grid-cols-2  px-4 py-5 sm:px-auto sm:py-5 gap-4 '>
                                                                <div>
                                                                    <Link href={`/design/${song.id}`}>
                                                                        <img
                                                                            src={song.link.images[0].url}
                                                                            alt=""
                                                                            className="h-24 w-24 object-cover object-end mr-16 mx-auto border rounded-lg"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <Link href={`/design/${song.id}`}>
                                                                        <p className='text-md font-bold'>{song.author}</p>
                                                                    </Link>

                                                                </div>

                                                            </div>



                                                            <hr />
                                                        </>
                                                    )
                                                }

                                                )
                                            }

                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        {artists.filter((song) =>
                                            song.author.toLowerCase().includes(input)).map((song) => {
                                                return (
                                                    <>

                                                        <div className='grid grid-cols-1 sm:grid-cols-2  px-4 py-5 sm:px-auto sm:py-5 gap-4 '>
                                                            <div>
                                                                <Link href={`/design/${song.id}`}>
                                                                    <img
                                                                        src={song.link.images[0].url}
                                                                        alt=""
                                                                        className="h-24 w-24 object-cover object-end mr-16 mx-auto border rounded-lg"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link href={`/design/${song.id}`}>
                                                                    <p className='text-md font-bold'>{song.author}</p>
                                                                </Link>

                                                            </div>

                                                        </div>



                                                        <hr />
                                                    </>
                                                )
                                            }

                                            )
                                        }
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        {songs.filter((song) =>
                                            song.name.toLowerCase().includes(input)).map((song) => {
                                                return (
                                                    <>

                                                        <div className='grid grid-cols-1 sm:grid-cols-2  px-4 py-5 sm:px-auto sm:py-5 gap-4 '>
                                                            <div>
                                                                <Link href={`/design/${song.id}`}>
                                                                    <img
                                                                        src={song.link.images[1].url}
                                                                        alt=""
                                                                        className="h-24 w-24 object-cover object-end mr-16 mx-auto border rounded-lg"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link href={`/design/${song.id}`}>
                                                                    <p className='text-md font-bold'>{song.name}</p>
                                                                </Link>

                                                            </div>

                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            }

                                            )
                                        }
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        {products.filter((product) =>
                                            product.name.toLowerCase().includes(input)).map((product) => {
                                                return (
                                                    <>

                                                        <div className='grid grid-cols-1 sm:grid-cols-2  px-4 py-5 sm:px-auto sm:py-5 gap-4 '>
                                                            <div>
                                                                <Link href={`/design/${product.id}`}>
                                                                    <img
                                                                        src={product.img}
                                                                        alt=""
                                                                        className="h-24 w-24 object-cover object-end mr-16 mx-auto border rounded-lg"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link href={`/design/${product.id}`}>
                                                                    <p className='text-md font-bold'>{product.name}</p>
                                                                </Link>

                                                            </div>

                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            }

                                            )
                                        }
                                    </Tab.Panel>

                                </Tab.Panels>
                            </Tab.Group>
                        </div>



                    </div>
                </div>
            </div>


        </>
    )
}

export default search
