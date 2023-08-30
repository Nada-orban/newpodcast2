import React from 'react'

function artist({ id, name, author, link }) {
    return (
        <div>
            <div key={id} className='flex flex-col justify-center items-center group relative '>
                <a href={`artists/${id}`}>
                    <div className="relative aspect-h-1 aspect-w-1 w-40 overflow-hidden rounded-full bg-gray-200 lg:aspect-none  ">
                        <img
                            src={link.images[0].url}
                            alt=""
                            className="  h-40 w-40 object-cover object-center mx-auto border rounded-full "
                        />
                        <div className='hidden absolute   bottom-0 left-0  h-full w-full rounded bg-[#1d1b1b67] bg-fixed opacity-0  hover:opacity-100 text-white group-hover:block transition duration-300 ease-out delay-150  '>
                            <div className='flex flex-col justify-center items-center mt-20'>
                                <h1>View Artist</h1>

                            </div>
                        </div>
                    </div>
                </a>
                <a href={`artists/${id}`} > <p className='hover:underline hover:underline-offset-2 mt-2 cursor-pointer'>{author}</p></a>

            </div>


        </div>
    )
}

export default artist
