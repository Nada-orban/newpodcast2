import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div as='nav' className='bg-neutral-950 text-slate-50/50 text-center '>
            <p className='text-xl mx-auto my-auto py-3'>Copyright ©
                <Link href="https://nadasamir.vercel.app/" className='hover:underline hover:underline-offset-2'> Nada Samir</Link>  2023.</p>

        </div>
    )
}

export default Footer
