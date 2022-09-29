import React, { useEffect, useState } from 'react';
import { addToDB, getItem } from '../../utilities/localStorage';
import Buttons from '../Buttons/Buttons';
import Profile from '../Profile/Profile';

const Cart = ({ categories, showTost, saveTime }) => {
    const [times, setTime] = useState([])
    const [breakTime, setBreakTime] = useState(0)

    let totalTime = 0;
    for (const category of categories) {
        totalTime = totalTime + category.time
    }

    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setTime(data))
    }, [])

    useEffect(() => {
        const savedTime = getItem()
        setBreakTime(savedTime)
    }, [saveTime])

    const handleBreakTime = (time) => {
        addToDB(time)
        setBreakTime(time)
    }

    return (
        <div>
            <Profile />
            <div className='mt-5'>
                <h1 className='text-xl font-semibold text-black mt-4'>Add A Break</h1>
                <div className='flex bg-slate-50 rounded-lg py-3 px-4 gap-2 mt-2 sm:justify-between'>
                    {
                        times.map((time) => <Buttons
                            time={time}
                            handleBreakTime={handleBreakTime}
                            key={time.id}
                        />)
                    }
                </div>
            </div>
            <div className='mt-3 text-base'>
                <h1 className='text-xl text-black font-semibold'>Exercise Details</h1>
                <div className='flex bg-slate-50 rounded-lg py-3 px-3 gap-2 mt-2 sm:justify-between'>
                    <h2 className='text-black font-medium'>Exercise Time:</h2>
                    <h2 className='text-gray-500 font-medium'>{totalTime} seconds</h2>
                </div>
                <div className='flex bg-slate-50 rounded-lg py-3 px-3 gap-2 mt-2 sm:justify-between'>
                    <h2 className='text-black font-medium'>Break Time:</h2>
                    <h2 className='text-gray-500 font-medium'>{breakTime ? breakTime : '0'} seconds</h2>
                </div>
            </div>
            <div className="card-actions mt-5">
                <button onClick={() => showTost()} className="btn btn-primary w-full">Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;