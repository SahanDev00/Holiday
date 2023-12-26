import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 '>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam earum laudantium veritatis magni modi?</p>
            </div>
            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1615920606214-6428b3324c74?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1599643332904-ddc6060f3289?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />   
            </div>
        </div>
    )
}

export default Rooms
