import React from 'react'

function Cardsection({ id, name, source, img, category }) {


    return (
        <div>
            <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover object-center "
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={`/design/${id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Cardsection
