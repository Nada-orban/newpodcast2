import React, { useRef, useState } from 'react'
import Nav2 from '@/components/Nav2'
import { products } from '../../data'

function search() {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
    }






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

                <div className={input !== "" ? 'block' : 'hidden'}>

                    {products.filter((product) =>
                        product.name.toLowerCase().includes(input)).map((product) => {
                            return (
                                <div className='container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div>
                                            <img
                                                src={product.img}
                                                alt=""
                                                className="h-20 w-20 object-cover object-center mx-auto "
                                            />
                                        </div>
                                        <div>
                                            <p className='text-md font-bold'>{product.name}</p>
                                            <p className='text-sm'>{product.category}</p>
                                        </div>

                                    </div>


                                </div>
                            )
                        }

                        )
                    }

                </div>
            </div>


        </>
    )
}

export default search
