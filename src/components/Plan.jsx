import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            </div>
            {/* left */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, optio.</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores deleniti ducimus qui, sint nostrum voluptatem architecto dignissimos, quo sed dolore, excepturi esse sit inventore ad ex tempora! Temporibus, ex.</p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan
