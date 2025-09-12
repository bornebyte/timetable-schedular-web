import Image from 'next/image'
import React from 'react'

const AboutComponent = () => {
    return (
        <div className='px-10 mt-20'>
            <div className='text-6xl w-full bg-green-200 h-72 flex flex-col justify-center rounded-2xl px-20 font-bold'>About</div>
            <div className='flex justify-between items-center px-20'>
                <Image src={"/about1.webp"} width={500} height={500} alt='about' />
                <div>
                    <h2 className='text-4xl font-semibold'>THE PROBLEM</h2>
                    <h2 className='text-2xl font-semibold'>lack of organisation 🤝 poor productivity</h2>
                    <p>Students across the world are facing a major barrier to academic success:</p>
                    <ol type='1' className='my-4'>
                        <li>1. Their lack of orgination is hindering their productivity.</li>
                        <li>2. As a result, their imput ≠ output. Student efficiency needs revolutionizing.</li>
                    </ol>
                    <p>We are on a mission to solve this 🚀</p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent