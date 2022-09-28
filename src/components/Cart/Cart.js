import React, { useEffect, useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Profile from '../Profile/Profile';

const Cart = () => {
    const [times, setTime] = useState([])

    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setTime(data))
    }, [])

    return (
        <div>
            <Profile />
            <h1 className='text-lg font-semibold text-black mt-4'>Add A Break</h1>
            <div className='flex bg-slate-50 rounded-lg py-3 px-4 gap-2'>
                {
                    times.map((time) => <Buttons time={time} key={time.id} />)
                }
            </div>
        </div>
    );
};

export default Cart;