import React from 'react'
import loading from "@/public/gifs/loading.gif"
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <Image alt='Loading' src={loading.src} width={50} height={50} />
            </div>
        </div>
    )
}

export default Loading