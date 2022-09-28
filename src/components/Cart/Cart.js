import React, { useEffect, useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Profile from '../Profile/Profile';

const Cart = ({ categories }) => {
    const [times, setTime] = useState([])
    console.log(categories);
    let totalTime = 0;
    for (const category of categories) {
        totalTime = totalTime + category.time
    }

    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setTime(data))
    }, [])

    return (
        <div>
            <Profile />
            <div className='mt-5'>
                <h1 className='text-xl font-semibold text-black mt-4'>Add A Break</h1>
                <div className='flex bg-slate-50 rounded-lg py-3 px-4 gap-2 mt-2 sm:justify-between'>
                    {
                        times.map((time) => <Buttons time={time} key={time.id} />)
                    }
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl text-black font-semibold'>Exercise Details</h1>
                <div className='flex bg-slate-50 rounded-lg py-3 px-6 gap-2 mt-2 sm:justify-between'>
                    <h2 className='text-lg text-black font-medium'>Exercise Time:</h2>
                    <h2 className='text-lg text-gray-500 font-medium'>{totalTime}s</h2>
                </div>
                <div className='flex bg-slate-50 rounded-lg py-3 px-6 gap-2 mt-2 sm:justify-between'>
                    <h2 className='text-lg text-black font-medium'>Break Time:</h2>
                    <h2 className='text-lg text-gray-500 font-medium'>200s</h2>
                </div>
            </div>
            <div className="card-actions mt-9">
                <button className="btn btn-primary w-full">Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;