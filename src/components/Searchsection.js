import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { songs } from '../../songs'
import { products } from '../../data'
import artist from './Artists'
import Link from 'next/link'


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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Searchsection() {
    handleartists(songs)

    let [categories] = useState([
        "All", "Artists", "Songs", "Podcasts"
    ])

    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
    }

    return (
        <div className="">
            <Tab.Group>
                <Tab.List className="flex justify-center items-center gap-4 my-5">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className="p-3"
                        // className={({ selected }) =>
                        //     classNames(
                        //         '  p-2.5 text-sm font-medium ',
                        //         selected
                        //             ? 'underline underline-offset-2'
                        //             : ''
                        //     )
                        // }
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
                                                    <p className='text-sm'>{product.category}</p>
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
                        <div>hhhhhhhhhhhhhh</div>
                    </Tab.Panel>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Searchsection
