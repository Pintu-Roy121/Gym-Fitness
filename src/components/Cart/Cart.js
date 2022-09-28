import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../images/profile.png'

const Cart = () => {
    return (
        <div className='flex'>
            <img className='w-14 bg-white rounded-full mr-4' src={img} alt="" />
            <div>
                <h1 className='text-lg text-black font-bold'>Pintu Roy</h1>
                <p className='text-gray-500 font-semibold'><FontAwesomeIcon icon={faLocation} /> Dhaka, Mirpur</p>
            </div>
        </div>
    );
};

export default Cart;