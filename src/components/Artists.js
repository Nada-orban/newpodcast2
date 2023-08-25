import React from 'react'

function artist({ id, name, author, link }) {
    return (
        <div>
            <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-40 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                    <img
                        src={link.images[0].url}
                        alt=""
                        className="h-40 w-40 object-cover object-center mx-auto border rounded-full"
                    />
                </div>
                <p>{author}</p>
            </div>


        </div>
    )
}

export default artist
