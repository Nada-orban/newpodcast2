import React from 'react'

function Songsection({ id, name, author, link }) {


    return (
        <div>
            <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-72 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                    <img
                        src={link.images[1].url}
                        alt=""
                        className="h-72 w-72 object-cover object-center mx-auto border rounded-lg"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a
                                href={`/music/${id}`}
                            >
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{author}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Songsection