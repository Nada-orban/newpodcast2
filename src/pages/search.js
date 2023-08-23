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
                <div className=' container mx-auto px-4 py-5 sm:px-auto sm:py-5  lg:px-8'>

                    <div className={input !== "" ? 'block' : 'hidden'}>

                        {products.filter((product) =>
                            product.name.toLowerCase().includes(input)).map((product) => {
                                return (
                                    <>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto px-4 py-5 sm:px-auto sm:py-5 '>
                                            <div>
                                                <img
                                                    src={product.img}
                                                    alt=""
                                                    className="h-24 w-24 object-cover object-start mx-auto border"
                                                />
                                            </div>
                                            <div>
                                                <p className='text-md font-bold'>{product.name}</p>
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
                </div>
            </div>


        </>
    )
}

export default search
